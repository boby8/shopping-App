import React, { useEffect, useState } from "react";
import "./index.css";
import search from "../../components/images/search.svg";
import {
  jobListCreatedupdate,
  jobListOrderupdate,
  jobListupdate,
} from "../../redux/MyOrder/Action";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import calender from "../../components/images/calender.svg";
import flag from "../../components/images/flag.svg";
import ReportOrder from "../../components/ReportOrder";
import { useSelect } from "@mui/base";

const MyOrder = () => {
  var job_Id = "";
  const [reportOpen, setreportOpen] = useState(false);

  const dispatch = useDispatch();
  const myOrdereddata = useSelector((store) => store.requreiedJobList);
  console.log(myOrdereddata);

  const [jobList, setJobList] = useState(true);
  const [filterbyStatus, setFilterByStatus] = useState(false);
  const [jobListCreatedd, setjobListCreated] = useState(false);
  //const [newestToOldest,setNewestToOldest] = useSelect(false);

  var jobListNewest = false;

  //function1 call
  useEffect(() => {
    dispatch(jobListupdate());
    setState();
  }, [jobList === true]);

  const setState = () => {};
  //newest to oldest fun3
  const handleMyOrderList = (data) => {
     
      dispatch(jobListOrderupdate(data));
    
  };

  const handleReportVisible = () => {
    console.log("function called report ");
    if (reportOpen === false) {
      setreportOpen(true);
      localStorage.setItem("jobId", job_Id);
    } else {
      setreportOpen(false);
    }
  };

  const idd = localStorage.getItem("jobId");
  //dropdowm functionm 2

  const handleMyOrderCreated = (data) => {
    setJobList(false);
    if (data === "filter") {
      setFilterByStatus(true);
      setjobListCreated(false);
     
      
      dispatch(jobListupdate());
    } else {
      setjobListCreated(true);
      setFilterByStatus(false);
     
      dispatch(jobListCreatedupdate(data));
    }
  };

  return (
    <>
      {reportOpen === true ? (
        <div className="popUP-report-form">
          <ReportOrder handleReportVisible={handleReportVisible} />
        </div>
      ) : null}
      <Loader size="40px" color="blue" visible={myOrdereddata.isRequest} />
      <Navbar />

      <div className="my_order_content">
        <div className="my-order-heading">
          <h1>My Orders</h1>
        </div>

        <div className="conatainer-of-serachbar">
          <div className="search-icon-inputField">
            <div className="search_icon_conatiner">
              <img src={search} alt="" />
            </div>
            <div style={{ width: "100%" }}>
              <input type="text" className="inputField" placeholder="Search" />
            </div>
          </div>
          <div className="searchbar-button">
            <div>
              <select
                className="filter-by-status"
                // onChange={handleSelectedValue}
                onChange={(e) => {
                  handleMyOrderCreated(e.target.value);
                }}
              >
                <option value="filter">Filter by Status</option>
                <option value="created">Created</option>
                <option value="failed">Failed</option>
                <option value="paid">Paid</option>
                <option value="ongoing">Ongoing</option>
                <option value="canceled">Canceled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <select
                className="newest-to-oldest"
                onChange={(e) => {
                  handleMyOrderList(e.target.value);
                }}
              >
                <option value="ASE">Newest to Oldest</option>
                <option value="DESE">Oldest to Newest</option>
              </select>
            </div>
          </div>
        </div>
        {jobList === true ? (
          <div>
            {myOrdereddata &&
            myOrdereddata.isSuccess === true &&
            myOrdereddata.jobList &&
            myOrdereddata.jobList.success === true ? (
              <div>
                {myOrdereddata.jobList.result.map((data) => {
                  return (
                    <div className="job-list-data-container">
                      <div className="id-cancel-report-container">
                        <div className="id-status-container">
                          <p>#{data.id}</p>
                          <p className="cancel-button">{data.status}</p>
                        </div>

                        <button
                          className="report-btn"
                          onClick={() => {
                            job_Id = data.id;
                            handleReportVisible();
                          }}
                        >
                          <img src={flag} style={{ width: "10px" }} />
                          Report
                        </button>
                      </div>
                      <div className="heading-container">
                        <p>Delivery Complete on</p>
                        <p>Cost</p>
                        <p>Delivered to</p>
                      </div>
                      <div className="time-cost-container">
                        <div className="calender-time-conatiner">
                          <p className="calender ">
                            <img src={calender} alt="" />
                          </p>
                          <p>{data.estimateTimeArrival}</p>
                        </div>
                        <p>{data.cost}</p>
                      </div>
                      <p className="pickup-partner">Pickup Partner</p>
                      <p className="not-assigned">Not Assigned</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
        {jobListCreatedd == true ? (
          <div>
            {myOrdereddata &&
            myOrdereddata.isSuccess === true &&
            myOrdereddata.jobListCreated &&
            myOrdereddata.jobListCreated.success === true &&
            myOrdereddata.jobListCreated.result.length !== 0 ? (
              <div>
                {myOrdereddata.jobList.result.map((data) => {
                  return (
                    <div className="job-list-data-container">
                      <div className="id-cancel-report-container">
                        <div className="id-status-container">
                          <p>#{data.id}</p>
                          <p className="cancel-button">{data.status}</p>
                        </div>

                        <button
                          className="report-btn"
                          onClick={() => {
                            job_Id = data.id;

                            handleReportVisible();
                          }}
                        >
                          <img src={flag} style={{ width: "10px" }} />
                          Report
                        </button>
                      </div>
                      <div className="heading-container">
                        <p>Delivery Complete on</p>
                        <p>Cost</p>
                        <p>Delivered to</p>
                      </div>
                      <div className="time-cost-container">
                        <div className="calender-time-conatiner">
                          <p className="calender ">
                            <img src={calender} alt="" />
                          </p>
                          <p>{data.estimateTimeArrival}</p>
                        </div>
                        <p>{data.cost}</p>
                      </div>
                      <p className="pickup-partner">Pickup Partner</p>
                      <p className="not-assigned">Not Assigned</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              "NO DATA FOUND"
            )}
          </div>
        ) : null}

        {filterbyStatus === true ? (
          <div>
            {myOrdereddata &&
            myOrdereddata.isSuccess === true &&
            myOrdereddata.jobList &&
            myOrdereddata.jobList.success === true ? (
              <div>
                {myOrdereddata.jobList.result.map((data) => {
                  return (
                    <div className="job-list-data-container">
                      <div className="id-cancel-report-container">
                        <div className="id-status-container">
                          <p>#{data.id}</p>
                          <p className="cancel-button">{data.status}</p>
                        </div>

                        <button
                          className="report-btn"
                          onClick={() => {
                            job_Id = data.id;
                            handleReportVisible();
                          }}
                        >
                          <img src={flag} style={{ width: "10px" }} />
                          Report
                        </button>
                      </div>
                      <div className="heading-container">
                        <p>Delivery Complete on</p>
                        <p>Cost</p>
                        <p>Delivered to</p>
                      </div>
                      <div className="time-cost-container">
                        <div className="calender-time-conatiner">
                          <p className="calender ">
                            <img src={calender} alt="" />
                          </p>
                          <p>{data.estimateTimeArrival}</p>
                        </div>
                        <p>{data.cost}</p>
                      </div>
                      <p className="pickup-partner">Pickup Partner</p>
                      <p className="not-assigned">Not Assigned</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}

        
      </div>
    </>
  );
};

export default MyOrder;
