import React from "react";
import ReportComponent from "../Components/ReportComponent";

function Allcustomers() {
     return (
          <>
               <ReportComponent
                    header={"All Customers"}
                    bankProfileHeaderClassName="all-customers-page"
                    bankDataContainer="all-customers-bank-data-page"
               />
          </>
     );
}

export default Allcustomers;
