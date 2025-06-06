import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const backendURL =
      process.env.NODE_ENV === "production"
        ? "https://stoxly-backend.onrender.com"
        : "http://localhost:3002";
    axios.get(`${backendURL}/allOrders`).then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>

          {allOrders.map((stock, index) => {
            const total = stock.price * stock.qty;
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{total.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
