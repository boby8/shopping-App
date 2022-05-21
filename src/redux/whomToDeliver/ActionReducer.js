import {
  FAVOURITE_REQ,
  FAVOURITE_SUCCESS,
  FAVOURITE_ERROR,
} from "./ActionType";

import {
  SEARCH_FAVOURITE_USER_REQ,
  SEARCH_FAVOURITE_USER_SUCCESS,
  SEARCH_FAVOURITE_USER_ERROR,
} from "./ActionType";

import {
  PHONEBOOK_REQ,
  PHONEBOOK_SUCCESS,
  PHONEBOOK_ERROR,
} from "./ActionType";


import {
  PHONEBOOK_DELETE_REQ,
  PHONEBOOK_DELETE_SUCCESS,
  PHONEBOOK_DELETE_ERROR,
} from "./ActionType";

import {
  PHONEBOOK_UPDATE_REQ,
  PHONEBOOK_UPDATE_SUCCESS,
  PHONEBOOK_UPDATE_ERROR,
} from "./ActionType";

import { JOBLIST_REQ, JOBLIST_ERROR, JOBLIST_SUCCESS } from "./ActionType";

import {
  JOBLIST_CREATED_REQ,
  JOBLIST_CREATED_SUCCESS,
  JOBLIST_CREATED_ERROR,
} from "./ActionType";



const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  searchData: {},
  favData: {},
  phoneBook: {},
  phoneBookDelete: {},
  phoneBookUpdate: {},
  jobList: {},
  jobListCreated:{},
  jobListFailed:{},
};

const favouriteUserReducer = (state = initalState, action) => {
  switch (action.type) {
    case FAVOURITE_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        favData: action.payload,
      };

    case FAVOURITE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        favData: action.payload,
      };

    case FAVOURITE_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        favData: action.payload,
      };

    case SEARCH_FAVOURITE_USER_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        searchData: action.payload,
      };

    case SEARCH_FAVOURITE_USER_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        searchData: action.payload,
      };

    case SEARCH_FAVOURITE_USER_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        searchData: action.payload,
      };

    case PHONEBOOK_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        phoneBook: action.payload,
      };

    case PHONEBOOK_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        phoneBook: action.payload,
      };

    case PHONEBOOK_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        phoneBook: action.payload,
      };

    case PHONEBOOK_DELETE_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        phoneBookDelete: action.payload,
      };

    case PHONEBOOK_DELETE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        phoneBookDelete: action.payload,
      };

    case PHONEBOOK_DELETE_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        phoneBookDelete: action.payload,
      };

    case PHONEBOOK_UPDATE_REQ:
      return {
        ...state,
        isRequest: true,
        isSuccess: false,
        isError: false,
        phoneBookUpdate: action.payload,
      };

    case PHONEBOOK_UPDATE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isSuccess: true,
        isError: false,
        phoneBookUpdate: action.payload,
      };

    case PHONEBOOK_UPDATE_ERROR:
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
        isError: true,
        phoneBookUpdate: action.payload,
      };
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


    default:
      return state;
  }
};

export default favouriteUserReducer;
