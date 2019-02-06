import React from "react";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <nav>
        <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
        <a href="/js/">JavaScript</a> |<a href="/jquery/">jQuery</a>
      </nav>
    );
  }
}

export default MainForm;
