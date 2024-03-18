import React from "react";
import Redux from "redux";
import ReactRedux from "react-redux";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage(event) {
    console.log(this.state);
    console.log([...this.state.messages, this.state.input]);
    if (this.state.input != "") {
      this.setState((state) => ({
        // messages: state.messages.concat(state.input),
        messages: [...state.messages, state.input],
        input: "",
      }));
    }
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <div>
          <input
            type={"text"}
            value={this.state.input}
            onChange={this.handleChange}
          ></input>{" "}
          <button
            className="btn btn-block btn-primary"
            onClick={this.submitMessage}
          >
            Submit
          </button>
        </div>
        <div>
          <ul>
            {/*console.log(this.state.messages)*/}
            {this.state.messages.map((msg) => (
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </div>

        {/* Change code above this line */}
      </div>
    );
  }
}

export default DisplayMessages;
