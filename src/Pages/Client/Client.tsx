import React from "react";
import "./Client.css";
import ArrowDown from "../../icon/ArrowDown";

function Client() {
     return (
          <>
               <div className="client-container">
                    <div className="prop-div"></div>
                    <div>
                         <div className="client-header">
                              <h1>The Agric Client</h1>
                              <span>AGRIC CLIENT</span>
                         </div>

                         <div className="client-average-container">
                              <h1>AVERAGE MONTHLY BALANCE</h1>

                              <div>
                                   <div>
                                        <p>
                                             AVERAGE MONTHLY BALANCE
                                             <span
                                                  style={{
                                                       color: "rgba(64, 123, 255, 1)",
                                                  }}
                                             >
                                                  Ksh 9,526
                                             </span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             AVERAGE MONTHLY CREDIT VALUE
                                             <span
                                                  style={{
                                                       color: "rgba(12, 188, 139, 1)",
                                                  }}
                                             >
                                                  Ksh 2,491
                                             </span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             AVERAGE MONTHLY CREDIT VALUE
                                             <span
                                                  style={{
                                                       color: "rgba(64, 123, 255, 1)",
                                                  }}
                                             >
                                                  30%
                                             </span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="demographic-container">
                              <h1>DEMOGRAPHICS</h1>
                              <div>
                                   <div>
                                        <p>
                                             Polulation Percentage
                                             <span>62 Years</span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             Average Age
                                             <span>62 Years</span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             Gender Domination
                                             <span>60% female</span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             Prominent Account Location
                                             <span>30%</span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="loan-take-container">
                              <h1>LOAN UP TAKE</h1>
                              <div>
                                   <div>
                                        <p>
                                             Normal
                                             <span>80%</span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             Watch
                                             <span>10%</span>
                                        </p>
                                   </div>
                                   <div>
                                        <p>
                                             Non-performing
                                             <span>10%</span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                              <div className="recommendation-container">
                                   <h1>
                                        Recommendation{" "}
                                        <span>
                                             <ArrowDown />
                                        </span>
                                   </h1>
                                   <div>
                                        <ul>
                                             <li>
                                                  Develop a strategy on
                                                  reactivation campaign for the
                                                  dormant clients.
                                             </li>
                                             <li>
                                                  Push digital channels (USSD)
                                                  to clients for credit and
                                                  debit transactions
                                             </li>
                                             <li>
                                                  POS Machines/Merchant Systems
                                                  for cash collection
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                    </div>
                    <div className="prop-div"></div>
               </div>
          </>
     );
}

export default Client;
