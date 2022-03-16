import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../../../images/NASA_logo.svg.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <>
      <div class="list-group-item">
        <div class="row">
          <img class="col-2 rounded-circle" src={who.avatarIcon} alt="..."/>
          <div class="col-7">
            <div class="fw-bold">
              {who.userName}
              <i class="fa fa-check-circle"></i>
            </div>
            <div class="fw-light">@{who.handle}</div>
          </div>
          <button class="btn btn-primary rounded-pill col-3" href="follow.html">
            Follow
          </button>
        </div>
      </div>
    </>
  );
};
export default WhoToFollowListItem;
