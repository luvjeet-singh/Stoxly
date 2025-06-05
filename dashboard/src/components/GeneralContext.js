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
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      window.location.href = "http://localhost:3001";
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
