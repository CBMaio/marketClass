import React, { Fragment } from "react";
import Appfooter from "../components/Appfooter";
import { Link } from "react-router-dom";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";

const Password = () => {
  return (
    <Fragment>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />
            <main className="main-section container px-3 py-4">
              <div className="card col-md-8 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                    Change Password
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-600 font-xssss">
                            Current Password
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-600 font-xssss">
                            Change Password
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-600 font-xssss">
                            Confirm Change Password
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-0">
                        <button className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block border-0">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>

        <Appfooter />
      </div>
    </Fragment>
  );
};

export default Password;
