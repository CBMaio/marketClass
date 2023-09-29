import React, { Fragment } from "react";
import Header from "../components/Header";
import Upperheader from "../components/Upperheader";
import Footer from "../components/Footer";
import ProviderData from "../features/providers/ProviderData";

const AuthorProfile = () => {
  return (
    <Fragment>
      <Upperheader />
      <Header />
      <ProviderData />

      {/* <div className="course-details pb-lg--7 pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="middle-sidebar-left">
                <div
                  className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-3"
                  style={{
                    backgroundImage: `url("https://via.placeholder.com/1200x500.png")`,
                  }}
                >
                  <div className="card-body p-lg-5 p-4 bg-black-08">
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col-lg-12 pl-xl-5 pt-xl-5">
                        <figure className="avatar ml-0 mb-4 position-relative w100 z-index-1">
                          <img
                            src="/assets/images/user.png"
                            alt="avater"
                            className="float-right p-1 bg-white rounded-circle w-100"
                          />
                        </figure>
                      </div>
                      <div className="col-xl-4 col-lg-6 pl-xl-5 pb-xl-5 pb-3">
                        <h4 className="fw-700 font-md text-white mt-3 mb-1">
                          Hendrix Stamp
                        </h4>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-0">
                          support@gmail.com
                        </span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Desinger
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          PHP
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          HTML5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3 nav nav-tabs profile xs-p-4 d-flex align-items-center justify-content-around product-info-tab border-bottom-0 bg-white shadow-xss rounded-lg"
                >
                  <Tab eventKey="profile" title="Profile">
                    <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-lg-4 p-2">
                      <div className="card-body mb-lg-3 pb-0">
                        <h2 className="fw-400 font-lg d-block">
                          <b>About Me</b>
                          <a
                            href="/default-user-profile"
                            className="float-right"
                          >
                            <i className="feather-edit text-grey-500 font-xs"></i>
                          </a>
                        </h2>
                      </div>
                      <div className="card-body pb-0">
                        <div className="row">
                          <div className="col-xl-12">
                            <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">
                              I have a Business Management degree from Bangalore
                              University and a long time Excel expert. I create
                              professional Excel reports/dashboards for clients
                              and conduct Excel workshops for business
                              professionals. Currently am a freelance motion
                              graphics artist and a Music producer. I like to be
                              productive and creative at work. I like to
                              continuously increase my skills and stay in tuned
                              with the technology industry.
                            </p>
                            <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">
                              I have a Business Management degree from Bangalore
                              University and a long time Excel expert. I create
                              professional Excel reports/dashboards for clients
                              and conduct Excel workshops for business
                              professionals. Currently am a freelance motion
                              graphics artist and a Music producer. I like to be
                              productive and creative at work. I like to
                              continuously increase my skills and stay in tuned
                              with the technology industry.
                            </p>
                            <ul className="d-flex align-items-center mt-2 mb-3 float-left">
                              <li className="mr-2">
                                <a
                                  href="/default-user-profile"
                                  className="btn-round-md bg-facebook"
                                >
                                  <i className="font-xs ti-facebook text-white"></i>
                                </a>
                              </li>
                              <li className="mr-2">
                                <a
                                  href="/default-user-profile"
                                  className="btn-round-md bg-twiiter"
                                >
                                  <i className="font-xs ti-twitter-alt text-white"></i>
                                </a>
                              </li>
                              <li className="mr-2">
                                <a
                                  href="/default-user-profile"
                                  className="btn-round-md bg-linkedin"
                                >
                                  <i className="font-xs ti-linkedin text-white"></i>
                                </a>
                              </li>
                              <li className="mr-2">
                                <a
                                  href="/default-user-profile"
                                  className="btn-round-md bg-instagram"
                                >
                                  <i className="font-xs ti-instagram text-white"></i>
                                </a>
                              </li>
                              <li className="mr-2">
                                <a
                                  href="/default-user-profile"
                                  className="btn-round-md bg-pinterest"
                                >
                                  <i className="font-xs ti-pinterest text-white"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="video" title="VIDEO">
                    <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-lg-4 p-2">
                      <div className="card-body mb-lg-3 pb-0">
                        <h2 className="fw-400 font-lg d-block">
                          My <b>Courses</b>
                          <a
                            href="/default-user-profile"
                            className="float-right"
                          >
                            <i className="feather-edit text-grey-500 font-xs"></i>
                          </a>
                        </h2>
                      </div>
                      <div className="card-body pb-0">
                        <div className="row">
                          {courseList.map((value, index) => (
                            // Strat Single Demo
                            <div
                              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4"
                              key={index}
                            >
                              <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 course-card">
                                <div className="card-image w-100 mb-3">
                                  <Link
                                    to="/course-details"
                                    className="video-bttn position-relative d-block"
                                  >
                                    <img
                                      src={`assets/images/${value.imageUrl}`}
                                      alt="course"
                                      className="w-100"
                                    />
                                  </Link>
                                </div>
                                <div className="card-body pt-0">
                                  <span
                                    className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                                  >
                                    {value.tag}
                                  </span>
                                  <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                                    <span className="font-xsssss">$</span>
                                    {value.price}
                                  </span>
                                  <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                                    <Link
                                      to="/course-details"
                                      className="text-dark text-grey-900"
                                    >
                                      {value.title}
                                    </Link>
                                  </h4>
                                  <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                                    {value.lesson} Lesson
                                  </h6>
                                  <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block"
                                        />
                                      </a>
                                    </li>
                                    <li className="last-member">
                                      <a
                                        href="/"
                                        className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                                      >
                                        +2
                                      </a>
                                    </li>
                                    <li className="pl-4 w-auto">
                                      <a
                                        href="/"
                                        className="fw-500 text-grey-500 font-xssss"
                                      >
                                        Student apply
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            // End Single Demo
                          ))}
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </Fragment>
  );
};

export default AuthorProfile;
