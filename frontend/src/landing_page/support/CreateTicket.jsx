import React from "react";
import {
  PlusCircle,
  PersonCircle,
  RewindCircle,
  Coin,
  CurrencyRupee,
  Circle,
} from "react-bootstrap-icons";

const CreateTicket = () => {
  return (
    <section className="container my-5">
      <div className="row ">
        <div className="col-12 d-block d-lg-none">
          <ul
            className="px-5 py-3 d-flex flex-column gap-3 border-start border-5 border-warning"
            style={{ backgroundColor: "#fdf2e8" }}
          >
            <li>
              <a href="">Surveillance measure on scrips - January 2026 </a>
            </li>

            <li>
              <a href="">Latest Intraday leverages and Square-off timings </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-8">
          <div className="accordion my-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <span className="me-3">
                    <PlusCircle />
                  </span>
                  Account Opening
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li>Resident individual</li>
                    </a>
                    <a href="">
                      <li>Minor</li>
                    </a>
                    <a href="">
                      <li>Non Resident Indian (NRI)</li>
                    </a>
                    <a href="">
                      <li>Company, Partnership, HUF and LLP</li>
                    </a>
                    <a href="">
                      <li>Glossary</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <span className="me-3">
                    <PersonCircle />
                  </span>
                  Your Zerodha Account
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li> Your Profile</li>
                    </a>
                    <a href="">
                      <li> Account modification</li>
                    </a>
                    <a href="">
                      <li>
                        {" "}
                        Client Master Report (CMR) and Depository Participant
                        (DP)
                      </li>
                    </a>
                    <a href="">
                      <li> Nomination</li>
                    </a>
                    <a href="">
                      <li> Transfer and conversion of securities</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <span className="me-3">
                    <RewindCircle />
                  </span>
                  Kite
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li> IPO</li>
                    </a>
                    <a href="">
                      <li> Trading FAQs</li>
                    </a>
                    <a href="">
                      <li> Margin Trading Facility (MTF) and Margins</li>
                    </a>
                    <a href="">
                      <li> Charts and orders</li>
                    </a>
                    <a href="">
                      <li> Alerts and Nudges</li>
                    </a>
                    <a href="">
                      <li> General</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  <span className="me-3">
                    <CurrencyRupee />
                  </span>
                  Funds
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li> Add money</li>
                    </a>
                    <a href="">
                      <li> Withdraw money</li>
                    </a>
                    <a href="">
                      <li> Add bank accounts</li>
                    </a>
                    <a href="">
                      <li> eMandates</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  <span className="me-3">
                    <Circle />
                  </span>
                  Console
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li> Portfolio</li>
                    </a>
                    <a href="">
                      <li> Corporate actions</li>
                    </a>
                    <a href="">
                      <li> Funds statement</li>
                    </a>
                    <a href="">
                      <li> Reports</li>
                    </a>
                    <a href="">
                      <li> Profile</li>
                    </a>
                    <a href="">
                      <li> Segments</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSix"
                >
                  <span className="me-3">
                    <Coin />
                  </span>
                  Coin
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="d-flex flex-column gap-3">
                    <a href="">
                      <li> Mutual funds</li>
                    </a>
                    <a href="">
                      <li> National Pension Scheme (NPS)</li>
                    </a>
                    <a href="">
                      <li> Features on Coin</li>
                    </a>
                    <a href="">
                      <li> Payments and Orders</li>
                    </a>
                    <a href="">
                      <li> General</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 ">
          <div className="row mt-5 mx-2 d-none d-lg-flex ">
            <ul
              className="px-5 py-3 d-flex flex-column gap-3 border-start border-5 border-warning"
              style={{ backgroundColor: "#fdf2e8" }}
            >
              <li>
                <a href="">Surveillance measure on scrips - January 2026 </a>
              </li>

              <li>
                <a href="">Latest Intraday leverages and Square-off timings </a>
              </li>
            </ul>
          </div>
          <div className="row my-3 mx-2">
            <ul class="list-group">
              <li
                class="list-group-item"
                style={{ backgroundColor: "#f6f6f6" }}
              >
                Quick links
              </li>
              <a href="#" class="list-group-item list-group-item-action">
                1. Track account opening
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                2. Track segment activation
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                3. Intraday margins
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                4. Kite user manual
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                5. Learn how to create a ticket
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTicket;
