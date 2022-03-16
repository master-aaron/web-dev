import React from "react";
import NavigationSidebar from "./NavigationSidebar";

import { Link } from "react-router-dom";

const Tuiter = () => {
  return (
    <>
      <h1>Tuiter</h1>
      <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>
      <NavigationSidebar active="home"/>
    </>
  );
};

export default Tuiter;
