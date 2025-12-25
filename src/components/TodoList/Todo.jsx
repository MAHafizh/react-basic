import React from "react";

const Todo = ({ text, isCompleted }) => {
  return <li>{isCompleted ? <del>{text}</del> : text}</li>;
};

export default Todo;