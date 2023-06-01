import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Select.css";
import CalendarIcon from "../../icon/CalendarIcon";
import HomeArrowDownIcon from "../../icon/HomeArrowDownIcon";

function Select(): JSX.Element {
     const navigate = useNavigate();

     const [startDate, setStartDate] = useState("");
     const [endDate, setEndDate] = useState("");
     const [showDateOverlay, setShowDateOverlay] = useState(false);
     const [displayText, setDisplayText] = useState("");
     const [showSegmentOverlay, setShowSegmentOverlay] = useState(false);
  

     const location = useLocation();

     function toAllCustomers(): void {
          if (!startDate && !endDate) {
               return;
          }
          navigate("/all-customers");


          setShowDateOverlay(false);
     }

     useEffect(() => {
          if (location.pathname === "/") {
               setDisplayText("Segmentation Analysis");
          } else {
               setDisplayText("Customers' Profile");
          }
     }, [location.pathname]);

     function showDisplayText(url: string) {
          navigate(url);
     }



     function ShowInputDateOverlay() {
          return (
               <>
                    <div className="overlay-input-container">
                         <div>
                              <p>Insert date range</p>
                              <div>
                                   <div>
                                        <label htmlFor="">Start Date</label>
                                        <input
                                             type="date"
                                             name=""
                                             id=""
                                             onChange={(e) =>
                                                  setStartDate(e.target.value)
                                             }
                                             value={startDate}
                                        />
                                   </div>
                                   <div>
                                        <label htmlFor="">Start Date</label>
                                        <input
                                             type="date"
                                             name=""
                                             id=""
                                             onChange={(e) =>
                                                  setEndDate(e.target.value)
                                             }
                                             value={endDate}
                                        />
                                   </div>
                              </div>
                              <button
                                   onClick={toAllCustomers}
                                   className={`${
                                        !startDate && !endDate && "inactive-btn"
                                   }`}
                              >
                                   Done
                              </button>
                         </div>
                    </div>
               </>
          );
     }

     return (
          <>
               <div className="select-container">
                    <section>
                         <div
                              onClick={() =>
                                   setShowSegmentOverlay((prev) => !prev)
                              }
                         >
                              <p>{displayText}</p>
                              <HomeArrowDownIcon />
                              {showSegmentOverlay && (
                                   <div>
                                        <div>
                                             <p
                                                  onClick={() =>
                                                       showDisplayText("/")
                                                  }
                                             >
                                                  Segmentation Analysis
                                             </p>
                                             <p
                                                  onClick={() =>
                                                       showDisplayText(
                                                            "/profile"
                                                       )
                                                  }
                                             >
                                                  Customers' Profile
                                             </p>
                                        </div>
                                   </div>
                              )}
                         </div>
                    </section>

                    <div className={`${showSegmentOverlay && 'show-date'}`}>
                         <p>Loan Data Period </p>
                         <CalendarIcon
                              handleClick={() =>
                                   setShowDateOverlay((prev) => !prev)
                              }
                         />
                         {showDateOverlay && <ShowInputDateOverlay />}
                    </div>
               </div>
          </>
     );
}

export default Select;
