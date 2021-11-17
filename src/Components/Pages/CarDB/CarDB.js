import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarDB = () => {
  // set packages
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://blooming-mesa-69850.herokuapp.com/cars")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // delete package

  const handelDeleteItem = id => {
    const proceed = window.confirm("Are your sure to remove?");
    if (proceed) {
      const url = `https://blooming-mesa-69850.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted");
            const remainingItems = items.filter(item => item._id !== id);
            setItems(remainingItems);
          }
        });
    }
  };
  return (
    <div className="table-div">
      <div className="w-75 mx-auto pb-5">
        <h1 className="text-secondary pt-5 text-center">Manage Items</h1>
        <h3 className="py-3 text-secondary text-center">
          Number of Items : {items.length}
        </h3>
        <table className="table border border-secondary ">
          <thead>
            <tr>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.image ? "Image Uploaded" : "Image Missing"}</td>
                <td>$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handelDeleteItem(item._id)}
                    className="btn btn-danger "
                  >
                    <i class="fas fa-trash"></i>
                  </button>{" "}
                </td>
                <td>
                  <Link to={`/car/update/${item._id}`}>
                    <button
                      // onClick={() => handelDeleteItem(item._id)}
                      className="btn btn-success"
                    >
                      <i class="fas fa-wrench"></i>
                    </button>{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarDB;
