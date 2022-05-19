import React from "react";

export default function MoreDetailsForAccountForm(props) {
  return (
    <>
      <main className="brief_content">
        <h2>Create An Account</h2>
        <p className="sub_heading">Kindly Enter the following details</p>
        <div className="input_details">
          <input
            type="text"
            placeholder="Full Name"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email id"
            value={props.email}
            name="email"
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Block"
            style={{ width: "28%" }}
            value={props.block}
            onChange={(e) => props.setBlock(e.target.value)}
          />
          <input
            type="text"
            placeholder="Unit"
            style={{ width: "28%" }}
            value={props.unit}
            onChange={(e) => props.setUnit(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            value={props.address}
            onChange={(e) => props.setAddress(e.target.value)}
          />
          <br />
          <p className="location" onClick={props.current_location}>
            📍 Your Current location
          </p>
          <span>{props.latitude}</span>
          <span> {props.longitude}</span>
          <br />
          <input
            type="text"
            placeholder="Postal Code"
            value={props.postelCode}
            onChange={(e) => props.setPostelCode(e.target.value)}
          />
          <br />
          <select
            name="gender"
            id="gender"
            className="gender"
            value={props.gender}
            onChange={(e) => props.setGender(e.target.value)}
          >
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <br />
        <input
          type="date"
          name="birthDate"
          placeholder="Enter Your Birthdate"
          className="birthday"
          value={props.birthday}
          onChange={(e) => props.setBirthday(e.target.value)}
        />
        <br />
       
        <br />
        
        <button  onClick={props.handleCreateAnAccount}className="create_account_with_details">
          Create Account
        </button>
        
      </main>
    </>
  );
}
