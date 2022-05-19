import React, { useState } from "react";
import "./index.css";
import LoginEmailInPut from "../../components/loginWithEmail&Password";
import LoginButtons from "../../components/LoginButtons";
import Image from "../../components/Image";
import { useSelector, useDispatch } from "react-redux";
import { loginWithDetails } from "../../redux/login/Action";
import Loader from "../../components/loader";
import {useNavigate } from "react-router-dom";

const LoginWithEmail = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const loginData = useSelector((store) => store.requriedPhoneLoginData);
 // console.log(loginData, "logindata");
 if(contactNumber && contactNumber.length === 11){
  console.log(contactNumber,"ye number hain")
  console.log(contactNumber.length,"11 hain")
}else if(contactNumber && contactNumber.length === 13){
  console.log(contactNumber,"ye number hain")
  console.log(contactNumber.length,"13 hain")
  var conuntryCode = contactNumber.slice(0,3);
  console.log(conuntryCode);
  var mobileNumber = contactNumber.slice(3);
  console.log(mobileNumber);
}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (contactNumber.length != 0 && password.length != 0) {
      dispatch(
        loginWithDetails({
          country_code: conuntryCode,
          phone_number:  mobileNumber,
          password: password,
        })
      );

    } else {
      console.log("hello");
      setAlert("* please enter details");
    }
  };

  return (
    <>
      <Loader size="40px" color="blue" visible={loginData.isRequest} />
      <div className="img1111">
        <Image />
        <div className="buttons_email">
          <LoginButtons />
          <br />
          <LoginEmailInPut
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            alert={alert}
          />
          <br />
          <br />
          <span>
            {loginData.isSuccess === true && loginData.data.success === true
              ? "You are Successfully Login Your id is -"
              : null}
          </span>
          <div className="success_id">
            {loginData.data &&
            loginData.isSuccess === true &&
            loginData.data.success === true
              ? loginData.data.result.id
              : null}
          </div>
          <div className="success_id">
            {loginData.data &&
            loginData.isSuccess === true &&
            loginData.data.success === false
              ? loginData.data.error.message
              : null}
          </div>
        </div>
      </div>
      {loginData.data &&
      loginData.isSuccess === true &&
      loginData.data.success === true
        ? localStorage.setItem("token",loginData.data.token)
        : null}
      {loginData.data &&
      loginData.isSuccess === true &&
      loginData.data.success === true
        ? localStorage.setItem("loginID",loginData.data.result.id)
        : null}
      {loginData.data &&
      loginData.isSuccess === true &&
      loginData.data.success === true
        ? navigate("/homepage")
        : null}
    </>
  );
};

export default LoginWithEmail;
