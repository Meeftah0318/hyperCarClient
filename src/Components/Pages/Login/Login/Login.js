import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData, loginUser] = useState({});

  const { signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handelLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <div className="w-75 mx-auto py-5">
        <div className="row">
          <div className="col-md-5 p-0">
            <img
              className="img-fluid h-100"
              src="https://images.unsplash.com/photo-1605858286629-4268180c482b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80"
              alt=""
            />
          </div>
          <div className="col-md-7 p-0 border border-secondary ">
            <h2 className="text-center mt-3 ">Please Login</h2>
            <div className="w-75 mx-auto mb-4">
              <hr />
            </div>
            <form onSubmit={handelLoginSubmit} className="px-4 ">
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleOnChange}
                  className="form-control mb-2  border-secondary border-2"
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
                  className="form-control border-secondary border-2 mb-2"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 fs-5 w-100 "
                  >
                    Sign In
                  </button>
                </div>
                <div className="col-md-8">
                  <Link to="register">
                    <button
                      type="submit"
                      className="btn btn-outline-dark  fs-5 mt-3 w-100"
                    >
                      Please Register
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary  fs-5 mt-3 w-100"
                  onClick={signInWithGoogle}
                >
                  Google Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
