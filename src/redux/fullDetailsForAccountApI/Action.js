import { MORE_DETAILS_SUCCESS, MORE_DETAILS_ERROR,  MORE_DETAILS_REQ  } from "./ActionType";
  
  const moreDetailsUrl = () => {
    //   console.log(username, password, "url");
    return `http://3.23.97.12:8000/api/v1/customer/sign-up`;
  };
  
  export function getMoreUserDetails(data) {
    console.log(data,"Action.js");
   const {country_code, mobile_Number, email,password,  fname, lname, birth_day, gender, address_name, address_latitude, address_longitude, verificationToken,postal_number} =data

    return (dispatch) => {
      dispatch(moreDetailsReq());
  
      const url = moreDetailsUrl();
      console.log(url, "moreDetails");
  
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          
          "country_code": country_code,
          "phone_number": mobile_Number,
          "email_id":email,
          "password": password,
          "first_name":fname,
          "last_name": lname,
          "birth_day":birth_day,
          "gender":  gender,
          "address_name":  address_name,
          "address_latitude":  address_latitude,
          "address_longitude": address_longitude,
          "verification_token": verificationToken,
          "postal_number":postal_number,
          "city": "Singapore",
          "state": "Singapore",
          "country": "Singapore"
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((moreUserDetail) => dispatch(moreDetailsSuccess(moreUserDetail)))
        .catch(() => {
          dispatch(moreDetailsError());
        });
    };
  }
  
  function moreDetailsReq(moreDetailsData) {
    console.log(moreDetailsData, "55");
    return {
      type: MORE_DETAILS_REQ ,
      payload: moreDetailsData,
    };
  }
  function moreDetailsSuccess(moreDetailsData) {
    console.log(moreDetailsData, "56");
    return {
      type: MORE_DETAILS_SUCCESS,
      payload: moreDetailsData,
    };
  }
  function moreDetailsError(moreDetailsData) {
    console.log(moreDetailsData, "57");
    return {
      type: MORE_DETAILS_ERROR,
      payload: moreDetailsData,
    };
  }
  