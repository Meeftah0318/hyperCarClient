import React from "react";
import { Link } from "react-router-dom";
import "./Car.css";

const Car = props => {
  const { brand, model, price, image, _id } = props.car;
  return (
    <div className="container car-container">
      <div className="card-group">
        <div className="card shadow bg-light text-dark text-start border border-1 border-success">
          <img
            src={image}
            height="170px"
            className="card-img-top  mw-100"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title car-brand">{brand}</h3>
            <hr />
            <h5>Model: {model}</h5>
            <h6 className="card-text mt-3">
              Price : <span className="fst-italic"> ${price}</span>
            </h6>
          </div>
          <div className="card-footer">
            <div className="w-100">
              <button className="btn my-2 px-4 py-1 btn-success w-100">
                <Link
                  className="text-decoration-none fs-5 text-white"
                  to={`purchase/${_id}`}
                >
                  <span className="me-3">
                    <i class="fas fa-car"></i>
                  </span>
                  Buy Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
