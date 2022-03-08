import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";

import { Link } from "react-router-dom";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <TodoItem/>
      <TodoList/>
    </>
  );
};

export default Labs;
