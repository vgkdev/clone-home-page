import React from "react";
import "./Comment.scss";
import { Fade, Slide } from "react-reveal";
import Img from "../assets/images/depoimento.png";

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="image">
        <Slide left>
          <img src={Img} alt="" />{" "}
        </Slide>
      </div>
      <div className="comment-container">
        <div className="comment">
          <Fade top>
            "Cycling has always been my passion, what the people at Bikcraft
            have done is intensify my love for this activity. I recommend it to
            everyone I love."
            <div className="author">Ana Julia</div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Comment;
