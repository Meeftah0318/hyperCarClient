import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
            {/* <div className="text-white me-3">
              {user?.email ? `Welcome ${user.displayName}` : " "}
            </div> */}
            {user?.email ? (
              <div>
                <Link className="text-decoration-none">
                  <Link
                    className="text-decoration-none text-white fs-6 me-3"
                    to="dashboard"
                  >
                    Dashboard
                  </Link>
                  <Link
                    className="text-decoration-none text-white fs-6 me-3"
                    to="addCar"
                  >
                    Add Item
                  </Link>
                  <Link
                    className="text-decoration-none text-white fs-6 me-3"
                    to="carDB"
                  >
                    Manage Items
                  </Link>
                  <Link
                    className="text-decoration-none text-white fs-6 me-3"
                    to="review"
                  >
                    Feedback
                  </Link>

                  <button onClick={logOut} className="btn btn-danger fs-6 px-3">
                    Sign Out
                  </button>
                </Link>
              </div>
            ) : (
              <Link className="text-decoration-none text-white " to="login">
                <button className="btn btn-success fs-6 px-4">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
