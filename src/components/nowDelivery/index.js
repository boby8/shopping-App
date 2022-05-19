import React from "react";
import "./index.css";
import rightArrow from "../../components/images/arrowright.png";
import location from "../../components/images/location.png";
import phone from "../../components/images/phone.png";
import user from "../../components/images/user.png";
import { useSelector } from "react-redux";
import Delete from "../../components/images/delete.svg";
import { useNavigate } from "react-router-dom";

const NowDelivery = (props) => {
  const userData = useSelector((store) => store.requriedFavouriteUser);

  console.log(userData, "showDataInButton");

  const navigate = useNavigate();
  var id = localStorage.getItem("id");
  console.log(id);

  var data = localStorage.getItem("check");
  console.log(data);

const handleNavigatetowhomeTodeliver = ()=>{
  navigate("/whomtodeliver");
}

  return (
    <>
      <p className="special_instruction">
        <div className="special_delivery">Special Instructions</div>
        <div className="row">
          <div className="text_Area">
            <textarea cols="143" rows="3" className="textarea"></textarea>
          </div>
        </div>

        <br />
        <br />
        <div className="recipients">
          {data === "true" && userData.isSuccess == true ? (
            <button className="Add_Recipients">

              {userData.favData.result.map((item) => {
                if (id === item.id) {
                  console.log(item.full_name);
                  return (
                    <div>
                      <div className="heading-off-recipitent">
                        <label htmlFor="">Recipients</label>
                        <abbr onClick={handleNavigatetowhomeTodeliver}>Add/Edit</abbr>
                      </div>

                      <div className="user-data-on-recipitent">
                      <span className="spanData">
                        <input type="checkbox" name="" id="" />
                        </span>
                        <span className="spanData">
                          <img
                            src={user}
                            style={{ width: "30px", height: "30px" }}
                          />
                          <p>{item.full_name}</p>
                        </span>
                        <span className="spanData">
                          <img
                            src={phone}
                            style={{ width: "30px", height: "30px" }}
                          />
                          <p>{item.phone_number}</p>
                        </span>
                        <span className="spanData">
                          <img
                            src={location}
                            style={{ width: "30px", height: "30px" }}
                          />
                          <p>{item.address_name}</p>
                        </span>
                        <span className="spanData">
                        <img src={Delete} onClick={handleNavigatetowhomeTodeliver} style={{ width: "30px" }} />
                        </span>
                      </div>
                    </div>
                  );
                }
              })}
            </button>
          ) : (
            <button className="Add_Recipients" onClick={props.handleFavourite}>
              <div className="content-of-button">
              <label>Add Recipients</label>
              <img src={rightArrow} className="arrow" />
              </div>
            </button>
          )}
        </div>
        <div className="next_button">
          <button className="next_click" >
            Next
          </button>
        </div>
      </p>
    </>
  );
};

export default NowDelivery;
