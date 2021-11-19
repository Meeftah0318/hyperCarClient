import React from "react";
import "./Review.css";

const Review = props => {
  const { userName, brand, rating, feedback } = props.review;
  return (
    <div className="container">
      <div className="">
        <div className="card shadow bg-light text-dark text-start border border-2 border-warning">
          <div className="card-body card-height">
            <h5 className="card-title car-brand mt-2">{userName}</h5>
            <hr />
            <h6 className="card-title car-brand"> I have a {brand}</h6>
            <hr />
            <h6>
              Rating: {rating}
              <span className="text-warning ms-2">
                <i class="fas fa-star"></i>
              </span>
            </h6>
            <p className="card-text mt-3 fs-5">
              &ldquo;{" "}
              <span className=" fst-italic"> {feedback.slice(0, 200)}...</span>{" "}
              &rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
