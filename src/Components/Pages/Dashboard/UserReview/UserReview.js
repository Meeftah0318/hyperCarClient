import React, { useRef } from "react";

const UserReview = () => {
  const nameRef = useRef();
  const modelRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();

  const handleReview = e => {
    const brand = nameRef.current.value;
    const model = modelRef.current.value;
    const image = imgRef.current.value;
    const price = priceRef.current.value;

    // new item
    const newCar = { brand, model, image, price };

    // fetch data
    fetch("https://blooming-mesa-69850.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("You have added an item Successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <div className="w-75 mx-auto py-5">
        <h2 className="text-center  ">Add a New Product</h2>
        <div className="w-25 mx-auto mb-4">
          <hr />
        </div>
        <div className="row">
          <div className="col-md-8 p-0">
            <form
              onSubmit={handleReview}
              className="border border-secondary p-4 pe-5 h-100 "
            >
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className="form-control  border-secondary rounded-pill"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Feedback
                </label>
                <textarea
                  className="form-control border border-dark"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Give Feedback"
                ></textarea>
              </div>

              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-dark mt-3 px-3 rounded-pill"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 p-0">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1541560052-5e137f229371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
