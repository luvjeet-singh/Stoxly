import React, { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import axios from "axios";

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [user, setUser] = useState(null);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const logout = async () => {
    const backendURL =
      process.env.NODE_ENV === "production"
        ? "https://stoxly-backend.onrender.com"
        : "http://localhost:3002";

    const redirectURL =
      process.env.NODE_ENV === "production"
        ? "https://stoxly.onrender.com"
        : "http://localhost:3001";

    try {
      await axios.post(`${backendURL}/logout`, {}, { withCredentials: true });
      setUser(null);
      window.location.href = redirectURL;
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        user,
        setUser,
        logout,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};
