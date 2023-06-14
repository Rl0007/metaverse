import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import meta_logo from "../Components/meta_logo_3.png";

function Payment_Page() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex justify-content-center pb-5">
              <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                <div
                  className="py-4 d-flex flex-row"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={meta_logo}
                    className="meta_logo"
                    style={{
                      alignItems: "flexend",
                      backgroundColor: "black",
                      // opacity: "20%",
                    }}
                  />
                  {/* <h5>
                    <span className="far fa-check-square pe-2"></span>
                    <b>ELIGIBLE</b> |
                  </h5>
                  <span className="ps-2">Pay</span> */}
                </div>
                {/* <h4 className="text-success">₹ 499</h4> */}
                <h4 style={{ textAlign: "center" }}>Metaverse</h4>
                <div className="d-flex pt-2">
                  <div>
                    <p>
                      <b>
                        Membership balance{" "}
                        <span className="text-success">₹ 0</span>
                      </b>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <p className="text-primary">
                      <i className="fas fa-plus-circle text-primary pe-1"></i>
                      Add membership card
                    </p>
                  </div>
                </div>
                <p>
                  Please note that the estimated delivery time for your order is
                  typically within 10 to 15 days.
                </p>
                <div
                  className="rounded d-flex"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2">ebalance</div>
                  <div className="ms-auto p-2"></div>
                </div>
                <hr />
                <div className="pt-2">
                  <div className="d-flex pb-2">
                    <div>
                      <p>
                        <b>
                          Items :{" "}
                          <span className="text-success">
                            ₹ {location.state.price}
                          </span>
                        </b>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="text-primary">
                        <i className="fas fa-plus-circle text-primary pe-1"></i>
                        Add payment card
                      </p>
                    </div>
                  </div>
                  <p>
                    This is an estimate for the outstanding portion of your
                    order due today. Once the necessary review process is
                    completed, any refunds or balances will automatically
                    reconcile.
                  </p>
                  <form className="pb-3">
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value=""
                          aria-label="..."
                          checked
                        />
                      </div>
                      <div className="rounded border d-flex w-100 p-3 align-items-center">
                        <p className="mb-0">
                          <i className="fab fa-cc-visa fa-lg text-primary pe-2"></i>
                          Visa Debit Card
                        </p>
                        <div className="ms-auto">************3456</div>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div className="d-flex align-items-center pe-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel2"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border d-flex w-100 p-3 align-items-center">
                        <p className="mb-0">
                          <i className="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>
                          Mastercard Office
                        </p>
                        <div className="ms-auto">************1038</div>
                      </div>
                    </div>
                  </form>
                  <input
                    type="button"
                    value="Proceed to payment"
                    className="btn btn-primary btn-block btn-lg"
                  />
                </div>
              </div>

              <div className="col-md-5 col-xl-4 offset-xl-1">
                <div className="py-4 d-flex justify-content-end">
                  <h6
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Cancel and return to website
                  </h6>
                </div>
                <div
                  className="rounded d-flex flex-column p-2"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2 me-3">
                    <h4>Order Recap</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">Items Price</div>
                    <div className="ms-auto">₹ {location.state.price}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">GST</div>
                    <div className="ms-auto">₹ 0.00</div>
                  </div>
                  {/* <div className="p-2 d-flex">
                    <div className="col-8">Coinsurance( 0% )</div>
                    <div className="ms-auto">+ $0.00</div>
                  </div> */}
                  {/* <div className="p-2 d-flex">
                    <div className="col-8">Copayment</div>
                    <div className="ms-auto">+ $40.00</div>
                  </div> */}
                  <div className="border-top px-2 mx-2"></div>
                  {/* <div className="p-2 d-flex pt-3">
                    <div className="col-8">
                      Total Deductible, Coinsurance, and Copay
                    </div> */}
                  {/* <div className="ms-auto">$40.00</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col-8">
                      Maximum out-of-pocket on Insurance Policy (not reached)
                    </div>
                    <div className="ms-auto">$6500.00</div>
                  </div> */}
                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">Delivery charges</div>
                    <div className="ms-auto">
                      <b>₹ 40</b>
                    </div>
                  </div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">Promotions applied</div>
                    <div className="ms-auto">
                      <b>₹ -40</b>
                    </div>
                  </div>
                  {/* <div className="p-2 d-flex">
                    <div className="col-8">
                      {" "}
                      <span className="fa fa-question-circle text-dark"></span>
                    </div>
                    <div className="ms-auto">
                      <b>$71.76</b>
                    </div>
                  </div> */}
                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col-8">
                      <b>Total</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">₹ {location.state.price}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment_Page;
