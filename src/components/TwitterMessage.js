import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", count: parseInt(props.maxChars) };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        ...this.state,
        value: event.target.value,
        count: this.state.count - event.target.value.length
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Remaining Chars: {this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
