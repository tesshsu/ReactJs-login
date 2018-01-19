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

  authenticateUser(data,state) {
    this.setState({ isLoading: true });
  }

  login(email, password) {
    const Authuser = {
      email: "tess.hsu@gmail.com",
      password: "1234"
    };    
    
    var loginAction;
    if (Authuser) {
      loginAction = window.location.href =  "https://www.horoscope.fr/"
    }

    return (
      {loginAction}
    );
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.login(this.state.email, this.state.password);
      alert("Vous etez bien registre");
      //this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
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
