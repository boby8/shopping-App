import { MORE_DETAILS_SUCCESS, MORE_DETAILS_ERROR,  MORE_DETAILS_REQ  } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const fullUserDetailsReducer = (state = initalState, action) => {
  switch (action.type) {
    case MORE_DETAILS_REQ:
      
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case MORE_DETAILS_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case MORE_DETAILS_ERROR:
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

export default fullUserDetailsReducer ;
