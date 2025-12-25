import { Route } from "react-router";
import App from "./page/App";
import HelloWorld from "./page/HelloWorld";
import Task from "./page/Task";
import Note from "./page/Note";
import Profile from "./page/Profile";
import Product from "./page/Product";

export default function routes() {
  return [
    <Route path="/" element={<App />} />,
    <Route path="/hello-world" element={<HelloWorld />} />,
    <Route path="/task" element={<Task />} />,
    <Route path="/note" element={<Note />} />,
    <Route path="/profile" element={<Profile />} />,
    <Route path="/product" element={<Product />} />,
  ];
}