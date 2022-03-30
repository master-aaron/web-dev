import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";

import { Link } from "react-router-dom";
import TodoItem from "./Todo/todo-item"
import TodoList from "./Todo/todo-list";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <div>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <TodoItem/>
      <TodoList/>
      <ReduxExamples/>
    </div>
  );
};

export default Labs;
