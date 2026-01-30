import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);

  const handleBuyClick = () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="windowContainer" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="windowInputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="windowButtons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="windowBtn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link
            to=""
            className="windowBtn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
