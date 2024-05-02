import React from "react";
import person from "./Assets/person.png";
import emails from "./Assets/email.png";
import passwords from "./Assets/password.png";

const LoginPage = () => {
  return (
    <div className="maincontent">

      <div className="loginmain">
        <div className="headerlogin">
          <h1>Login</h1>
        </div>
        <div className="loginfeilds">
          <div className="feilds">
            <img src={person} />
            <input placeholder="Company name" type="text" />
          </div>
          <div className="feilds">
            <img src={emails} />
            <input placeholder="Your Email" type="text" />
          </div>
          <div className="feilds">
            <img src={passwords} />
            <input placeholder="Password" type="password" />
          </div>
        </div>
        <div className="loginbtn">
          <button>Login</button>
          <p>Forgot password?</p>
        </div>
      </div>
    
    </div>
  );
};

export default LoginPage;
