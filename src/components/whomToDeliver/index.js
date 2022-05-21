import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import leftArrow from "../../components/images/arrow.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  searchUserDetails,
  PhoneBookDelete,
  favouritrUserDetails,
  PhoneBookupdate,
} from "../../redux/whomToDeliver/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import MyForm from "../../components/myForm";
import Dot from "../../components/images/3dot.png";
import Like from "../../components/images/like.png";
import searchBar from "../../components/images/searchBar.png";
import location from "../../components/images/location.png";
import phone from "../../components/images/phone.png";
import user from "../../components/images/user.png";
import FormForViewDetails from "../../components/myFormForViewDetails";
import Loader from "../../components/loader";

const WhomToDeliver = () => {
  var id = "";
  var idForDot = "";
  var edit = true;

  const notify = () => {
    if (
      searchedData.isSuccess === true &&
      searchedData.phoneBook &&
      searchedData.phoneBook.success === false
    ) {
      toast(searchedData.phoneBook.error.message,{
        autoClose: 2000,
        position: "top-right", 
        theme:"dark"
      });
    } else if (
      searchedData.isSuccess === true &&
      searchedData.phoneBook &&
      searchedData.phoneBook.success === true
    ) {
      toast(searchedData.phoneBook.result.message);
    }
  };

  const deleteNotify = () => {
    if (
      searchedData.isSuccess === true &&
      searchedData.phoneBookDelete &&
      searchedData.phoneBookDelete.success === false
    ) {
      toast(searchedData.phoneBookDelete.error.message);
    } else if (
      searchedData.isSuccess === true &&
      searchedData.phoneBookDelete &&
      searchedData.phoneBookDelete.success === true
    ) {
      toast(searchedData.phoneBookDelete.result.message);
    }
  };

  const deletedUserData = () =>{
    toast('🦄  User deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const [letter, setLetter] = useState("");
  const [showEditFields, setShowEditFields] = useState(false);
  const [popupForm, setPopupForm] = useState(false);
  const [viewUserData, setViewUserData] = useState(false);
  const [EditUSerData, setEditUserData] = useState(false);
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState({});
  const [phonee, setPhonee] = useState({});
  const [email, setEmail] = useState({});
  const [address, setAddress] = useState({});
  const [isdelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFavApi = () => {
    dispatch(favouritrUserDetails());
  };
  const handleEditUserData = (id) => {
    if (EditUSerData === false) {
      setEditUserData(true);
      {
        searchedData.isSuccess === true &&
          searchedData.favData &&
          searchedData.favData.success === true &&
          searchedData.favData.result.map((i) => {
            if (id == i.id) {
              console.log(i.id, "iiiiii");
              setFullName(`${i.full_name}`);
              setAddress(i.address_name);
              setEmail(i.email_id);
              setPhonee(i.phone_number);
              return fullName, address, email, phonee;
            }
          });
      }
    } else {
      setEditUserData(false);
    }
  };

  const handleAddUserForm = () => {
    if (popupForm === false) {
      setPopupForm(true);
    } else {
      setPopupForm(false);
    }
  };

  const handlePopUpEditField = (id) => {
    if (showEditFields === false) {
      setShowEditFields(true);
      localStorage.setItem("idofDot", idForDot);
    } else {
      setShowEditFields(false);
    }
  };

  const searchedData = useSelector((store) => store.requriedFavouriteUser);
  console.log(searchedData, "Searching...");

  const handleSearch = (letter) => {
    // console.log("A", "6565");
    setLetter(letter);
    dispatch(searchUserDetails(letter));
  };

  const handleViewDetails = (id) => {
    if (viewUserData === false) {
      setViewUserData(true);
      {
        searchedData.isSuccess === true &&
          searchedData.favData &&
          searchedData.favData.success === true &&
          searchedData.favData.result.map((i) => {
            if (id == i.id) {
              console.log(i.id, "iiiiii");
              setFullName(`${i.full_name}`);
              setAddress(i.address_name);
              setEmail(i.email_id);
              setPhonee(i.phone_number);
              return fullName, address, email, phonee;
            }
          });
      }
    } else {
      setViewUserData(false);
    }
  };

  //HANDLE UPDATE OF USERDATA

  const handleUpdateOfExistingUserData = () => {
    dispatch(
      PhoneBookupdate({
        full_name: fullName,
        country_code: "+65",
        id: idfordott,
        address_name: address,
        phone_number: phonee,
      })
    );
  };

  const handleBackToHomePAge = () => {
    navigate("/homepage");
  };

  const handleCheckbtn = (id) => {
    console.log("handle check button");
    if (checked == true) {
      setChecked(false);
      console.log(checked);
    } else {
      setChecked(true);
      localStorage.setItem("id", id);
      console.log(checked);
    }
  };
  localStorage.setItem("check", checked);
  // console.log(localStorage.getItem("check"));
  // console.log(localStorage.getItem("id"));

  var idfordelete = localStorage.getItem("id");
  var idfordott = localStorage.getItem("idofDot");
  console.log(idfordott, "dot wali id");
  console.log(typeof idfordott, "type");

  const mydeleteConfirm = () => {
    console.log("called");
    if (isdelete === true) {
      setIsDelete(false);
    } else {
      setIsDelete(true);
    }
  };

  const handleDeleteUserData = (idd) => {
    dispatch(PhoneBookDelete(idd));
    deleteNotify();
    handleFavApi();
    setIsDelete(false);
    setPopupForm(false);
  };
  //form data compnent data
  return (
    <>
      <Loader size="40px" color="blue" visible={searchedData.isRequest} />
      <Navbar />

      <div className="whom_deliver_full_content">
        <div className="arrow_heading">
          <div className="arrow_box">
            <img src={leftArrow} onClick={handleBackToHomePAge} />
          </div>
          <p className="whom_deliver_heading">
            To whom do you want to deliver?
          </p>
        </div>
        <div className="search_bar_button">
          <button className="search_icon">
            <img src={searchBar} className="searchContainer" />
          </button>
          <input type="text" placeholder="Search" className="search_user" />
          <button
            className="add_new_button"
            onClick={() => {
              handleAddUserForm();
             
            }}
          >
            + Add New
          </button>
          <ToastContainer />

          {popupForm ? (
            <div className="popUpForm">
              <MyForm
                closeForm={handleAddUserForm}
                heading="ADD NEW CONTACT"
                button="ADD CONTACT"
                handleFavApi={handleFavApi}
                edit={edit == false}
                notify={notify}
                
                
              />
            </div>
          ) : null}
        </div>
        <div className="middle_content">
          <p className="favourite">Favourite</p>

          {searchedData.isSuccess === true &&
          searchedData.favData &&
          searchedData.favData.success === true ? null : (
            <div className="FavouriteAPIreturnNoData">
              <img src={Like} className="likeContainer-dataNOt-return" />
              <img
                src={Dot}
                className="dotContainer"
                onClick={handlePopUpEditField}
              />
            </div>
          )}
          <div className="editFields">
            {/* Favourite user content */}

            {searchedData.isSuccess === true &&
            searchedData.favData &&
            searchedData.favData.success === true ? (
              <div>
                {searchedData.favData.result.map((element) => {
                  return (
                    <div className="showFavouriteUser">
                      <input
                        type="checkbox"
                        onChange={() => {
                          id = element.id;
                          console.log(id);
                          handleCheckbtn(id);
                        }}
                        className="checkboxbtn"
                      />

                      <div className="middle-content-of-user">
                        <span className="spanDataName">
                          <img
                            src={user}
                            style={{ width: "30px", height: "30px" }}
                          />
                          {element.full_name}
                        </span>
                        <span className="spanDataPhone">
                          <img
                            src={phone}
                            style={{ width: "30px", height: "30px" }}
                          />
                          {element.phone_number}
                        </span>
                        <span className="spanDataAddress">
                          <img
                            src={location}
                            style={{ width: "30px", height: "30px" }}
                          />
                          {element.address_name}
                        </span>
                      </div>

                      <span className="spanDataLogo">
                        <img src={Like} style={{ width: "30px" }} />
                        <img
                          src={Dot}
                          style={{ width: "45px" }}
                          onClick={() => {
                            idForDot = element.id;
                            // console.log(idForDot);
                            handlePopUpEditField(idForDot);
                          }}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {/* break after the favourite content. */}

            {isdelete == true ? (
              <div className="areYouSureBtn">
                <div className="confirmDelete">
                  <p>Are you Sure Your want to delete</p>
                  <button
                    className="yes"
                    onClick={() => {
                      handleDeleteUserData(idfordott);
                     
                      
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="No"
                    onClick={() => {
                      setIsDelete(false);
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
            ) : null}
            {showEditFields === true ? (
              <ul className="list">
                <li
                  className="liItems"
                  onClick={() => {
                    handleViewDetails(idfordott);
                  }}
                >
                  View Details
                </li>
                <li
                  className="liItems"
                  onClick={() => {
                    handleEditUserData(idfordott);
                  }}
                >
                  Edit
                </li>
                <li className="liItems">Set as pickup address</li>
                <li
                  className="liItems"
                  onClick={() => {
                    mydeleteConfirm();
                  
                  }}
                >
                  Delete
                </li>
              </ul>
            ) : null}
            {/* form popup */}

            {viewUserData ? (
              <div className="popUpForm">
                <FormForViewDetails
                  name={fullName}
                  email={email}
                  heading="VIEW CONTACT DETAIL"
                  address={address}
                  phone={phonee}
                  closeForm={handleViewDetails}
                />
              </div>
            ) : null}
            {EditUSerData ? (
              <div className="popUpForm">
                <MyForm
                  name={fullName}
                  email={email}
                  heading="UPDATE CONTACT DETAIL"
                  address={address}
                  phone={phonee}
                  button=" UPDATE CONATACT"
                  closeForm={handleEditUserData}
                  handleUpdateOfExistingUserData={
                    handleUpdateOfExistingUserData
                  }
                  idfordott={idfordott}
                  edit={edit == true}
                />
              </div>
            ) : null}
          </div>
          <div className="alphabet">
            <span
              className="link"
              onClick={() => {
                handleSearch("A");
              }}
            >
              A
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("B");
              }}
            >
              B
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("C");
              }}
            >
              C
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("D");
              }}
            >
              D
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("E");
              }}
            >
              E
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("F");
              }}
            >
              F
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("G");
              }}
            >
              G
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("H");
              }}
            >
              H
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("I");
              }}
            >
              I
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("J");
              }}
            >
              J
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("K");
              }}
            >
              K
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("L");
              }}
            >
              L
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("M");
              }}
            >
              M
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("N");
              }}
            >
              N
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("O");
              }}
            >
              O
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("P");
              }}
            >
              P
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("Q");
              }}
            >
              Q
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("R");
              }}
            >
              R
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("S");
              }}
            >
              S
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("T");
              }}
            >
              T
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("U");
              }}
            >
              U
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("V");
              }}
            >
              V
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("W");
              }}
            >
              W
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("X");
              }}
            >
              X
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("Y");
              }}
            >
              Y
            </span>
            <span
              className="link"
              onClick={() => {
                handleSearch("Z");
              }}
            >
              Z
            </span>
          </div>
          <p>{letter}</p>

          {searchedData &&
          searchedData.isSuccess === true &&
          searchedData.searchData.success === true &&
          searchedData.searchData.result[0] ? (
            <div>
              {searchedData.searchData.result.map((element) => {
                return (
                  <div className="showFavouriteUser">
                    <input type="checkbox" />
                    <span className="spanDataName">
                      <img
                        src={user}
                        style={{ width: "30px", height: "30px" }}
                      />
                      {element.full_name}
                    </span>
                    <span className="spanDataPhone">
                      <img
                        src={phone}
                        style={{ width: "30px", height: "30px" }}
                      />
                      {element.phone_number}
                    </span>

                    <span className="spanDataAddress">
                      <img
                        src={location}
                        style={{ width: "30px", height: "30px" }}
                      />
                      {element.address_name}
                    </span>
                    <span className="spanDataLogo">
                      <img src={Like} style={{ width: "30px" }} />
                      <img src={Dot} style={{ width: "45px" }} />
                    </span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="done_box">
          <button className="done_button" onClick={handleBackToHomePAge}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default WhomToDeliver;
