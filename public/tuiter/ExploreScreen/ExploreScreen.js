import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $('#wd-explore').append(`
    <div class="list-group col-2">
      ${NavigationSidebar()}
    </div>
    <div class="list-group col-10 col-md-10 col-lg-7 col-xl-7">
      ${ExploreComponent()}
    </div>
    <div class="list-group col-3 d-none d-sm-none d-md-none d-lg-block">
      ${WhoToFollowList()}
    </div>
  `);
})($);
