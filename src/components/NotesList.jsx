import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesItem key={note.id} onDelete={onDelete} {...note} />
        ))
      ) : (
        <p className="notes-list__empty-message">No notes found</p>
      )}
    </div>
  );
}

export default NotesList;
