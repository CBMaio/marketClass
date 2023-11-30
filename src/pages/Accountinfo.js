import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSlice";
import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";

import "../scss/pages/account-info.scss";

const Accountinfo = () => {
  const userInfo = useSelector(selectUserInfo);
  const updateAccount = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());
    console.log(formattedData);
  };

  return (
    <Fragment>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <main className="main-section container px-3 py-4">
              <div className="card col-md-8 w-100 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                    Detalles de la cuenta
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100">
                        {userInfo.picture && (
                          <img
                            src={userInfo.picture}
                            alt="avater"
                            className="shadow-sm rounded-lg w-100 account-user-img"
                          />
                        )}
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">
                        {userInfo.name}
                      </h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                        {userInfo.degree}
                      </h4>
                    </div>
                  </div>

                  <form onSubmit={updateAccount}>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label
                            htmlFor="name"
                            className="mont-font fw-600 font-xsss"
                          >
                            Nombre Completo
                          </label>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            defaultValue={userInfo.name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label
                            htmlFor="email"
                            className="mont-font fw-600 font-xsss"
                          >
                            Email
                          </label>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            defaultValue={userInfo.email}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label
                            htmlFor="number"
                            className="mont-font fw-600 font-xsss"
                          >
                            Teléfono
                          </label>
                          <input
                            name="number"
                            type="text"
                            className="form-control"
                            defaultValue={userInfo.number}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label
                            htmlFor="qualifications"
                            className="mont-font fw-600 font-xsss"
                          >
                            Título
                          </label>
                          <input
                            name="qualifications"
                            type="text"
                            className="form-control"
                            defaultValue={userInfo.degree}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Experiencia profesional
                          </label>
                          <input
                            name="experience"
                            type="text"
                            className="form-control"
                            defaultValue={userInfo.experience}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="bg-current border-0 text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block outline-none w-100"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accountinfo;
