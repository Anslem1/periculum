import React from "react";
import ReportComponent from "../Components/ReportComponent";

import "./CustomersReport.css";
import Periculum from "../../../icon/Periculum";

import SettingIconBlack from "../../../icon/SettingIconBlack";
function CustomersReport() {
     return (
          <>
               <div className="report-component-container">
                    <div className="sidebar-report-container">
                         <div className="report-component-sidebar">
                              <div>
                                   
                              </div>
                         </div>
                         <div>
                              <ReportComponent
                                   header="Customers' Report"
                                   bankProfileHeaderClassName="customers-report-page"
                                   bankDataContainer="customers-report-bank-data-page"
                              />
                         </div>
                    </div>
               </div>
          </>
     );
}

export default CustomersReport;
