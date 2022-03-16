import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <>
      <li class="list-group-item">
        <div class="row">
          <div class="col-10">
            <p class="text-muted">{post.topic}</p>
            <div class="fw-bold">
              {post.userName}
              <i class="fa fa-check-circle"></i>- {post.time}
            </div>
            <p class="fw-bold">{post.title}</p>
          </div>
          <div class="col-2">
            <img class="img-fluid rounded-3" src={post.image} alt="..." />
          </div>
        </div>
      </li>
    </>
  );
};

export default PostSummaryItem;
