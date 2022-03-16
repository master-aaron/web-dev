import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
          href="home.html"
        >
          <i className="fa fa-home"></i>
          Home
        </a>
        <a
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
          href="home.html"
        >
          <i className="fa fa-home"></i>
        </a>

        <a
          href="explore.html"
          className="list-group-item list-group-item-action active d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-hashtag"></i>
          Explore
        </a>
        <a
          href="explore.html"
          className="list-group-item list-group-item-action active d-xl-none d-xl-none"
        >
          <i className="fa fa-hashtag"></i>
        </a>
        <a
          href="notifications.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-bell"></i>
          Notifications
        </a>
        <a
          href="notifications.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
        >
          <i className="fa fa-bell"></i>
        </a>
        <a
          href="messages.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-envelope"></i>
          Messages
        </a>
        <a
          href="messages.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="bookmarks.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-bookmark"></i>
          Bookmarks
        </a>
        <a
          href="bookmarks.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
        >
          <i className="fa fa-bookmark"></i>
        </a>
        <a
          href="lists.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-list"></i>
          Lists
        </a>
        <a
          href="lists.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
        >
          <i className="fa fa-list"></i>
        </a>
        <a
          href="profile.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-person-booth"></i>
          Profile
        </a>
        <a
          href="profile.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
        >
          <i className="fa fa-person-booth"></i>
        </a>
        <a
          href="more.html"
          className="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
        >
          <i className="fa fa-circle-notch"></i>
          More
        </a>
        <a
          href="more.html"
          className="list-group-item list-group-item-action d-xl-none d-xl-none"
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
