import React, { useEffect, useState } from "react";
import Car from "../Home/Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://blooming-mesa-69850.herokuapp.com/cars")
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center mt-4  ">Our Gallery</h1>
      </div>
      <div className="w-25 mx-auto">
        <hr />
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 w-75 mx-auto pb-5 my-3 px-0">
        {cars.map(car => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Cars;
