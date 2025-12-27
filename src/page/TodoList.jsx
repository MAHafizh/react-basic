import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeTodo } from "../redux/todoListSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTodo({id: id}));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Link to={"/todolist/add"}>Add Todo</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <Link to={`/todolist/edit/${todo.id}`}>Update</Link>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
