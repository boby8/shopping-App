import {SHORT_DETAIL_REQ,SHORT_DETAIL_SUCCESS, SHORT_DETAIL_ERROR } from './ActionType';

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const namePasswordReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHORT_DETAIL_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case SHORT_DETAIL_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case SHORT_DETAIL_ERROR:
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

export default namePasswordReducer;