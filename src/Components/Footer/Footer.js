import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-secondary pt-5 pb-4">
      <div>
        <div className="w-75 mx-auto row footer-link ">
          <div className="col-md-4">
            <h5>Actions</h5>
            <Link to="">About us</Link>
            <br />
            <Link to="">Refund policy</Link>
            <br />
            <Link to="">Book Online</Link>
            <br />
            <div className="mt-3">
              <h5>Follow Us On</h5>
              <div className="d-flex justify-content-between fs-4 mt-3 me-2 social-icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-google-plus-g"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5>News and Career</h5>
            <Link to="">Available Jobs</Link>
            <br />
            <Link to="packages">Latest Offers</Link>
            <br />

            <Link to="">Office Addresses</Link>
            <br />
            <Link to="">Contact Us</Link>
          </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <Link to="">Privacy Policy</Link>
            <br />
            <Link to="">Terms and Conditions</Link>
            <br />
            <Link to="">Feedback</Link>
          </div>
          <hr className="mt-4 text-warning" />
          <div className="text-center">
            <small>
              05210 The Avenue 35A, Turku, Wadiya | +880167512345 | © 2021
              HyperCar. All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
