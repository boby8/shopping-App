import React, { useState, useCallback } from "react";
import profile from "../../components/images/profile.png";
import PhoneInput from "react-phone-number-input";
import "./index.css";
import Cancel from "../../components/images/cancel.svg";
import Pen from "../../components/images/pen.png";
import { useDropzone } from "react-dropzone";
import Toggle from "../../components/toggleButton";
import {
  PhoneBookupdate,
  PhoneBookDetails,
} from "../../redux/whomToDeliver/Action";
import { useDispatch } from "react-redux";

const MyForm = (props) => {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [mobileNumber, setMobileNumber] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [favourite, setFavourite] = useState(false);

  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // onclock function of input fields
  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleAddess = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };
  const handleFavourite = () => {
    setFavourite(true);
  };
  const handlePhoneBook = () => {
    dispatch(
      PhoneBookDetails({
        full_name: name,
        country_code: mobileNumber,
        phone_number: mobileNumber,
        email_id: email,
        isFavorite: favourite,
        address_name: address,
      })
    );
  };

  const handleUpdateOfExistingUserData = () => {
    dispatch(
      PhoneBookupdate({
        full_name: name,
        country_code: "+65",
        id: props.idfordott,
        address_name: address,
        phone_number: mobileNumber,
      })
    );
  };

  return (
    <>
      <div className="form_conatiner">
        <img
          src={Cancel}
          className="cancelContainer"
          onClick={props.closeForm}
        />
        <p className="addNewContactGeading">{props.heading}</p>
        <img src={profile} className="profileConatiner" />
        <div className="uploadFile">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img src={Pen} className="penConatiner" />
          </div>
        </div>

        <div className="inputFields">
          <input
            type="text"
            placeholder="Full_Name"
            className="Full_Name"
            value={name}
            onChange={handleName}
          />
          <div className="mobileNumber">
            <PhoneInput
              value={mobileNumber}
              onChange={setMobileNumber}
              placeholder="Please Enter your Mobile Number"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="emailContainer"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="AddressContainer"
            placeholder="Enter your Address"
            value={address}
            onChange={handleAddess}
          />
        </div>
        <di className="FavouriteUser">
          <label className="AddFavouriteLabel">Add to Favourite</label>
          <Toggle handleFavourite={handleFavourite} />
        </di>
        <div className="pickUpAddress">
          <label className="AddFavouriteLabel">
            Set as Default Pickup Address
          </label>
          <Toggle />
        </div>

        <div className="buttonContainer">
          <button
            className="Add_conatct_button"
            onClick={() => {
              props.edit == true ? handleUpdateOfExistingUserData() : 
              props.notify()
              handlePhoneBook()
             
            }}
          >
            {props.button}
          </button>
          <button
            className="cancel_button"
            onClick={() => {
              props.handleFavApi();
              props.closeForm();
             
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default MyForm;
