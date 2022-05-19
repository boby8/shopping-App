import {
  SHORT_DETAIL_REQ,
  SHORT_DETAIL_SUCCESS,
  SHORT_DETAIL_ERROR,
} from "./ActionType";

export function getNamePassword(fname, lname, password) {
  console.log(fname, lname, password);
  return (dispatch) => {
    dispatch(dataReq());
    const data = {
      fname: fname,
      lname: lname,
      password: password,
    };
    dispatch(dataSuccess(data));
  };
}

function dataReq(sendOtpData) {
  console.log(sendOtpData, "55");
  return {
    type: SHORT_DETAIL_REQ,
    payload: sendOtpData,
  };
}
function dataSuccess(sendOtpData) {
  console.log(sendOtpData, "56");
  return {
    type: SHORT_DETAIL_SUCCESS,
    payload: sendOtpData,
  };
}
function dataError(sendOtpData) {
  console.log(sendOtpData, "57");
  return {
    type: SHORT_DETAIL_ERROR,
    payload: sendOtpData,
  };
}
