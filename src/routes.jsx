import { Route } from "react-router";
import HelloWorld from "./page/HelloWorld";
import Task from "./page/Task";
import Note from "./page/Note";
import Profile from "./page/Profile";
import Product from "./page/Product";
import Home from "./page/Home";
import About from "./page/About";
import Customer from "./page/Customer";
import Seller from "./page/Seller";
import Data from "./page/Data";
import DataLayout from "./components/DataLayout/DataLayout";
import ProductDetail from "./components/Product/ProductDetail";
import NotFound from "./page/404";
import Counter from "./page/Counter";
import TodoList from "./page/TodoList";
import AddTodo from "./components/TodoList2/AddTodo";
import UpdateTodo from "./components/TodoList2/updateTodo ";

export default function routes() {
  return [
    <Route path="/" element={<Home />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/hello-world" element={<HelloWorld />} />,
    <Route path="/task" element={<Task />} />,
    <Route path="/note" element={<Note />} />,
    <Route path="/profile" element={<Profile />} />,
    <Route
      path="/counter"
      element={
        <>
          <Counter />
        </>
      }
    />,
    <Route path="/todolist">
      <Route index element={<TodoList />} />
      <Route path="add" element={<AddTodo />} />,
      <Route path="edit/:id" element={<UpdateTodo />} />,
    </Route>,
    <Route path="/data" element={DataLayout()}>
      <Route index element={<Data />} />
      <Route path="product" element={<Product />} />,
      <Route path="product/search" element={<Product />} />,
      <Route path="product/:id" element={<ProductDetail />} />,
      <Route path="customer" element={<Customer />} />,
      <Route path="seller" element={<Seller />} />,
    </Route>,
    <Route path="/*" element={<NotFound />} />,
  ];
}
