import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser } = useAuth();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(value);
  };

  const handelRegisterSubmit = e => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Did Not Match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div>
      <div className="w-75 mx-auto py-5">
        <div className="row">
          <div className="col-md-5 p-0">
            <img
              className="img-fluid h-100"
              src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="col-md-7 p-0 border border-secondary ">
            <h2 className="text-center mt-3 ">Please Register</h2>
            <div className="w-75 mx-auto ">
              <hr />
            </div>
            <form onSubmit={handelRegisterSubmit} className="m-4">
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  className="form-control  border-secondary border-2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Type Password"
                  className="form-control border-secondary border-2"
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
                  type="password"
                  name="password2"
                  onChange={handleOnChange}
                  placeholder="Retype Password"
                  className="form-control border-secondary border-2 mb-3"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 fs-5 w-100 "
                  >
                    Register
                  </button>
                </div>
                <div className="col-md-8">
                  <Link to="login">
                    <button
                      type="submit"
                      className="btn btn-outline-dark  fs-5 mt-3 w-100"
                    >
                      Please Login
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
