import React, { useState } from "react";
import "./CreateAnAccount.css";
import { useNavigate } from "react-router-dom";
import { getNamePassword } from "../../redux/namePasswordSharing/Action";
import { useSelector, useDispatch } from "react-redux";
import Image from "../../components/Image";
import Loader from "../../components/loader";

const CreateAnAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  const sharedData = useSelector((store) => store.requriedNamePassword);
  //console.log(sharedData, "232323");

  const navigate = useNavigate();

  const handlePassword = () => {
   
    
    if (
      firstName.length != 0 &&
      lastName.length != 0 &&
      password.length != 0 &&
      confirmPassword.length != 0
    ) {
      setAlert("");
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp   = /.{8,}/;
       
      if(!uppercaseRegExp.test(password)){
        
        console.log('uppercase')
        setAlert("Password must include UpperCase Character");
      }
      else if(!lowercaseRegExp.test(password)){
        console.log("lowercase")
        setAlert("Password must include LowerCase Character");
      }
      else if(!digitsRegExp.test(password)){
        console.log("digit");
        setAlert("Password must include digit Character")
      }
      else if(!specialCharRegExp.test(password)){
        console.log("specila character");
        setAlert("Password must include Special Character")
      }
      else if(!minLengthRegExp.test(password)){
        console.log("8");
        setAlert("MiniMun length 8");
      }
      else{
        console.log("hello");
       
        if (password === confirmPassword) {
          setAlert("");
              handledata();
              navigate("/moredetails");
            } else {
              setAlert("* Password and Confirm Password Not matched");
              console.log("unsuccessful");
           }

      }

    //***********dd**** */

      // if(uppercaseRegExp.test(password)){
      //   if(lowercaseRegExp.test(password)){
      //     if(digitsRegExp.test(password)){
      //       if(specialCharRegExp.text(password)){
      //         if(minLengthRegExp.test(password)){
      //           if(password === confirmPassword){
      //             handledata();
      //             navigate("/moredetails")
      //           }
      //           else{
      //             setAlert("* Password and Confirm Password Not matched");
      //             console.log("unsuccessful");
      //           }
      //         }
      //         else{
      //           console.log("mini length")
      //         }
      //       }
      //       else{
      //         console.log("special character not")
      //       }
      //     }
      //   }
      //   else{
      //     console.log("lower case not")
      //   }
      // }
      // else{
      //   console.log("uppercase not")
      // }
      //*************befour logic*************

    //   if (password === confirmPassword) {
    //     handledata();
    //     navigate("/moredetails");
    //   } else {
    //     setAlert("* Password and Confirm Password Not matched");
    //     console.log("unsuccessful");
    //  }
    }
    else {
      console.log("please enter all field");
      setAlert("* Please enter All Details");
    }
  };

  const handledata = () => {
    dispatch(getNamePassword(firstName, lastName, password));
  };
  return (
    <>
      <Loader size="40px" color="green" visible={sharedData.isRequest} />
      <div className="full-content">
        <Image />
        <main className="main-input">
          <h2>Create an Account</h2>
          <div className="input_fields">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              autoComplete="off"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="confirm password"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <p>{alert}</p>
          <button onClick={handlePassword} className="nexts">
            NEXT
          </button>
        </main>
      </div>
    </>
  );
};

export default CreateAnAccount;
