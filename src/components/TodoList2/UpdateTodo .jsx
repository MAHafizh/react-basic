import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "../../redux/todoListSlice";

export default function UpdateTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const todo = useSelector((state) => getTodo(state, Number(params.id)));
  const [name, setName] = useState(todo.name);

  function handleClick() {
    dispatch(updateTodo({ id: todo.id, name: name }));
    navigate("/todolist");
  }
  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Input Todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Update Todo</button>
    </div>
  );
}
