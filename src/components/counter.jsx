import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.counter.value,
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
    // this.state.value += 1; this wont work
    this.setState({ value: this.state.value + 1 });
    console.log(this.state.value);

    //parameter
    console.log(product);
  };

  render() {
    //console.log(this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.children}
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
          {/* <br />
        {this.state.tags.length === 0 && "Please add some tags"}
        <ul>{this.renderTags()}</ul> */}
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formaCount() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
