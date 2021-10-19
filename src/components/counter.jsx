import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    product: {
      name: "RealMe X7 Max",
      price: 30000,
      processor: "Dimensity 1200",
      display: "Super Amoled",
    },
  };

  // constructor() { or declare function = () =>
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  handleIncrement = (product) => {
    // this.state.count += 1; this wont work
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    //parameter
    console.log(product);
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.getBadgeClass()}>
          {this.formaCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          //onClick={this.handleIncrement} with out argument
          onClick={() => this.handleIncrement(this.state.product)}
        >
          Increment
        </button>
        <br />
        {this.state.tags.length === 0 && "Please add some tags"}
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formaCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
