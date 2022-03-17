import React from "react";

import PostSummaryList from "../post-summary-list/index.js";

const ExploreComponent = () => {
  return (
    <>
      <div className="row position-relative">
        <div className="col-11 position-relative">
          <input
            className="form-control rounded-pill"
            type="text"
            placeholder="Search Tuiter"
          />
          <i className="fa fa-search position-absolute top-50 translate-middle-y ms-2"></i>
        </div>
        <div className="col-1">
          <i className="fa fa-cog fa-2x wd-color-blue position-absolute top-50 translate-middle-y"></i>
        </div>
      </div>
      <ul className="nav nav-tabs mt-2 mb-2">
        <li className="nav-item">
          <a className="nav-link active" href="for-you.html">
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="entertainment.html">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="card">
        <img
          src="/tuiter/images/Starship-Mk1-Day.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-img-overlay">
          <h1 className="card-title wd-fg-color-white">SpaceX's Starship</h1>
        </div>

        <PostSummaryList />
      </div>
    </>
  );
};

export default ExploreComponent;
