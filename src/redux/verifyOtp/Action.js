import {
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_ERROR,
  VERIFY_OTP_REQ,
} from "./ActionType";

const verifyOtpUrl = () => {
  //   console.log(username, password, "url");
  return `http://3.23.97.12:8000/api/v1/customer/sign-up/verify/sms-otp`;
};

export function getVerifyOtpDetails(data) {
  const {country_code, mobile_Number, verification_token, OTP}=data
  // console.log(data1, data2);
  return (dispatch) => {
    dispatch(verifyOtpReq());

    const url = verifyOtpUrl();
    console.log(url, "verifyOtp");

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "country_code": country_code,
        "phone_number": mobile_Number,
        "verification_token": verification_token,
        "verification_code":OTP,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((verifyOtpDetail) => dispatch(verifyOtpSuccess(verifyOtpDetail)))
      .catch(() => {
        dispatch(verifyOtpError());
      });
  };
}

function verifyOtpReq(verifyOtpData) {
  console.log(verifyOtpData, "55");
  return {
    type: VERIFY_OTP_REQ,
    payload: verifyOtpData,
  };
}
function verifyOtpSuccess(verifyOtpData) {
  console.log(verifyOtpData, "56");
  return {
    type: VERIFY_OTP_SUCCESS,
    payload: verifyOtpData,
  };
}
function verifyOtpError(verifyOtpData) {
  console.log(verifyOtpData, "57");
  return {
    type:VERIFY_OTP_ERROR,
    payload: verifyOtpData,
  };
}
