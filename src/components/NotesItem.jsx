import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, body, createdAt, archieved, id, onDelete }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
