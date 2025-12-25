import React from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = React.useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick (e) {
    e.preventDefault();
    onAddNote(text);
    setText("");
  }

  return (
    <>
      <input type="text" placeholder="Enter note text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add Note</button>
    </>
  );
}
