import { JOBLIST_REQ, JOBLIST_ERROR, JOBLIST_SUCCESS } from "./ActionType";

import {
  JOBLIST_CREATED_REQ,
  JOBLIST_CREATED_SUCCESS,
  JOBLIST_CREATED_ERROR,
} from "./ActionType";

import {
  JOBLIST_ORDER_ERROR,
  JOBLIST_ORDER_SUCCESS,
  JOBLIST_ORDER_REQ,
} from "./ActionType";

import {REPORT_REQ, REPORT_ERROR, REPORT_SUCCESS} from './ActionType';

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  jobList: {},
  jobListCreated: {},
  jobListOrder: {},
  report:{},
};
const jobListUserReducer = (state = initalState, action) => {
  switch (action.type) {
    case JOBLIST_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        jobList: action.payload,
      };

    case JOBLIST_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        jobList: action.payload,
      };

    case JOBLIST_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        jobList: action.payload,
      };

    case JOBLIST_CREATED_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        jobListCreated: action.payload,
      };

    case JOBLIST_CREATED_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        jobListCreated: action.payload,
      };

    case JOBLIST_CREATED_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        jobListCreated: action.payload,
      };
    case JOBLIST_ORDER_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        jobListOrder: action.payload,
      };

    case JOBLIST_ORDER_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        jobListOrder: action.payload,
      };

    case JOBLIST_ORDER_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        jobListOrder: action.payload,
      };
      
    case REPORT_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        report: action.payload,
      };

    case REPORT_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        report: action.payload,
      };

    case REPORT_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        report: action.payload,
      };

    default:
      return state;
  }
};

export default jobListUserReducer;
