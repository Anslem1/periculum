import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

import Allcustomers from "./Pages/Report/Pages/Allcustomers";
import CustomersReport from "./Pages/Report/Pages/CustomersReport";
import Profile from "./Pages/Profile/Profile";
import Client from "./Pages/Client/Client";

function App() {
     return (
          <div className="App">
               {<Navbar />}
               {<Sidebar />}
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                         path="/customers-report"
                         element={<CustomersReport />}
                    />
                    <Route path="/all-customers" element={<Allcustomers />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/client" element={<Client />} />
               </Routes>
          </div>
     );
}

export default App;
