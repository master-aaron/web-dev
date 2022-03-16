import PostSummaryItem from "./post-summary-item";
import posts from "./posts";

const PostSummaryList = () => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {posts.map((post) => {
          return <PostSummaryItem post={post} />;
        })}
      </ul>
    </>
  );
};

export default PostSummaryList;
