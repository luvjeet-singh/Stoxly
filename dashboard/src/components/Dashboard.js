import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider, GeneralContext } from "./GeneralContext";

const Dashboard = () => {
  const { setUser } = useContext(GeneralContext);

  useEffect(() => {
    const backendURL =
      process.env.NODE_ENV === "production"
        ? "https://stoxly-backend.onrender.com"
        : "http://localhost:3002";

    const redirectURL =
      process.env.NODE_ENV === "production"
        ? "https://stoxly.onrender.com"
        : "http://localhost:3001";

    const verifyToken = async () => {
      try {
        const res = await axios.post(
          `${backendURL}/`,
          {},
          { withCredentials: true }
        );

        if (!res.data.status) {
          setTimeout(() => {
            window.location.href = redirectURL;
          }, 1000); // allow cookie to persist
        } else {
          setUser(res.data.user);
        }
      } catch (err) {
        setTimeout(() => {
          window.location.href = redirectURL;
        }, 1000);
      }
    };

    verifyToken();
  }, [setUser]);

  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
