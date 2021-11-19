import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Purchase = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`https://blooming-mesa-69850.herokuapp.com/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, []);

  return (
    <div>
      <div className="w-50 mx-auto py-4">
        <div className="card border-2 border-success p-2">
          <img src={car.image} className="img-fluid " alt="..." />
          <hr className="w-75 mx-auto" />
          <div></div>
          <div className="card-body">
            <h3 className="card-title">{car.brand}</h3>
            <hr />
            <h5>Model : {car.model}</h5>
            <hr />
            <h5>Price : $ {car.price}</h5>
            <hr />
            <button className="btn btn-success  w-50 fs-5">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
