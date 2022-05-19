import { combineReducers } from "redux";
import sendOtpReducer from "./sendOtp/ActionReducer";
import verifyOtpReducer from "./verifyOtp/ActionReducer";
import phoneNumberReducer from './phoneNumberSharing/ActionReducer';
import namePasswordReducer from "./namePasswordSharing/ActionReducer";
import loginWithMObileReducer from "./login/ActionReducer";
import fullUserDetailsReducer from './fullDetailsForAccountApI/ActionReducer';
import favouriteUserReducer from "./whomToDeliver/ActionReducer";



export const rootReducer = combineReducers({
  requriedSendOtpData: sendOtpReducer,
  requriedVerifyOtpData: verifyOtpReducer,
  requriedNamePassword : namePasswordReducer,
  requriedPhoneNumber : phoneNumberReducer,
  requriedPhoneLoginData: loginWithMObileReducer,
  requriedAccountCreated : fullUserDetailsReducer,
  requriedFavouriteUser : favouriteUserReducer,
 

});

export default rootReducer;
