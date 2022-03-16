import React from "react";

import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <>
      <div className="list-group-item fw-bold">Who to follow</div>
      {who.map((who) => {
        return <WhoToFollowListItem who={who} />;
      })}
    </>
  );
};
export default WhoToFollowList;
