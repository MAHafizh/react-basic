import React from "react";
import TaskForm from "./TaskForm.jsx";

export default function TaskList({items=[]}) {

  return (
    <>
      <h1>List of Task</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}