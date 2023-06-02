import React from "react";
import "./Navbar.css";
import SettingIcon from "../../icon/SettingIcon";
import { useLocation, useNavigate } from "react-router-dom";
import Periculum from "../../icon/Periculum";

const Navbar: React.FC = () => {
     const location = useLocation();
     const navigate = useNavigate();
     const isClient =
          location.pathname === ("/customers-report" || "/client")
               ? true
               : false;
     return (
          <nav>
               <div>
                    <p
                         onClick={() => navigate("/")}
                         className={`${isClient && "isClient"}`}
                         
                    >
                         {isClient && <Periculum />}
                         {isClient ? "Periculum" : "CREDIT CHART"}
                    </p>

                    <SettingIcon />
               </div>
          </nav>
     );
};

export default Navbar;
