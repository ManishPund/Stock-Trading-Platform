import axios from "axios";
import React, { useEffect, useState } from "react";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/allPositions`).then((res) => {
      setAllPositions(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.length === 0 ? (
              <tr>
                <td colSpan={7}>no data</td>
              </tr>
            ) : (
              allPositions.map((position, index) => {
                const currValue = position.price * position.qty;
                const isProfit = currValue - position.avg * position.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = position.isLoss ? "loss" : "profit";
                const profitAndLoss = currValue - position.avg * position.qty;

                return (
                  <tr key={index}>
                    <td>{position.product}</td>
                    <td>{position.name}</td>
                    <td>{position.qty}</td>
                    <td>{position.avg.toFixed(2)}</td>
                    <td>{position.price.toFixed(2)}</td>
                    <td className={profClass}>{profitAndLoss.toFixed(2)}</td>
                    <td className={dayClass}>{position.day}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
