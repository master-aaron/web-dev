import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "home" ? "active" : ""}`}
          href="home.html"
        >
          <i className="fa fa-home"></i>
          Home
        </a>
        <a
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "home" ? "active" : ""}`}
          href="home.html"
        >
          <i className="fa fa-home"></i>
        </a>

        <a
          href="explore.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "explore" ? "active" : ""}`}
        >
          <i className="fa fa-hashtag"></i>
          Explore
        </a>
        <a
          href="explore.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "explore" ? "active" : ""}`}
        >
          <i className="fa fa-hashtag"></i>
        </a>
        <a
          href="notifications.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "notifications" ? "active" : ""}`}
        >
          <i className="fa fa-bell"></i>
          Notifications
        </a>
        <a
          href="notifications.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "notifications" ? "active" : ""}`}
        >
          <i className="fa fa-bell"></i>
        </a>
        <a
          href="messages.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "messages" ? "active" : ""}`}
        >
          <i className="fa fa-envelope"></i>
          Messages
        </a>
        <a
          href="messages.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "messages" ? "active" : ""}`}
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="bookmarks.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "bookmarks" ? "active" : ""}`}
        >
          <i className="fa fa-bookmark"></i>
          Bookmarks
        </a>
        <a
          href="bookmarks.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "bookmarks" ? "active" : ""}`}
        >
          <i className="fa fa-bookmark"></i>
        </a>
        <a
          href="lists.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "lists" ? "active" : ""}`}
        >
          <i className="fa fa-list"></i>
          Lists
        </a>
        <a
          href="lists.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "lists" ? "active" : ""}`}
        >
          <i className="fa fa-list"></i>
        </a>
        <a
          href="profile.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "profile" ? "active" : ""}`}
        >
          <i className="fa fa-person-booth"></i>
          Profile
        </a>
        <a
          href="profile.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "profile" ? "active" : ""}`}
        >
          <i className="fa fa-person-booth"></i>
        </a>
        <a
          href="more.html"
          className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block
          ${active === "more" ? "active" : ""}`}
        >
          <i className="fa fa-circle-notch"></i>
          More
        </a>
        <a
          href="more.html"
          className={`list-group-item list-group-item-action d-xl-none d-xl-none
          ${active === "more" ? "active" : ""}`}
        >
          <i className="fa fa-circle-notch"></i>
        </a>
        <br></br>
      </div>
      <div className="d-grid mt-2">
        <a href="tuit.html" className="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
