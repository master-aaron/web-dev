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
      <div className="list-group-item">
        <div className="row">
          <img
            className="col-2 rounded-circle"
            src={who.avatarIcon}
            alt="..."
          />
          <div className="col-7">
            <div className="fw-bold">
              {who.userName}
              <i className="fa fa-check-circle"></i>
            </div>
            <div className="fw-light">@{who.handle}</div>
          </div>
          <button
            className="btn btn-primary rounded-pill col-3"
            href="follow.html"
          >
            Follow
          </button>
        </div>
      </div>
    </>
  );
};
export default WhoToFollowListItem;
