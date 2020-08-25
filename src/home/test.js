import React, { Component } from "react";

class TechView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gopinath",
    };
  }
  render() {
    const element1 = (
        <h1 className="greeting">
          Bonjour, monde !
        </h1>
      );

    const element = React.createElement(
      "h1",
      { className: "greeting" },
      "Bonjour, monde !"
    );
    return (
      <div>
        <span>hello Tech View {element} </span>
        <span>hello Tech View {element1} </span>
      </div>
    );
  }
}

export default TechView;
