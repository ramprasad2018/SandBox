import React from "react";
import ReactDOM from "react-dom";
import MainForm from "./mainform";

class LogonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userID: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogon = this.handleLogon.bind(this);
  }

  handleChange(event) {
    this.setState({ userID: event.target.value });
  }

  handleLogon(event) {
    alert("Entered user ID " + this.state.userID);
    event.preventDefault();
    ReactDOM.render(<MainForm userID="ram" />, document.getElementById("root"));
  }

  render() {
    return (
      <form onSubmit={this.handleLogon}>
        <label>
          UserName:
          <input
            type="text"
            value={this.state.userID}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Logon" />
      </form>
    );
  }
}

export default LogonForm;
