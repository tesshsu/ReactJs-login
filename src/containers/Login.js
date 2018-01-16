import React, { Component } from "react";
import { Button, FormGroup, FormControl, InputGroup, Glyphicon} from "react-bootstrap";
import "./Login.css";
import config from "../config";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
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

    try {
      await this.login(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  }

  login(email, password) {
      const userPool = new CognitoUserPool({
        UserPoolId: config.cognito.USER_POOL_ID,
        ClientId: config.cognito.APP_CLIENT_ID
      });
      const user = new CognitoUser({ Username: email, Pool: userPool });
      const authenticationData = { Username: email, Password: password };
      const authenticationDetails = new AuthenticationDetails(authenticationData);

      return new Promise((resolve, reject) =>
        user.authenticateUser(authenticationDetails, {
          onSuccess: result => resolve(),
          onFailure: err => reject(err)
        })
      );
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
              placeholder="Mot de passe"
            />
			<FormControl.Feedback>
				<Glyphicon glyph="lock" />
			</FormControl.Feedback>
		  </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            class="subBtn"
          >
            Je m'inscris
          </Button>
        </form>
      </div>
    );
  }
}
