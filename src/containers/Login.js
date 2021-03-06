import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import { Button, FormGroup, FormControl, Glyphicon} from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  login(email, password) {
    
    // TO DO: defined authticated account method
    const valideMail = "tess.hsu@gmail.com";
    let loginAction;

    if (email == valideMail) {
      loginAction = window.location.href =  "https://www.horoscope.fr/"
    }else{
      loginAction = alert("verifier votre compte")
    }

    return (
      {loginAction}
    );
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await this.login(this.state.email, this.state.password);
      //this.props.history.push("/");
    } catch (e) {
      alert(e);
    }
  }

  responseFacebook(response) {
      console.log(response);
    }

  render() {
    return (
      <div className="Login">
        <h4>Connecxion</h4>
        <form onSubmit={this.handleSubmit}>        
          <FormGroup controlId="email" bsSize="large">			
    			<FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
    			<FormControl.Feedback>
    				<Glyphicon glyph="envelope" />
    			</FormControl.Feedback>
    		  </FormGroup>
  		  <FormGroup controlId="password" bsSize="large">			
    			<FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Mot de pass"
                />
    			<FormControl.Feedback>
  				<Glyphicon glyph="lock" />
  			 </FormControl.Feedback>
		    </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          onClick={!this.validateForm() ? this.handleSubmit : null}
          type="submit"
          className="subBtn"
        >
          Je m'inscris
        </Button>
        <h4>ou</h4>
      </form>
      <FacebookLogin
          appId="283461415196212"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          textButton=""
          cssClass="my-facebook-button-login"
          icon="fa-facebook"
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}
