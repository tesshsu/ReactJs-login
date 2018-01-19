import React, { Component } from "react";
import { HelpBlock, FormGroup, FormControl, Glyphicon} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";

export default class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }
  
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

   handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Veuillez vérifier votre email pour le code</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="vérifier"
          loadingText="Vérifier…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
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
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            placeholder="Mot de pass confirmé"
          />
          <FormControl.Feedback>
          <Glyphicon glyph="lock" />
         </FormControl.Feedback>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Registré"
          loadingText="Signing up…"
         />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        <h4>Registré</h4>
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
  
}
