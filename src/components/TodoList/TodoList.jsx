import React from "react";
import Todo from "./Todo.jsx";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn Laravel",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn MSFS24",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn Valorant",
      isCompleted: true,
    },
  ];

  return (
    <div>
      <ul>{todos.map((todo) => <Todo key={todo.id} {...todo} />)}</ul>
    </div>
  );
};

export default TodoList;
