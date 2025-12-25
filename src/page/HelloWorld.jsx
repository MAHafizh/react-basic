import React from "react";
import HelloWorldHeading from "../components/HelloWorld/HelloWorldHeading.jsx";
import HelloWorldParagraph from "../components/HelloWorld/HelloWorldParagraph.jsx";
import TodoList from "../components/TodoList/TodoList.jsx";

export default function HelloWorld() {
  const props = {
    text1: "Hello",
    text2: "World!",
    text3: "from Spread Syntax",
  };
  return (
    <div>
      <HelloWorldHeading {...props} />
      <HelloWorldParagraph />
      <TodoList />
    </div>
  );
}
