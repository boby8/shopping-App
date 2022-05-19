import { SEND_OTP_REQ,  SEND_OTP_SUCCESS ,SEND_OTP_ERROR } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const sendOtpReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEND_OTP_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case SEND_OTP_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case SEND_OTP_ERROR:
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

export default sendOtpReducer;
