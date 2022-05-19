import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./OtpVerify.css";
import { getVerifyOtpDetails } from "../../redux/verifyOtp/Action";
import Image from "../../components/Image";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { notify } from "node-notifier";
import Loader from '../../components/loader';

const OptVerify = () => {
  const [OTP, setOTP] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  
  // const notifier = require("node-notifier");
  // notifier.notify("messege");


  const verifyOTPData = useSelector((store) => store.requriedVerifyOtpData);
  console.log(verifyOTPData, "verify opt");

  const sendOTPData = useSelector((store) => store.requriedSendOtpData);
  console.log(sendOTPData, "sendopt");

  const mobileData = useSelector((store) => store.requriedPhoneNumber);
  console.log(mobileData, "phone number");

  const handleVerifyOtp = () => {
    const { country_code, mobile_Number } = mobileData.data;
    if (OTP != "") {
      dispatch(
        getVerifyOtpDetails({
          country_code: country_code,
          mobile_Number: mobile_Number,
          verification_token: sendOTPData.data.result.verificationToken,
          OTP,
        })
      );
    } else {
      console.log("please enter an otp");
      setAlert("* Please enter Your OPT first");
    }
  };

  useEffect(() => {
    if (sendOTPData.data && sendOTPData.isSuccess === false) {
      navigate("/");
    }
  });

  return (
    <>
    <Loader size="40px" color="blue" visible={verifyOTPData.isSuccess }/>
      <div className="content-verify">
        <Image />
        <main className="main-contentt">
          <div className="create-an-account"></div>
          <h1>Create An Account</h1>
          <p className="send_opt">
            Please enter 6-digit OTP sent to mobile number xxxxxxx601
            <span>
              <a href="#">Change</a>
            </span>
          </p>
          <div className="verifyOTP">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
          </div>
          <br />
          <div className="resend-otp">
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
          </div>
          <br />
          {sendOTPData.isRequest === true ? "LOADING..." : null}
          <p style={{color: "red"}}>{alert}</p>
          <button className="verify" onClick={handleVerifyOtp}>
            Verify
          </button>
          <br />
          {verifyOTPData.data &&
          verifyOTPData.isSuccess === true &&
          verifyOTPData.data.success === false
            ? verifyOTPData.data.error.message
            : null}
          {verifyOTPData.data &&
          verifyOTPData.isSuccess === true &&
          verifyOTPData.data.success === true
            ? verifyOTPData.data.result.message
            : null}
            {verifyOTPData.data &&
          verifyOTPData.isSuccess === true &&
          verifyOTPData.data.success === true ? navigate("/createAnAccount") : null}
        </main>
      </div>
    </>
  );
};

export default OptVerify;
