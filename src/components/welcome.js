import React, { Component } from "react";

export default class welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to the team {this.props.name} a.k.a {this.props.heroName}
        </h1>
      </div>
    );
  }
}
