import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      charsRemaining: 50
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputValue = event.target.value;
    const charsRemaining = 50 - inputValue.length;

    if (charsRemaining >= 0) {
      this.setState({
        title: inputValue,
        charsRemaining: charsRemaining
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body, createdAt } = this.state;

    if (title.trim() !== "") {
      this.props.onAdd({
        title,
        body,
        createdAt
      });

      this.setState({
        title: "",
        body: "",
        createdAt: new Date().toISOString()
      });
    }
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.charsRemaining}
        </p>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          placeholder="Enter note title"
        />

        <textarea
          name="body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          placeholder="Enter note content"
          className="note-input__body"
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NotesInput;
