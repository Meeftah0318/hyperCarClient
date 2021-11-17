import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const BannerCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://blooming-mesa-69850.herokuapp.com/cars")
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center mt-4  ">Car Gallery</h1>
        <div className="w-25 mx-auto">
          <hr />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 w-75 mx-auto pb-5 my-3 px-0">
        {cars.slice(0, 6).map(car => (
          <Car
            key={car.id}
            car={car}
            // handleBooking={handlebooking}
          ></Car>
        ))}
      </div>
    </div>
  );
};

export default BannerCars;
