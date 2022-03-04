import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="row position-relative">
    <div class="col-11 position-relative">
      <input class="form-control rounded-pill" type="text" placeholder="Search Tuiter">
      <i class="fa fa-search position-absolute top-50 translate-middle-y ms-2"></i>
    </div>
    <div class="col-1">
      <i class="fa fa-cog fa-2x wd-color-blue position-absolute top-50 translate-middle-y"></i>
    </div>
  </div>
  <ul class="nav nav-tabs mt-2 mb-2">
    <li class="nav-item">
      <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="entertainment.html">Entertainment</a>
    </li>


  </ul>
  <div class="card">
    <img
      src="../images/Starship-Mk1-Day.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-img-overlay">
      <h1 class="card-title wd-fg-color-white">SpaceX's Starship</h2>
    </div>
    ${PostSummaryList()}
    </div>
    `);
}
export default ExploreComponent;

