import React from "react";
import logo from "../../components/images/logo.png";
import "./index.css";
import Girl from "../../components/images/girls.svg";
import DownArrow from '../../components/images/downArrow.svg';
import { useNavigate } from "react-router-dom";
import { jobListupdate,jobListCreatedupdate } from "../../redux/whomToDeliver/Action";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const  dispatch = useDispatch();

  const handleMyOrder =()=>{
    navigate("/myorder");
    dispatch(jobListupdate());
   
  }
  const handleWhomToDeliver = () =>{
    navigate("/whomtodeliver")
  }
  const handleHomePage=()=>{
    navigate("/homepage")
  }
  return (
    <>
      <div className="boder_of_navigation">
        <div className="margin">
          <div className="logo_class">
            <img src={logo} alt="" className="logo_box" />

            <p className="delivery_app">DELIVERY_APP</p>
          </div>
          <div className="fields_name">
            <a onClick={handleHomePage}>My Profile</a>
            <a onClick={handleMyOrder}>My Order</a>
            <a onClick={handleWhomToDeliver}>Address Book</a>

            <label className="dropdownInNavbar">
              <img src={Girl} className="girlImgContainer" />
              <abbr className="abbrText">Pritam</abbr>
              <img src={DownArrow} className="downArrowContainer" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
