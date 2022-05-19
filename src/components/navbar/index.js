import React from "react";
import logo from "../../components/images/logo.png";
import "./index.css";
import Girl from "../../components/images/girls.svg";
import DownArrow from '../../components/images/downArrow.svg';

const Navbar = () => {
  return (
    <>
      <div className="boder_of_navigation">
        <div className="margin">
          <div className="logo_class">
            <img src={logo} alt="" className="logo_box" />

            <p className="delivery_app">DELIVERY_APP</p>
          </div>
          <div className="fields_name">
            <a href="#">My Profile</a>
            <a href="#">My Order</a>
            <a href="#">Address Book</a>

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
