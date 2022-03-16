import React from "react";
import { Link } from "react-router-dom";

import ExploreScreen from "./explore-screen";

const Tuiter = () => {
  return (
    <>
      <h1>Tuiter</h1>
      <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>
      {/* <PostSummaryItem
        post={{
          topic: "Web Development",
          userName: "",
          title: "jQuery",
          time: "last week",
          image: "../../../images/jquery.png",
          tweets: "122K",
        }}
      /> */}
      {/* <PostSummaryList /> */}
      {/* <NavigationSidebar active="home" />
      <WhoToFollowListItem
        who={{
          avatarIcon: "../../../images/virgin.png",
          userName: "Virgin Galactic",
          handle: "virgingalactic",
        }}
      />

      <ExploreComponent /> */}

      <ExploreScreen />
    </>
  );
};

export default Tuiter;
