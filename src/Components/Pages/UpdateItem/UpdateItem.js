import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateItem = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://blooming-mesa-69850.herokuapp.com/cars/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setCar(data));
  }, []);

  const handleBrandChange = e => {
    const updateBrand = e.target.value;
    const updatedCar = {
      brand: updateBrand,
      model: car.model,
      price: car.price,
      image: car.image,
    };
    setCar(updatedCar);
  };
  const handleModelChange = e => {
    const updateModel = e.target.value;
    const updatedCar = {
      brand: car.brand,
      model: updateModel,
      price: car.price,
      image: car.image,
    };
    setCar(updatedCar);
  };
  const handlePriceChange = e => {
    const updatePrice = e.target.value;
    const updatedCar = {
      brand: car.brand,
      model: car.model,
      price: updatePrice,
      image: car.image,
    };
    setCar(updatedCar);
  };
  const handleImageChange = e => {
    const updateImage = e.target.value;
    const updatedCar = {
      brand: car.brand,
      model: car.model,
      price: car.price,
      image: updateImage,
    };
    setCar(updatedCar);
  };

  const handleUpdate = e => {
    const url = `https://blooming-mesa-69850.herokuapp.com/cars/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setCar(" ");
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <div className="w-75 mx-auto py-5">
          <h2 className="text-center  ">Update Item Description</h2>
          <div className="w-25 mx-auto mb-4">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4 p-0">
              <img
                className="img-fluid h-100"
                src="https://images.unsplash.com/photo-1611288875785-f62fb9b044a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
                alt=""
              />
            </div>
            <div className="col-md-8 p-0">
              <form
                onSubmit={handleUpdate}
                className="border border-secondary p-4 p-5 h-100 "
              >
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    onChange={handleBrandChange}
                    className="form-control  border-secondary rounded-pill"
                    value={car.brand || " "}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    onChange={handleModelChange}
                    value={car.model}
                    className="form-control border-secondary rounded-pill"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    onChange={handlePriceChange}
                    value={car.price}
                    className="form-control border-secondary rounded-pill"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    onChange={handleImageChange}
                    value={car.image}
                    className="form-control border-secondary rounded-pill"
                    required
                  />
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-dark mt-3 px-3 rounded-pill"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
