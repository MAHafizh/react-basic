import React from "react";
import Notes from "./Notes";

export default function NoteList({ notes, onChange, onDelete }) {
  return <ul>
    {notes.map(note => (
        <li key={note.id}>
            <Notes note={note} onChange={onChange} onDelete={onDelete}/>
        </li>
    ))}
  </ul>;
}