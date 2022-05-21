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

import {
  JOBLIST_FAILED_REQ,
  JOBLIST_FAILED_SUCCESS,
  JOBLIST_FAILED_ERROR,
} from "./ActionType";

const favouritrUserUrl = () => {
  //   console.log(username, password, "url");
  return `http://3.23.97.12:8000/api/v1/customer/phone-book/favorite`;
};

export function favouritrUserDetails() {
  // console.log(data);
  // const {first_name,last_name,address_name,phone_number} = data
  return (dispatch) => {
    dispatch(favouritrUserReq());

    const url = favouritrUserUrl();
    console.log(url, "favouritrUser");

    fetch(url, {
      method: "GET",
      //  body:JSON.stringify({
      //   first_name:"John",
      //   last_name:"Smith",
      //   address_name:"244 South Bridge Rd, Singapore 058793",
      //   phone_number:"1234567891",

      //  }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((favouritrUserDetail) =>
        dispatch(favouritrUserSuccess(favouritrUserDetail))
      )
      .catch(() => {
        dispatch(favouritrUserError());
      });
  };
}

function favouritrUserReq(favouritrUserData) {
  console.log(favouritrUserData, "55");
  return {
    type: FAVOURITE_REQ,
    payload: favouritrUserData,
  };
}
function favouritrUserSuccess(favouritrUserData) {
  console.log(favouritrUserData, "56");
  return {
    type: FAVOURITE_SUCCESS,
    payload: favouritrUserData,
  };
}
function favouritrUserError(favouritrUserData) {
  console.log(favouritrUserData, "57");
  return {
    type: FAVOURITE_ERROR,
    payload: favouritrUserData,
  };
}

const searchFavouriteUserUrl = (letter) => {
  console.log(letter, "url");
  return `http://3.23.97.12:8000/api/v1/customer/phone-book?startWith=${letter}`;
};

export function searchUserDetails(letter) {
  console.log(letter);
  // const {first_name,last_name,address_name,phone_number} = data
  return (dispatch) => {
    dispatch(searchFavouriteUserReq());

    const url = searchFavouriteUserUrl(letter);
    console.log(url, "favouritrUser");

    fetch(url, {
      method: "GET",
      //  body:JSON.stringify({

      //  }),
      headers: {
        "content-type": "application/json",
        "content-type": "text/plain",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((searchFavouriteUserDetail) =>
        dispatch(searchFavouriteUserSuccess(searchFavouriteUserDetail))
      )
      .catch(() => {
        dispatch(searchFavouriteUserError());
      });
  };
}

function searchFavouriteUserReq(searchFavouriteUserData) {
  console.log(searchFavouriteUserData, "55");
  return {
    type: SEARCH_FAVOURITE_USER_REQ,
    payload: searchFavouriteUserData,
  };
}
function searchFavouriteUserSuccess(searchFavouriteUserData) {
  console.log(searchFavouriteUserData, "56");
  return {
    type: SEARCH_FAVOURITE_USER_SUCCESS,
    payload: searchFavouriteUserData,
  };
}
function searchFavouriteUserError(searchFavouriteUserData) {
  console.log(searchFavouriteUserData, "57");
  return {
    type: SEARCH_FAVOURITE_USER_ERROR,
    payload: searchFavouriteUserData,
  };
}
// AddUser Phonebook

const addPhoneBookUrl = () => {
  // console.log(letter, "url");
  return "http://3.23.97.12:8000/api/v1/customer/phone-book";
};

export function PhoneBookDetails(data) {
  console.log(data);
  const {
    country_code,
    phone_number,
    email_id,
    full_name,
    address_name,
    isFavorite,
  } = data;
  return (dispatch) => {
    dispatch(addPhoneBookReq());

    const url = addPhoneBookUrl();

    console.log(url, "addPhoneBook");

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        country_code: country_code,
        phone_number: phone_number,
        email_id: email_id,
        full_name: full_name,
        address_name: address_name,
        address_latitude: 1234.23456,
        address_longitude: 12223.6543,
        isFavorite: isFavorite,
        isDefault: false,
        // avatar: "string",
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((addPhoneBookDetail) =>
        dispatch(addPhoneBookSuccess(addPhoneBookDetail))
      )
      .catch(() => {
        dispatch(addPhoneBookError());
      });
  };
}

function addPhoneBookReq(addPhoneBookData) {
  console.log(addPhoneBookData, "55");
  return {
    type: PHONEBOOK_REQ,
    payload: addPhoneBookData,
  };
}
function addPhoneBookSuccess(addPhoneBookData) {
  console.log(addPhoneBookData, "56");
  return {
    type: PHONEBOOK_SUCCESS,
    payload: addPhoneBookData,
  };
}
function addPhoneBookError(addPhoneBookData) {
  console.log(addPhoneBookData, "57");
  return {
    type: PHONEBOOK_ERROR,
    payload: addPhoneBookData,
  };
}

//delete user from phoneBook

const deletePhoneBookUrl = () => {
  // console.log(letter, "url");
  return "http://3.23.97.12:8000/api/v1/customer/phone-book";
};

export function PhoneBookDelete(data) {
  return (dispatch) => {
    dispatch(deletePhoneBookReq());

    const url = deletePhoneBookUrl();

    console.log(url, "deletePhoneBook");

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify({
        id: data,
        // avatar: "string",
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((deletePhoneBookDetail) =>
        dispatch(deletePhoneBookSuccess(deletePhoneBookDetail))
      )
      .catch(() => {
        dispatch(deletePhoneBookError());
      });
  };
}

function deletePhoneBookReq(deletePhoneBookData) {
  console.log(deletePhoneBookData, "55");
  return {
    type: PHONEBOOK_DELETE_REQ,
    payload: deletePhoneBookData,
  };
}
function deletePhoneBookSuccess(deletePhoneBookData) {
  console.log(deletePhoneBookData, "56");
  return {
    type: PHONEBOOK_DELETE_SUCCESS,
    payload: deletePhoneBookData,
  };
}
function deletePhoneBookError(deletePhoneBookData) {
  console.log(deletePhoneBookData, "57");
  return {
    type: PHONEBOOK_DELETE_ERROR,
    payload: deletePhoneBookData,
  };
}

//UPDATE PHONEBOOK

const updatePhoneBookUrl = () => {
  // console.log(letter, "url");
  return "http://3.23.97.12:8000/api/v1/customer/phone-book";
};

export function PhoneBookupdate(data) {
  console.log(data);
  const {
    country_code,
    phone_number,

    full_name,
    address_name,

    id,
  } = data;
  return (dispatch) => {
    dispatch(updatePhoneBookReq());

    const url = updatePhoneBookUrl();

    console.log(url, "updatePhoneBook");

    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        country_code: country_code,
        phone_number: phone_number,
        isFavorite: true,
        full_name: full_name,
        address_name: address_name,
        id: id,
        address_latitude: 1234.23456,
        address_longitude: 12223.6543,

        isDefault: false,
        avatar: null,
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((updatePhoneBookDetail) =>
        dispatch(updatePhoneBookSuccess(updatePhoneBookDetail))
      )
      .catch(() => {
        dispatch(updatePhoneBookError());
      });
  };
}

function updatePhoneBookReq(updatePhoneBookData) {
  console.log(updatePhoneBookData, "55");
  return {
    type: PHONEBOOK_UPDATE_REQ,
    payload: updatePhoneBookData,
  };
}
function updatePhoneBookSuccess(updatePhoneBookData) {
  console.log(updatePhoneBookData, "56");
  return {
    type: PHONEBOOK_UPDATE_SUCCESS,
    payload: updatePhoneBookData,
  };
}
function updatePhoneBookError(updatePhoneBookData) {
  console.log(updatePhoneBookData, "57");
  return {
    type: PHONEBOOK_UPDATE_ERROR,
    payload: updatePhoneBookData,
  };
}

//JOBLIST

const joblistUrl = () => {
  // console.log(letter, "url");
  return "http://3.23.97.12:8000/api/v1/transaction/customer/job-list?order=ASC";
};

export function jobListupdate() {
  return (dispatch) => {
    dispatch(joblistReq());

    const url = joblistUrl();

    console.log(url, "joblist");

    fetch(url, {
      method: "GET",
      // body: JSON.stringify({

      // }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((joblistDetail) => dispatch(joblistSuccess(joblistDetail)))
      .catch(() => {
        dispatch(joblistError());
      });
  };
}

function joblistReq(joblistData) {
  console.log(joblistData, "55");
  return {
    type: JOBLIST_REQ,
    payload: joblistData,
  };
}
function joblistSuccess(joblistData) {
  console.log(joblistData, "56");
  return {
    type: JOBLIST_SUCCESS,
    payload: joblistData,
  };
}
function joblistError(joblistData) {
  console.log(joblistData, "57");
  return {
    type: JOBLIST_ERROR,
    payload: joblistData,
  };
}

//JOBLIST CREATED

const joblistCreatedUrl = (data) => {
  // console.log(letter, "url");
  return `http://3.23.97.12:8000/api/v1/transaction/customer/job-list?filter=${data}&order=ASC`;
};

export function jobListCreatedupdate(data) {
  return (dispatch) => {
    dispatch(joblistCreatedReq());

    const url = joblistCreatedUrl(data);

    console.log(url, "joblistCreated");

    fetch(url, {
      method: "GET",
      // body: JSON.stringify({

      // }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((joblistCreatedDetail) =>
        dispatch(joblistCreatedSuccess(joblistCreatedDetail))
      )
      .catch(() => {
        dispatch(joblistCreatedError());
      });
  };
}

function joblistCreatedReq(joblistCreatedData) {
  console.log(joblistCreatedData, "55");
  return {
    type: JOBLIST_CREATED_REQ,
    payload: joblistCreatedData,
  };
}
function joblistCreatedSuccess(joblistCreatedData) {
  console.log(joblistCreatedData, "56");
  return {
    type: JOBLIST_CREATED_SUCCESS,
    payload: joblistCreatedData,
  };
}
function joblistCreatedError(joblistCreatedData) {
  console.log(joblistCreatedData, "57");
  return {
    type: JOBLIST_CREATED_ERROR,
    payload: joblistCreatedData,
  };
}

