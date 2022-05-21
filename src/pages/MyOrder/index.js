import React from "react";
import "./index.css";
import search from "../../components/images/search.svg";
import { jobListCreatedupdate 
  } from "../../redux/whomToDeliver/Action";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../../components/loader';
import Navbar from "../../components/navbar";
const MyOrder = () => {

 const dispatch = useDispatch();
 const myOrdereddata = useSelector(store => store.requriedFavouriteUser);
 console.log(myOrdereddata);

 const handleMyOrderCreated =(value)=>{
     dispatch(jobListCreatedupdate(value));
 
     
 }

  return (
    <>
    <Loader size="40px" color="blue" visible={myOrdereddata.isRequest} />
      <Navbar />
      <div className="my_order_content">
        <div className="my-order-heading">
          <h1>My Orders</h1>
        </div> 

        <div className="conatainer-of-serachbar">
          <div className="search-icon-inputField">
            <div className="search_icon_conatiner">
              <img src={search} alt="" />
            </div>
            <div style={{ width: "100%" }}>
              <input type="text" className="inputField" placeholder="Search" />
            </div>
          </div>
          <div className="searchbar-button">
            <div>
              <select
                className="filter-by-status"
                name="filter-by-status"
                id="filter-by-status"
                onChange={handleMyOrderCreated(this.value)} 
                
              >
                <option value="Filter by Status">Filter by Status</option>
                <option value="Created" >Created</option>
                <option value="Failed">Failed</option>
                <option value="Paid">Paid</option>
                <option value="ongoing">Ongoing</option>
                <option value="Canceled">Canceled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <select
                className="newest-to-oldest"
                name="newest-to-oldest"
                id="newest-to-oldest"
              >
                <option value="Newest to Oldest">Newest to Oldest</option>
                <option value="Oldest to Newest">Oldest to Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
