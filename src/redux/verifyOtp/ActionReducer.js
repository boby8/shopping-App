import {
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_ERROR,
    VERIFY_OTP_REQ,
  } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const verifyOtpReducer = (state = initalState, action) => {
  switch (action.type) {
    case  VERIFY_OTP_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case VERIFY_OTP_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case VERIFY_OTP_ERROR:
      return {
        isRequest: false,
        isSuccess: false,
        isError:true ,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default verifyOtpReducer;
