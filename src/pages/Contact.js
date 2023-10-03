import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../scss/pages/contact.scss";

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <div className="page-nav bg-lightpurple pt-lg--7 pb-4 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="text-grey-800 fw-700 display3-size mb-3 display4-md-size">
                Get in touch with us{" "}
                <span className="font-xsss text-grey-500 fw-600 d-block mt-3 pl-lg-5 pr-lg-5 lh-28">
                  Ask us a question by email and we will respond within a few
                  days. Ask us a question by email and we will respond within a
                  few days.{" "}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-wrapp pb-lg--10 pb-5 bg-lightpurple pt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative top-0">
                <h1 className="text-grey-900 fw-700 display3-size mb-5 lh-1">
                  Comments
                </h1>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control style2-input bg-color-none text-grey-700"
                          defaultValue="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control style2-input bg-color-none text-grey-700"
                          defaultValue="Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-3 md-mb-2">
                        <textarea className="w-100 h125 style2-textarea p-3 form-control">
                          Message
                        </textarea>
                      </div>
                      <div className="form-check text-left mt-3 float-left md-mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input mt-2"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label font-xsss text-grey-500 fw-500"
                          htmlFor="exampleCheck1"
                        >
                          I agree to the term of this{" "}
                          <a href="/contact" className="text-grey-600 fw-600">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <div className="form-group">
                        <a
                          href="/contact"
                          className="rounded-lg style1-input float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175"
                        >
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
