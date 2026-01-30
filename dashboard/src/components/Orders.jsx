import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/allOrders`).then((res) => {
      setAllOrders(res.data);
    });
  }, []);
  console.log(allOrders);
  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/dashboard"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price.</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
