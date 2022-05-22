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

import { REPORT_REQ, REPORT_ERROR, REPORT_SUCCESS } from "./ActionType";
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
        "x-header-device_id": "d520c7a8-421b-4563-b955-f5abc56b97ec",
        "x-header-platform": "web",
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

//job list order

const joblistOrderUrl = (data) => {
  // console.log(letter, "url");
  return `http://3.23.97.12:8000/api/v1/transaction/customer/job-list?order=${data}`;
};

export function jobListOrderupdate(data) {
  return (dispatch) => {
    dispatch(joblistOrderReq());

    const url = joblistOrderUrl(data);

    console.log(url, "joblistOrder");

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
      .then((joblistOrderDetail) =>
        dispatch(joblistOrderSuccess(joblistOrderDetail))
      )
      .catch(() => {
        dispatch(joblistOrderError());
      });
  };
}

function joblistOrderReq(joblistOrderData) {
  console.log(joblistOrderData, "55");
  return {
    type: JOBLIST_ORDER_REQ,
    payload: joblistOrderData,
  };
}
function joblistOrderSuccess(joblistOrderData) {
  console.log(joblistOrderData, "56");
  return {
    type: JOBLIST_ORDER_SUCCESS,
    payload: joblistOrderData,
  };
}
function joblistOrderError(joblistOrderData) {
  console.log(joblistOrderData, "57");
  return {
    type: JOBLIST_ORDER_ERROR,
    payload: joblistOrderData,
  };
}

//REPORT COMPLAIN

const reportUrl = () => {
  // console.log(letter, "url");
  return "http://3.23.97.12:8000/api/v1.1/payment/report";
};

export function Reportupdate(id, reason) {
  return (dispatch) => {
    dispatch(reportReq());

    const url = reportUrl();

    console.log(url, "reportOrder");

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        reason: reason,
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((reportDetail) => dispatch(reportSuccess(reportDetail)))
      .catch(() => {
        dispatch(reportError());
      });
  };
}

function reportReq(reportData) {
  console.log(reportData, "55");
  return {
    type: REPORT_REQ,
    payload: reportData,
  };
}
function reportSuccess(reportData) {
  console.log(reportData, "56");
  return {
    type: REPORT_SUCCESS,
    payload: reportData,
  };
}
function reportError(reportData) {
  console.log(reportData, "57");
  return {
    type: REPORT_ERROR,
    payload: reportData,
  };
}
