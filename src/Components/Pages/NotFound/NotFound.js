import React from "react";

const NotFound = () => {
  return (
    <div className="py-5">
      <div className="w-75 mx-auto ">
        <div className="bg-dark rounded py-5 text-white text-center fst-italic">
          <h1>ERROR</h1>
          <p style={{ fontSize: "220px" }} className="text-danger ">
            404
          </p>
          <hr className="w-75 mx-auto" />
          <h2>
            The page does not exist <br /> Please navigate from the top menu.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
