import React from "react";
import "./tuits.css";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../actions/tuits-actions";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <table>
        <tr>
          <td className="align-text-top">
            <img
              className="rounded-circle wd-avatar-image"
              src={tuit["logo-image"]}
              alt="..."
            />
          </td>
          <td className="ps-3" style={{ width: "100%" }}>
            <i
              onClick={() => deleteTuit(dispatch, tuit)}
              className="fa fa-trash fa-pull-right"
            ></i>
            <span className="fw-bold">{tuit.userName}</span>
            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
            <span className="ms-1 text-secondary">@{tuit.handle}</span>
            <div>{tuit.tuit}</div>
            {tuit.attachments && tuit.attachments.image && (
              <img
                src={tuit.attachments.image}
                className="mt-2 wd-border-radius-20px"
                style={{ width: "100%" }}
                alt="..."
              />
            )}
            {tuit.attachments && tuit.attachments.video && (
              <iframe
                width="100%"
                height="350px"
                className="mt-2 wd-border-radius-20px"
                style={{ width: "100%" }}
                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <div className="row">
              <div className="col-3">
                <i className="far fa-comment me-1"></i>
                123
              </div>
              <div className="col-3">
                <i className="far fa-retweet me-1"></i>
                123
              </div>
              <div className="col-4">
                <TuitStats tuit={tuit} />
              </div>
              <div className="col-2">
                <i className="fa fa-share me-1"></i>
                123
              </div>
            </div>
          </td>
        </tr>
      </table>
    </li>
  );
};

export default TuitListItem;
