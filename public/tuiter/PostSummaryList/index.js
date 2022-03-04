import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return(`
  <ul class="list-group list-group-flush">
  ${posts
        .map((item) => {
          return PostSummaryItem(item);
        })
        .join("")}
  </ul>
  `);
}
export default PostSummaryList;
