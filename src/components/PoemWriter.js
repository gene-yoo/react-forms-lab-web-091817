import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      errorStatus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateText = this.validateText.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        ...this.state,
        value: event.target.value
      },
      this.validateText
    );
  }

  validateText() {
    let text = this.state.value.split("\n");
    console.log(text);
    if (
      text.length === 3 &&
      text[0].trim().split(" ").length === 5 &&
      text[1].trim().split(" ").length === 3 &&
      text[2].trim().split(" ").length === 5
    ) {
      this.setState({
        ...this.state,
        errorStatus: false
      });
    } else {
      this.setState({
        ...this.state,
        errorStatus: true
      });
    }
    console.log(this.state.errorStatus);
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.errorStatus && (
          <div
            id="poem-validation-error"
            style={Object.assign(
              {},
              { color: "red" }
              // { visibility: this.state.errorStatus ? "visible" : "hidden" }
            )}
          >
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
