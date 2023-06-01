import { useState } from "react";
import { useSelector } from "react-redux";
import formatCompactNumber, { formattedCurrency } from "../../Middleware";

import { RootState } from "../../store";
import "./Profile.css";
import Select from "../../Components/Select/Select";
import CurrencyIcon from "../../icon/CurrencyIcon";
import WalletIcon from "../../icon/WalletIcon";
import ProfileIconBig from "../../icon/ProfileIcon-Big";
import CustomerInfoComponent from "./CustomerInfoComponent";

function Profile() {
     const [showProfileInfo, setShowProfileInfo] = useState<{
          [key: string]: boolean;
     }>({});
     const customersProfile = useSelector(
          (state: RootState) => state.customerProfileData.customersProfileData
     );
     const customersAboutProfileAboutData = useSelector(
          (state: RootState) =>
               state.customerProfileData.customersAboutProfileAboutData
     );

     const handleClick = (header: string) => {
          setShowProfileInfo((prevState) => ({
               ...prevState,
               [header]: !prevState[header],
          }));
     };
     return (
          <>
               <div className="profile-container">
                    <div className="prop-div"></div>
                    <div>
                         <div>
                              <Select />
                         </div>
                         <h1>Overview</h1>
                         <div>
                              {customersProfile.map((customer) => (
                                   <div key={customer.averageMonthlyBalance}>
                                        <p>
                                             <ProfileIconBig />
                                             Total Customers
                                             <span>
                                                  {formatCompactNumber(
                                                       customer.totalCustomers
                                                  )}
                                             </span>
                                        </p>
                                        <p>
                                             <CurrencyIcon />
                                             Total Transaction Value
                                             <span>
                                                  {formatCompactNumber(
                                                       customer.TotalTransacionValue
                                                  )}
                                             </span>
                                        </p>
                                        <p>
                                             <WalletIcon />
                                             Average Monthly Balance
                                             <span>
                                                  {formattedCurrency.format(
                                                       customer.averageMonthlyBalance
                                                  )}
                                             </span>
                                        </p>
                                   </div>
                              ))}
                         </div>

                         <div className="profile-about-container">
                              <h1>PROFILE</h1>
                              <div>
                                   {customersAboutProfileAboutData.map(
                                        (data) => (
                                             <div key={data.status}>
                                                  <CustomerInfoComponent
                                                       showProfileInfo={
                                                            showProfileInfo[
                                                                 "Status"
                                                            ]
                                                       }
                                                       handleClick={handleClick}
                                                       data={data.status}
                                                       header="Status"
                                                       borderStyle="first"
                                                  />
                                                  <CustomerInfoComponent
                                                       showProfileInfo={
                                                            showProfileInfo[
                                                                 "Gender"
                                                            ]
                                                       }
                                                       handleClick={handleClick}
                                                       data={data.gender}
                                                       header="Gender"
                                                  />
                                                  <CustomerInfoComponent
                                                       showProfileInfo={
                                                            showProfileInfo[
                                                                 "Age"
                                                            ]
                                                       }
                                                       handleClick={handleClick}
                                                       data={data.age}
                                                       header="Age"
                                                  />
                                                  <CustomerInfoComponent
                                                       showProfileInfo={
                                                            showProfileInfo[
                                                                 "Loan Uptake"
                                                            ]
                                                       }
                                                       handleClick={handleClick}
                                                       data={data.loanUptake}
                                                       header="Loan Uptake"
                                                  />
                                                  <CustomerInfoComponent
                                                       showProfileInfo={
                                                            showProfileInfo[
                                                                 "Tenure"
                                                            ]
                                                       }
                                                       handleClick={handleClick}
                                                       data={data.tenure}
                                                       header="Tenure"
                                                       borderStyle="last"
                                                  />
                                             </div>
                                        )
                                   )}
                              </div>
                         </div>
                         {/* <div className="prop-div"></div> */}
                    </div>
               </div>
          </>
     );
}

export default Profile;
