import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/home";
import Todo from "./components/todo";

export const routes = (
  <Route path="/">
    <IndexRoute component={Home} /> 
    <Route path="todo" component={Todo} />
  </Route>
);
