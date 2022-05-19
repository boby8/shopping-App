import React, { useState, useCallback } from "react";
import profile from "../../components/images/profile.png";
import PhoneInput from "react-phone-number-input";
import "./index.css";
import Cancel from "../../components/images/cancel.svg";
import Pen from "../../components/images/pen.png";
import { useDropzone } from "react-dropzone";
import Toggle from '../../components/toggleButton';

import { useDispatch } from "react-redux";

const MyFormForViewDetails = (props) => {
  
  
  const[favourite, setFavourite] = useState(false);

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

const handleFavourite =()=>{
  setFavourite(true);
  
}


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
            disabled={true}
            placeholder="Full_Name"
            className="Full_Name"
            value={props.name}
            
          />
          <div className="mobileNumber">
          <PhoneInput
            value={props.phone}
            disabled={true}
            placeholder="Please Enter your Mobile Number"
           
          />
          </div>
          <input
            type="email"
            disabled={true}
            placeholder="Enter your email"
            className="emailContainer"
            value={props.email}
           
          />
          <input
            type="text"
            disabled={true}
            className="AddressContainer"
            placeholder="Enter your Address"
            value={props.address}
           
          />
        </div>
       <di className="FavouriteUser">
          <label className="AddFavouriteLabel">Add to Favourite</label>
            <Toggle handleFavourite={handleFavourite}/>
            </di>  
          <div className="pickUpAddress">
          <label className="AddFavouriteLabel">
            Set as Default Pickup Address
          </label>
          <Toggle/>
          </div>
      
      
      </div>
    </>
  );
};

export default MyFormForViewDetails;
