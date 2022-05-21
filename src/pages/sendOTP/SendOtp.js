import React, { useState } from "react";
import LoginButtons from "../../components/LoginButtons";
import PhoneInput from "react-phone-number-input";
import "./SendOtp.css";
import Image from "../../components/Image";
import "react-phone-number-input/style.css";
import { getSendOtpDetails } from "../../redux/sendOtp/Action";
import { getPhoneNumber } from "../../redux/phoneNumberSharing/Action";
// import { getMobileNumber } from "../../redux/dataForSharing/Action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendOtp = () => {
  const notify = () => {
    toast(sendOtpData.result.message, {
      autoClose: 2000,
      position: "top-right",
      theme: "dark",
    });
  };

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (value && value.length === 11) {
    console.log(value, "ye number hain");
    console.log(value.length, "11 hain");
  } else if (value && value.length === 13) {
    console.log(value, "ye number hain");
    console.log(value.length, "13 hain");
    var conuntryCode = value.slice(0, 3);
    console.log(conuntryCode);
    var contactNumber = value.slice(3);
    console.log(contactNumber);
  }

  const sendOtpData = useSelector((store) => store.requriedSendOtpData);
  console.log(sendOtpData, "send otp");

  const mobileData = useSelector((store) => store.requriedPhoneNumber);
  console.log(mobileData, "phone number");

  const handleSentOTP = () => {
    if (value) {
      setError("");
      dispatch(getPhoneNumber(conuntryCode, contactNumber));
      dispatch(getSendOtpDetails(conuntryCode, contactNumber));
      notify();

      console.log(value);
    } else {
      setError("* please enter Mobile Number");
      console.log(" * please enter number");
    }
  };

  return (
    <>
      <Loader size="40px" color="blue" visible={sendOtpData.isRequest} />

      <div className="content">
        <Image />
        <main className="main_content">
          <LoginButtons />

          <div className="or">
            <p className="text_or">----or----</p>
          </div>
          <div className="phoneNUmber">
            <PhoneInput
              className="phone"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />{" "}
          </div>

          <br />
          <p style={{ color: "red" }}>{error}</p>

          <button className="next" onClick={handleSentOTP}>
            Next
          </button>

          <br />
          <p style={{ color: "grey", textAlign: "center" }}>
            Exiting User?
            <a href="#" className="createAccount">
              Login
            </a>
          </p>

          {sendOtpData.data &&
          sendOtpData.isSuccess == true &&
          sendOtpData.data.success == true
            ? navigate("verifyOtp")
            : null}
        </main>
      </div>
    </>
  );
};

export default SendOtp;
