import React from "react";
import Link from "@mui/material/Link/Link";
import dashboardImg from "../../asset/image/dashboard.svg";

export default function Home(props) {
    return (
      <div>
          <div className="row">
              <div className="col-xl-6">
                  <div className="card text-white-transparent-7 mb-3 overflow-hidden">
                      <div className="card-img-overlay d-block d-lg-none bg-blue rounded"/>
                      <div className="card-img-overlay d-none d-md-block bg-blue rounded dashboard-first"/>

                      <div className="card-img-overlay d-none d-md-block bottom-0 top-auto">
                          <div className="row">
                              <div className="col-md-8 col-xl-6"/>
                              <div className="col-md-4 col-xl-6 mb-n2">
                                  <img src={dashboardImg}
                                        alt="" className="d-block ml-n3 mb-5 img1"/>
                              </div>
                          </div>
                      </div>
                      <div className="card-body position-relative">
                          <div className="row">
                              <div className="col-md-8">
                                  <div className="d-flex">
                                      <div className="mr-auto">
                                          <div className="mb-1 text-white-transparent-6 text-truncate">
                                          </div>
                                      </div>
                                  </div>

                                  <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                  </hr>


                                  <div className="row">
                                      <div className="col-6 col-lg-5">
                                          <div className="mt-1">
                                              <i className="fa fa-fw fa-shopping-bag fs-28px text-black-transparent-5"/>
                                          </div>
                                          <div className="mt-1">
                                              <div>Soft piracy</div>
                                          </div>
                                      </div>
                                      <div className="col-6 col-lg-5">
                                          <div className="mt-1">
                                              <i className="fa fa-fw fa-retweet fs-28px text-black-transparent-5"/>
                                          </div>
                                          <div className="mt-1">
                                          </div>
                                      </div>
                                  </div>

                                  <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                  </hr>
                                  <div className="mt-3 mb-2">
                                      <Link to={"/"}
                                            className="btn btn-yellow btn-rounded btn-sm pl-5 pr-5 pt-2 pb-2 fs-14px font-weight-600 text-black">
                                          <i className="fa fa-wallet mr-2 ml-n2"/>Go To Anti-Piracy Summary
                                      </Link>
                                  </div>
                                  <div className="fs-12px">
                                      It Takes You To The Anti-Piracy Summary.
                                  </div>
                              </div>

                              <div className="col-md-4 d-none d-md-block block-style"/>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-xl-6">
                  <div className="row">
                      <div className="col-sm-6">
                          <div
                              className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-orange min-height-202">
                              <div className="card-img-overlay mb-n4 mr-n4 d-flex mb-0 mt-auto">
                                  <img src="assets/img/icon/order.svg" alt=""
                                        className="ml-auto d-block mb-n3 max-height-105"/>
                              </div>
                              <div className="card-body position-relative">
                                  <h5 className="text-white-transparent-8 mb-3 fs-16px">Review Analytics</h5>
                                  <div className="progress bg-black-transparent-5 mb-2 height-6">
                                      <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                  </div>
                                  <div>
                                      <div className="text-white-transparent-8 mb-4">
                                          <div className="mb-1 text-white-transparent-6 text-truncate">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div
                              className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-teal min-height-202">
                              <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                  <img src="assets/img/icon/visitor.svg" alt=""
                                        className="ml-auto d-block mb-n3 max-height-105"/>
                              </div>
                              <div className="card-body position-relative">
                                  <h5 className="text-white-transparent-8 mb-3 fs-16px">Review Pannel</h5>
                                  <div className="progress bg-black-transparent-5 mb-2 height-6">
                                      <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                  </div>
                                  <div>
                                      <div className="text-white-transparent-8 mb-4">
                                          <div className="mb-1 text-white-transparent-6 text-truncate">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6">
                          <div
                              className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-pink min-height-202">
                              <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                  <img src="assets/img/icon/email.svg" alt=""
                                        className="ml-auto d-block mb-n3 max-height-105"/>
                              </div>
                              <div className="card-body position-relative">
                                  <h5 className="text-white-transparent-8 mb-3 fs-16px">Notice Analytics</h5>
                                  <div className="progress bg-black-transparent-5 mb-2 height-6">
                                      <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                  </div>

                                  <div>
                                      <div className="text-white-transparent-8 mb-4">
                                          <div className="mb-1 text-white-transparent-6 text-truncate">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-indigo min-height-202">
                              <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                  <img src="assets/img/icon/browser.svg" alt=""
                                        className="ml-auto d-block mb-n3 max-height-105"/>
                              </div>
                              <div className="card-body position-relative">
                                  <h5 className="text-white-transparent-8 mb-3 fs-16px">Notice Pannel</h5>
                                  <div className="progress bg-black-transparent-5 mb-2 height-6">
                                      <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                  </div>
                                  <div>
                                      <div className="text-white-transparent-8 mb-4">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}