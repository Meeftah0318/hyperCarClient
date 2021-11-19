import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://blooming-mesa-69850.herokuapp.com/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="bg-dark py-3">
      <div>
        <h1 className="text-center text-white mt-4">Latest Customer Reviews</h1>
        <div className="w-25 mx-auto">
          <hr />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 pb-3 mt-3 px-0 g-2 w-75 mx-auto ">
        {reviews.slice(reviews.length - 4, reviews.length).map(review => (
          <Review
            key={review.id}
            review={review}
            // handleBooking={handlebooking}
          ></Review>
        ))}
      </div>
      <div className="text-center">
        <Link to="reviews">
          <button className="btn btn-outline-warning mx-auto w-25 my-3 fs-5">
            All Reviews Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
