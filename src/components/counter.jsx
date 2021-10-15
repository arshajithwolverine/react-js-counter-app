import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className="badge badge-primary m-2">
          {this.formaCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formaCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;