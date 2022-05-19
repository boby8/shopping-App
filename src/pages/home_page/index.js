import React, { useState } from "react";
import "./index.css";
import box from "../../components/images/box.png";
import transport from "../../components/images/delivery.png";
import crypto from "../../components/images/crypto.png";
import NowDeliver from "../../components/nowDelivery";
import leftArrow from "../../components/images/arrow.png";
import { useNavigate } from "react-router-dom";
import pen from "../../components/images/pen.png";
import home_img from "../../components/images/home.png";

import { favouritrUserDetails } from "../../redux/whomToDeliver/Action";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import DateAndTime from "../../components/timeAndDate";
import FloatBtn from "../../components/images/floting_btn.svg";

const HomePage = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favouriteUserData = useSelector((store) => store.requriedFavouriteUser);

  console.log(favouriteUserData, "11111");

  const handleFavourite = () => {
    console.log("handle function");
    dispatch(favouritrUserDetails());
    navigate("/whomtodeliver");
  };

  const sechduleDelivery = () => {
    setState(true);
  };

  const nowDelivery = () => {
    setState(false);
  };
   
  const movetodeliverPage = () =>{
    navigate("/whomtodeliver");
  }
  return (
    <>
      <Navbar />
      <div className="main_div">
        <main>
          <div className="left_arrow_content">
            <p className="left_arrow">
              <img src={leftArrow} alt="" />
            </p>
            <p className="New_Delivery">New Delivery</p>
          </div>

          <div className="pickupForm">
            <div className="pickup">
              <p>Pickup From</p>
              <div className="pen">
                <img src={pen} alt="" className="pen" />
              </div>
            </div>
            <div className="address_content">
              <img src={home_img} alt="" className="home_img" />

              <p className="Home_text">Home</p>

              <p className="address">
                72,Twin Regency, 25 kimn chum tim road Singapore
              </p>
            </div>
          </div>
          <div>
            <p className="select_delivery_type">Select Delivery Type</p>
          </div>

          {/* /card start */}

          <div className="cards">
            <div className="card_1">
              <img src={box} className="box_img" />
              <div className="delivery">
                <label htmlFor="card1">
                  <span>Now Delivery</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="crypto">
                    <img src={crypto} alt="" className="crypto_img" />
                    <span className="doller">$8</span>
                  </div>
                </label>
              </div>

              <input
                type="radio"
                name="card"
                id="card1"
                onClick={nowDelivery}
              />
            </div>

            <div className="card_2">
              <img src={transport} className="box_img" />
              <div className="delivery">
                <label htmlFor="card2">
                  <span>Schedule Delivery</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className="crypto">
                    <img src={crypto} className="crypto_img" />
                    <span className="doller">$12</span>
                  </div>
                </label>
              </div>

              <input
                type="radio"
                name="card"
                
                id="card2"
                onClick={sechduleDelivery}
                value={state}
              />
            </div>
          </div>
          {state === true ? <DateAndTime /> : null}
          <NowDeliver handleFavourite={handleFavourite} movetodeliverPage={movetodeliverPage} />
          <div className="float_button_container">
            <img src={FloatBtn} className="float_button" />
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
