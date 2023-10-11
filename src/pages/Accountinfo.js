import React, { Fragment } from "react";
import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import { Link } from "react-router-dom";

import "../scss/pages/account-info.scss";

const Accountinfo = () => {
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
                        <img
                          src="/assets/images/student3.jpg"
                          alt="avater"
                          className="shadow-sm rounded-lg w-100 account-user-img"
                        />
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">
                        Mariana
                      </h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                        Python Dev
                      </h4>
                    </div>
                  </div>

                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Nombre
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Apellido
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Email
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Teléfono
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            País
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Dirección
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Ciudad
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Código Postal
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="card mt-3 border-0">
                          <div className="card-body d-flex justify-content-between align-items-end p-0">
                            <div className="form-group mb-0 w-100">
                              <input
                                type="file"
                                name="file"
                                id="file"
                                className="input-file"
                              />
                              <label
                                htmlFor="file"
                                className="rounded-lg text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                              >
                                <i className="ti-cloud-down large-icon mr-3 d-block"></i>
                                <span className="js-fileName">
                                  Haz click aquí para modificar
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss">
                          Descripción
                        </label>
                        <textarea
                          className="form-control mb-0 p-3 bg-greylight lh-16"
                          rows="5"
                          placeholder="Escribe tu mensaje..."
                        ></textarea>
                      </div>

                      <div className="col-lg-12">
                        <Link
                          to="/account-information"
                          className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
                        >
                          Guardar
                        </Link>
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
