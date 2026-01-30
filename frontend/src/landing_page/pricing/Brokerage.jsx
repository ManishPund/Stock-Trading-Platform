import React from "react";

const Brokerage = () => {
  return (
    <section className="container my-5 p-2 p-lg-5">
      <nav>
        <div
          className="nav nav-underline fs-4 border-bottom "
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active px-2 px-lg-4"
            id="nav-equity-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-equity"
            type="button"
            role="tab"
            aria-controls="#nav-equity"
            aria-selected="true"
          >
            Equity
          </button>
          <button
            className="nav-link px-2 px-lg-4"
            id="nav-currency-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-currency"
            type="button"
            role="tab"
            aria-controls="nav-currency"
            aria-selected="false"
          >
            Currency
          </button>
          <button
            className="nav-link px-2 px-lg-4"
            id="nav-commodity-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-commodity"
            type="button"
            role="tab"
            aria-controls="nav-commodity"
            aria-selected="false"
          >
            Commodity
          </button>
        </div>
      </nav>
      <div className="tab-content py-4 small text-muted" id="nav-tabContent">
        <div
          className="tab-pane fade show active table-responsive "
          id="nav-equity"
          role="tabpanel"
          aria-labelledby="nav-equity-tab"
          tabIndex="0"
        >
          <table
            className="table table-borderless border align-middle"
            style={{ borderCollapse: "separate", borderSpacing: "0 16px" }}
          >
            <thead>
              <tr className="border">
                <td className="border-bottom"></td>
                <td className="border-bottom">Equity Delivery</td>
                <td className="border-bottom">Equity Intraday</td>
                <td className="border-bottom">F&O – Futures</td>
                <td className="border-bottom">F&O – Options</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                <td>Flat ₹20 per executed order</td>
              </tr>

              <tr>
                <td>STT / CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.02% on sell side</td>
                <td>
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>Transaction Charges</td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00173% <br />
                  BSE: 0
                </td>
                <td>
                  NSE: 0.03503% (on premium) <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp Charges</td>
                <td>0.015% or ₹1500 / crore (buy side)</td>
                <td>0.003% or ₹300 / crore (buy side)</td>
                <td>0.002% or ₹200 / crore (buy side)</td>
                <td>0.003% or ₹300 / crore (buy side)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="nav-currency"
          role="tabpanel"
          aria-labelledby="nav-currency-tab"
          tabIndex="0"
        >
          <table
            className="table table-borderless border align-middle"
            style={{ borderCollapse: "separate", borderSpacing: "0 16px" }}
          >
            <thead>
              <tr className="border">
                <td className="border-bottom"></td>
                <td className="border-bottom">Currency Futures</td>
                <td className="border-bottom">Currency Options</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                <td>₹20 per executed order</td>
              </tr>

              <tr>
                <td>STT / CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>

              <tr>
                <td>Transaction Charges</td>
                <td>
                  NSE: 0.00035% <br />
                  BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311% <br />
                  BSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp Charges</td>
                <td>0.0001% or ₹10 / crore (buy side)</td>
                <td>0.0001% or ₹10 / crore (buy side)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="nav-commodity"
          role="tabpanel"
          aria-labelledby="nav-commodity-tab"
          tabIndex="0"
        >
          <table
            className="table table-borderless border align-middle"
            style={{ borderCollapse: "separate", borderSpacing: "0 16px" }}
          >
            <thead>
              <tr className="border">
                <td className="border-bottom"></td>
                <td className="border-bottom">Commodity Futures</td>
                <td className="border-bottom">Commodity Options</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                <td>₹20 per executed order</td>
              </tr>

              <tr>
                <td>STT / CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>

              <tr>
                <td>Transaction Charges</td>
                <td>
                  MCX: 0.0021% <br />
                  NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418% <br />
                  NSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI Charges</td>
                <td>
                  Agri: ₹1 / crore <br />
                  Non-Agri: ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp Charges</td>
                <td>0.002% or ₹200 / crore (buy side)</td>
                <td>0.003% or ₹300 / crore (buy side)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;
