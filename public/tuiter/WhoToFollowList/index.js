import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return(`
      <div class="list-group-item fw-bold">
        Who to follow
      </div>
      ${who
        .map((item) => {
          return WhoToFollowListItem(item);
        })
        .join("")}

  `);
}
export default WhoToFollowList;
