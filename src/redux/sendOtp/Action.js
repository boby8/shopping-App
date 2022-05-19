import { SEND_OTP_REQ,  SEND_OTP_SUCCESS ,SEND_OTP_ERROR } from "./ActionType";
const sendOtpUrl = () => {
//   console.log(username, password, "url");
  return `http://3.23.97.12:8000/api/v1/customer/sign-up/send/sms-otp`;
};

export function getSendOtpDetails(data1, data2) {
  console.log(data1, data2);
  return (dispatch) => {
    dispatch(sendOtpReq());

    const url = sendOtpUrl(data1, data2);
    console.log(url, "sendOtp");

    fetch(url,{
      method:"POST",
     body:JSON.stringify({
      "phone_number": data2,
      "country_code": data1
     }),
     headers:{
          "content-type": "application/json",
         
      }
    })
      .then((resp) => resp.json())
      .then((sendOtpDetail) => dispatch(sendOtpSuccess(sendOtpDetail)))
      .catch(() => {
        dispatch(sendOtpError());
      });
  };
}

function sendOtpReq(sendOtpData) {
  console.log(sendOtpData, "55");
  return {
    type: SEND_OTP_REQ,
    payload: sendOtpData,
  };
}
function sendOtpSuccess(sendOtpData) {
  console.log(sendOtpData, "56");
  return {
    type: SEND_OTP_SUCCESS ,
    payload: sendOtpData,
  };
}
function sendOtpError(sendOtpData) {
  console.log(sendOtpData, "57");
  return {
    type:SEND_OTP_ERROR  ,
    payload: sendOtpData,
  };
}
