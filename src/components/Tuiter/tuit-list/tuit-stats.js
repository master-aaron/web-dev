import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span
        className="me-2"
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            stats: {
              comments: 123,
              retuits: 234,
              likes: tuit.stats.likes + 1,
              dislikes: tuit.stats.dislikes,
            },
            liked: !tuit.liked,
            disliked: tuit.disliked,
          })
        }
      >
        {tuit.liked && (
          <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
        )}
        {!tuit.liked && <i className="far fa-heart me-1"></i>}
        {tuit.stats && tuit.stats.likes}
      </span>

      <span
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            stats: {
              comments: 123,
              retuits: 234,
              likes: tuit.stats.likes,
              dislikes: tuit.stats.dislikes + 1,
            },
            liked: tuit.liked,
            disliked: !tuit.disliked,
          })
        }
      >
        {tuit.disliked && (
          <i className="fas fa-thumbs-down me-1" style={{ color: "red" }}></i>
        )}
        {!tuit.disliked && <i className="far fa-thumbs-down me-1"></i>}
        {tuit.stats && tuit.stats.dislikes}
      </span>
    </>
  );
};
export default TuitStats;
