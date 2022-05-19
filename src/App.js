import "./App.css";
import SendOtp from "./pages/sendOTP/SendOtp";

import OptVerify from "./pages/otpVerify/OptVerify";
import { Route, Routes } from "react-router-dom";
import CreateAnAccount from "./pages/createAnAccount/CreateAnAccount";
import MoreDetailsForAccount from "./pages/moreDetailsForAccount/MoreDetailsForAccount";
import LoginWithEmail from "./pages/emailLogin";
import HomePage from "./pages/home_page";
import NowDelivery from "./components/nowDelivery";
import WhomToDeliver from "./components/whomToDeliver";
import MyForm from "./components/myForm";
import Toggle from './components/toggleButton';





function App() {
  return (
    <>
  
   
      <Routes>
        <Route path="/" element={<SendOtp />}></Route>
        <Route path="verifyOtp" element={<OptVerify />}></Route>
        <Route path="createAnAccount" element={<CreateAnAccount />}></Route>
        <Route path="moredetails" element={<MoreDetailsForAccount />}></Route>
        <Route path="loginWithEmail" element={<LoginWithEmail/>}></Route>
        <Route path="homepage" element={<HomePage/>}></Route>
        <Route path="whomtodeliver" element={<WhomToDeliver/>}></Route>
       
        <Route path="nowdelivery" element={<NowDelivery/>}></Route>
        <Route path="myForm" element={<MyForm/>}></Route>
        <Route path="toggle" element={<Toggle/>}></Route>
      </Routes>
    </>
  );
}

export default App;
