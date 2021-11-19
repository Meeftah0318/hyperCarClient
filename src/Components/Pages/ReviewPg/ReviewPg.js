import React, { useEffect, useState } from "react";
import Review from "../Home/Review/Review";

const ReviewPg = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
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
      <div className="row row-cols-1 row-cols-md-4 pb-5 my-3 px-0 g-2 w-75 mx-auto ">
        {reviews.map(review => (
          <Review
            key={review.id}
            review={review}
            // handleBooking={handlebooking}
          ></Review>
        ))}
      </div>
    </div>
  );
};

export default ReviewPg;
