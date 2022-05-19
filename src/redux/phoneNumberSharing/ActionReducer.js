import { PHONE_NUMBER_REQ, PHONE_NUMBER_SUCCESS, PHONE_NUMBER_ERROR} from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const phoneNumberReducer = (state = initalState, action) => {
  switch (action.type) {
    case PHONE_NUMBER_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case PHONE_NUMBER_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case PHONE_NUMBER_ERROR:
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

export default  phoneNumberReducer;