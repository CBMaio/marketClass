import React, { Fragment } from "react";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";

import "../scss/pages/welcome-admin.scss";

const WelcomeAdmin = () => {
  return (
    <Fragment>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <main className="main-section container px-3 py-4">
              <h1>
                Bienvenido,
                <br /> User!
              </h1>
              <div className="row">
                <div className="illustration-container">
                  <img
                    src="/assets/images/welcome-admin.svg"
                    alt="welcome illustration"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WelcomeAdmin;
