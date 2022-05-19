import React from "react";
import "./index.css";
import PhoneInput from "react-phone-number-input";

const LoginEmailInPut = (props) => {
  const handlePassword = (e) => {
    props.setPassword(e.target.value);
  
  };

  return (
    <>
      <div className="email_password">
        <PhoneInput
          className="phone"
          placeholder="Enter phone number"
          value={props.contactNumber}
          onChange={props.setContactNumber}
        />

        <input
          type="password"
          placeholder="password"
          value={props.password}
          onChange={handlePassword}
        />
      </div>
      <div className="forgot_password">
        <a className="forgot_password" href="#">
          Forgot Password?
        </a>
      </div>
      <br />
      <button className="login" onClick={props.handleLogin}>Login</button>
      <br />
      <p>{props.alert}</p>
      <br />
      <span>Don't have an account? </span>
      <span className="create_account">
        <a className="create_account" href="#">
          Create Account
        </a>
      </span>
     
    </>
  );
};

export default LoginEmailInPut;
