import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  //   const { user, logOut } = useFirebase();
  return (
    <div>
      <div>
        {/* navigation bar */}
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg pb-0 pt-0">
          <div className="container-fluid w-75 d-flex justify-content-between">
            <div>
              {/* link the brand name with home tab */}
              <Link className="navbar-brand fs-2" to="home">
                <span className="brand-name mp-0">HyperCar</span>
              </Link>
            </div>
            <div>
              <div>
                <button
                  className="navbar-toggler ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  {/* link to routes */}
                  <ul className="navbar-nav link-item">
                    <Link className="ms-4" to="/home">
                      Home
                    </Link>
                    <Link className="ms-4" to="cars">
                      Car Gallery
                    </Link>
                    <Link className="ms-4" to="addCar">
                      Add Item
                    </Link>
                    <Link
                      className="ms-4"
                      to="carDB
                    "
                    >
                      Manage Items
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="bg-dark">
          <div className="d-flex justify-content-end w-75 mx-auto pb-1">
            <button className="btn btn-success fs-6 px-4">
              {" "}
              <Link className="text-decoration-none text-white " to="login">
                Log In
              </Link>{" "}
            </button>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
