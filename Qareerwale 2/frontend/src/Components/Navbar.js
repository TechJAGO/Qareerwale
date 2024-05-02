import React from "react";
import { Link } from "react-router-dom";
import qwlogo from "./Assets/qwlogo.png";

const Navbar = () => {
  return (
    <div className="navmain">
      <div className="navlogo">
        <Link to="/">
          <img src={qwlogo} />
        </Link>
      </div>
      <div className="navleft">
      <li>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "#f49f1c" }}
          >
            My Institute
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "#f49f1c" }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "#f49f1c" }}
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#f49f1c" }}
          >
            Login
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
