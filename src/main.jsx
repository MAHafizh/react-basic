import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import routes from "./routes.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./redux/counterSlice.js";
import { todoListSlice } from "./redux/todoListSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoListSlice.reducer
  }
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>{routes().map((route) => route)}</Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);