import React from "react";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      tanggal : showFormattedDate()
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleDelete(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id)
      };
    });
  }

  addNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString()
          }
        ]
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Notes App</h1>
        </header>
        <div className="note-app__body">
          <NotesInput onAdd={this.addNote} />
          <NotesList notes={this.state.notes} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default NotesApp;
