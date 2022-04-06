import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };
  return (
    <>
      <div className="row mb-3">
        <img
          className="col-2 rounded-circle"
          src="/tuiter/images/NASA_logo.svg.png"
          alt="..."
        />
        <div className="col-10">
          <div className="mb-3 border-0 border-bottom">
            <textarea
              className="col-12 mb-3 bg-black text-white border-0"
              placeholder="What's Happening?"
              value={whatsHappening}
              onChange={(event) => setWhatsHappening(event.target.value)}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-10">
              <i className="fa fa-image me-2"></i>
              <i className="fa fa-chart-area me-2"></i>
              <i className="fa fa-smile me-2"></i>
              <i className="fa fa-calendar me-2"></i>
            </div>
            <button
              className="col-2 btn btn-primary btn-block rounded-pill align-end"
              onClick={tuitClickHandler}
            >
              Tuit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatsHappening;
