import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayHello = this.displayHello.bind(this);
    this.input = React.createRef();
  }

  displayHello() {
    ReactDOM.render(<h1>hello there</h1>, document.getElementById("root"));
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.displayHello}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
