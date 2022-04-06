import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);

  return (
    <>
      <div className="list-group-item fw-bold">Who to follow</div>
      {who.map((who) => {
        return <WhoToFollowListItem key={who.userName} who={who} />;
      })}
    </>
  );
};
export default WhoToFollowList;
