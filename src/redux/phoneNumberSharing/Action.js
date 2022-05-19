import { PHONE_NUMBER_REQ, PHONE_NUMBER_SUCCESS, PHONE_NUMBER_ERROR} from "./ActionType";

export function getPhoneNumber(country_code, mobile_Number) {
  console.log(country_code, mobile_Number);
  return (dispatch) => {
    dispatch(dataReq());
    const data = {
      country_code: country_code,
   
      mobile_Number:mobile_Number,
    };
    dispatch(dataSuccess(data));
  };
}

function dataReq(phoneData) {
  console.log(phoneData, "55");
  return {
    type:  PHONE_NUMBER_REQ,
    payload: phoneData,
  };
}
function dataSuccess(phoneData) {
  console.log(phoneData, "56");
  return {
    type: PHONE_NUMBER_SUCCESS,
    payload: phoneData,
  };
}
function dataError(phoneData) {
  console.log(phoneData, "57");
  return {
    type: PHONE_NUMBER_ERROR,
    payload: phoneData,
  };
}
