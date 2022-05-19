import { LOGIN_REQ, LOGIN_ERROR, LOGIN_SUCCESS} from "./ActionType";
const loginWithUrl = () => {
//   console.log(username, password, "url");
  return `http://3.23.97.12:8000/api/v1/customer/sign-in/phone-number`;
};

export function loginWithDetails(data) {
  console.log(data);
  const {country_code,phone_number,password  } = data
  return (dispatch) => {
    dispatch(loginWithReq());

    const url = loginWithUrl();
    console.log(url, "loginWith");

    fetch(url,{
      method:"POST",
     body:JSON.stringify({
        "country_code":country_code,
        "phone_number":phone_number,
        "password":password
     }),
     headers:{
          "content-type": "application/json",
         
      }
    })
      .then((resp) => resp.json())
      .then((loginDetail) => dispatch(loginWithSuccess(loginDetail)))
      .catch(() => {
        dispatch(loginWithError());
      });
  };
}

function loginWithReq(loginWithData) {
  console.log(loginWithData, "55");
  return {
    type: LOGIN_REQ,
    payload: loginWithData,
  };
}
function loginWithSuccess(loginWithData) {
  console.log(loginWithData, "56");
  return {
    type:LOGIN_SUCCESS ,
    payload: loginWithData,
  };
}
function loginWithError(loginWithData) {
  console.log(loginWithData, "57");
  return {
    type:LOGIN_ERROR  ,
    payload: loginWithData,
  };
}
