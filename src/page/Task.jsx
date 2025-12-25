import React from "react";
import TaskForm from "../components/Task/TaskForm.jsx";
import TaskList from "../components/Task/TaskList.jsx";
import { useImmer } from "use-immer";

export default function Task() {
  const [items, setItems] = useImmer([]);

  function handleSubmit(item) {
    setItems((draft) => {
      draft.push(item);
    });
  }

  return (
    <>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} />
    </>
  );
}