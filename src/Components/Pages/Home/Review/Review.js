import React from "react";
import "./Review.css";

const Review = props => {
  const { name, rating, review } = props.review;
  return (
    <div className="container">
      <div className="">
        <div className="card shadow bg-light text-dark text-start border border-2 border-warning">
          <div className="card-body card-height">
            <h5 className="card-title car-brand">{name}</h5>
            <hr />
            <h6>
              Rating: {rating}
              <span className="text-warning">
                <i class="fas fa-star"></i>
              </span>
            </h6>
            <p className="card-text mt-3">
              &ldquo;{" "}
              <span className=" fst-italic"> ${review.slice(0, 200)}...</span>{" "}
              &rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
