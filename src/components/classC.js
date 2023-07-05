import React, { Component } from "react";

export default class classC extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2> I am a {this.state.color} Car!</h2>;
  }
}
