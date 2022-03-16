import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../who-to-follow-list";

const ExploreScreen = () => {
  return (
    <div className="row mt-2">
      <div className="list-group col-2">
        <NavigationSidebar active="explore" />
      </div>
      <div className="list-group col-10 col-md-10 col-lg-7 col-xl-7">
        <ExploreComponent />
      </div>
      <div className="list-group col-3 d-none d-sm-none d-md-none d-lg-block">
        <WhoToFollowList />
      </div>
    </div>
  );
};

export default ExploreScreen;
