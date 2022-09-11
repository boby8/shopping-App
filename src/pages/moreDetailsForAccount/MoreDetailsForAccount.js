import React, { useEffect, useState } from "react";
import Image from "../../components/Image";
import "./MoreDetailsForAccount.css";
import { useSelector, useDispatch } from "react-redux";
import { getMoreUserDetails } from "../../redux/fullDetailsForAccountApI/Action";
import MoreDetailsForAccountForm from "../../components/moreDetailsForAccountForm";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const MoreDetailsForAccount = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setongitude] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [block, setBlock] = useState("");
  const [unit, setUnit] = useState("");
  const [address, setAddress] = useState("");
  const [postelCode, setPostelCode] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sendOTPData.data && sendOTPData.isSuccess === false)
     {
      navigate("/");
    }
  });

  const namePasswordData = useSelector((store) => store.requriedNamePassword);
  //console.log(namePasswordData, "name & Password");

  const mobileData = useSelector((store) => store.requriedPhoneNumber);
 // console.log(mobileData, "mobile data");

  const sendOTPData = useSelector((store) => store.requriedSendOtpData);
  //console.log(sendOTPData, "sendopt");

  const accountCreated = useSelector((store) => store.requriedAccountCreated);
  //console.log(accountCreated, "account created");

  const current_location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      const { latitude, longitude } = position.coords;
      console.log(longitude);
      console.log(latitude);
      setLatitude(latitude);
      setongitude(longitude);
    });
  };
  useEffect(() => {
    setLatitude("");
    setongitude("");
  }, []);

  const handleCreateAnAccount = () => {
    const { fname, lname, password } = namePasswordData.data;

    const { country_code, mobile_Number } = mobileData.data;

    const { verificationToken } = sendOTPData.data.result;
    if (
      name.length != 0 &&
      email.length != 0 &&
      block.length != 0 &&
      unit.length != 0 &&
      address.length != 0 &&
      latitude.length != 0 &&
      longitude.length != 0 &&
      postelCode.length != 0 &&
      gender.length != 0 &&
      birthday.length != 0
    ) {
      dispatch(
        getMoreUserDetails({
          country_code: country_code,
          mobile_Number: mobile_Number,
          email: email,
          password: password,
          fname: fname,
          lname: lname,
          birth_day: birthday,
          gender: gender,
          address_name: address,
          address_latitude: latitude,
          address_longitude: longitude,
          verificationToken: verificationToken,
          postal_number: postelCode,
        })
      );
    } else {
      console.log("error");
      setAlert("Enter All Details");
    }
  };

  return (
    <>
    
      <Loader size="40px" color="green" visible={accountCreated.isRequest} />
      <div className="full-content">
        <Image />

        <MoreDetailsForAccountForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          block={block}
          setBlock={setBlock}
          unit={unit}
          setUnit={setUnit}
          address={address}
          setAddress={setAddress}
          postelCode={postelCode}
          setPostelCode={setPostelCode}
          current_location={current_location}
          latitude={latitude}
          longitude={longitude}
          gender={gender}
          setGender={setGender}
          birthday={birthday}
          setBirthday={setBirthday}
          handleCreateAnAccount={handleCreateAnAccount}
        />
      </div>
      <div>
        <p>{alert}</p>
      </div>
      <div className="error_message">
        {accountCreated.data &&
        accountCreated.isSuccess === true &&
        accountCreated.data.success === false
          ? accountCreated.data.error.message
          : null}
      </div>
      {accountCreated.data &&
      accountCreated.isSuccess === true &&
      accountCreated.data.success === true
        ? navigate("/loginWithEmail")
        : null}
   
    </>
  );
};

export default MoreDetailsForAccount;
