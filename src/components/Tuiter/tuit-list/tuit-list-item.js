import React from "react";
import { useDispatch } from "react-redux";

const TuitListItem = ({
  tuit = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
      username: "ReactJS",
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
      video: "unKvMC3Y1kI",
    },
    "logo-image": "../../../images/react-blue.png",
    "avatar-image": "../../../images/react-blue.png",
    stats: {
      comments: 123,
      retuits: 234,
      likes: 345,
    },
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: "delete-tuit", tuit });
  };

  return (
    <div className="row">
      <div className="col-11">{tuit.tuit}</div>
      <i
        onClick={() => deleteTuit(tuit)}
        className="fa fa-trash col-1"
      ></i>
    </div>
  );
};
export default TuitListItem;
