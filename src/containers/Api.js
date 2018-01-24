import React, { Component } from "react";
import $ from 'jquery'; 
import "./Api.css";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    $.getJSON('https://randomuser.me/api/')
      .then(({ results }) => this.setState({ person: results }));
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>Api call Demo</h1>
        <h4>Name: { item.name.last }</h4>
        <span>Tel : { item.cell }, email: { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
}