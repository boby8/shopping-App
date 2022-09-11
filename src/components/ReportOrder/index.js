import React, { useState } from "react";
import "./index.css";
import { Reportupdate } from "../../redux/MyOrder/Action";
import { useSelector, useDispatch } from "react-redux";

const ReportOrder = (props) => {
  
  const [reason, setReason] = useState("");
  const idd = localStorage.getItem("jobId");
  const dispatch = useDispatch();

  const handleReason = (e) => {
    setReason(e.target.value);
    console.log(reason);
  };

  const handleReportUpdate = (id, reason) => {
    console.log("function report")
    dispatch(Reportupdate({ id,reason }));
  };
  return (
    <>
      <div className="report-order-container">
        <div className="repoert-cross">
          <p className="report-order-heading">Report Order</p>
          <button className="cross-button" onClick={()=>{props.handleReportVisible()}} >
            ×
          </button>
        </div>
        <hr style={{ width: "100%" }} />
        <p>Do you want to report the order #{idd}?</p>
        <div>
          <input
            type="text" 
            placeholder="Add report reason"
            onChange={handleReason}
            className="inputFieldd"
          />
        </div>
        <hr style={{ width: "100%" }} />
        <div className="add-button">
          <button
            className="yes-button"
            onClick={() => {
              handleReportUpdate(idd, reason);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportOrder;
