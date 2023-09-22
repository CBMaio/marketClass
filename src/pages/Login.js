import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../scss/pages/login-register.scss";
import "../scss/variables.scss";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrap">
          <div className="row">
            <div
              className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
              style={{
                backgroundImage: `url('assets/images/students.jpg')`,
              }}
            ></div>

            <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
              <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                <div className="card-body rounded-0 text-left">
                  <Link to="/">
                    <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                      MarketClass
                      <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                        El camino hacia el éxito comienza aquí
                      </span>
                    </h1>
                  </Link>
                  <h2 className="fw-700 display1-size display2-md-size mb-3">
                    Login into <br />
                    your account
                  </h2>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control text-grey-900 font-xssss fw-600"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control text-grey-900 font-xssss ls-3"
                        placeholder="Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xssss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                      <a
                        href="/forgot"
                        className="fw-600 font-xssss text-grey-700 mt-1 float-right"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                  </form>

                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <a
                        href="/welcome-admin"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      >
                        Login
                      </a>
                    </div>
                    <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                      Dont have account{" "}
                      <a href="/register" className="link fw-700 ml-1">
                        Register
                      </a>
                    </h6>
                  </div>
                  <div className="col-sm-12 p-0 text-center mt-2">
                    <h6 className="mb-0 d-inline-block bg-white fw-500 font-xssss text-grey-500 mb-3">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="form-group mb-1">
                      <a
                        href="/login"
                        className="form-control text-left style2-input fw-600 white-btn p-0 mb-2"
                      >
                        <div className="btn-content">
                          <div className="btn-img-container">
                            <img
                              src="assets/images/google-icon.svg"
                              alt="icon"
                              className="w40 "
                            />
                          </div>{" "}
                          <span>Sign in with Google</span>
                        </div>
                      </a>
                    </div>
                    <div className="form-group mb-1">
                      <a
                        href="/login"
                        className="form-control text-left style2-input white-btn fw-600 p-0 "
                      >
                        <div className="btn-content">
                          <div className="btn-img-container">
                            <img
                              src="assets/images/facebook-icon.svg"
                              alt="icon"
                              className="w40"
                            />
                          </div>{" "}
                          <span>Sign in with Facebook</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
