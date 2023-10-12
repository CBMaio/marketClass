import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../scss/pages/login-register.scss";

const Register = () => {
  const [step, setStep] = useState(0);
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url('assets/images/register.jpg')`,
            }}
          ></div>

          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
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
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Crea tu cuenta <br />
                </h2>
                {/* Fitst step */}
                {step === 0 && (
                  <>
                    <form>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Nombre"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Apellido"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-email text-grey-500 pr-0"></i>
                        <input
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu correo"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-face-smile text-grey-500 pr-0"></i>
                        <input
                          type="number"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Número"
                        />
                      </div>
                    </form>

                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <button
                          href="/register"
                          className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                          onClick={() => setStep(1)}
                        >
                          Siguiente
                        </button>
                      </div>
                      <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                        Ya estas registrado?{" "}
                        <a href="/login" className="link fw-700 ml-1">
                          Iniciar sesión
                        </a>
                      </h6>
                    </div>
                  </>
                )}

                {/* Second step */}
                {step === 1 && (
                  <>
                    <form>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Titulo"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <textarea
                          className="pl-5 form-control text-grey-900 font-xsss fw-600"
                          required
                          rows="2"
                          placeholder="Experiencia Profesional"
                        ></textarea>
                      </div>
                    </form>

                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <button
                          onClick={() => setStep(2)}
                          className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                        >
                          Siguiente
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Third step */}
                {step === 2 && (
                  <>
                    <form>
                      <div className="form-group icon-input mb-3">
                        <input
                          type="Password"
                          className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                          placeholder="Contraseña"
                        />
                        <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                      </div>
                      <div className="form-group icon-input mb-1">
                        <input
                          type="Password"
                          className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                          placeholder="Confirmar Contraseña"
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
                          Acepto los términos y condiciones
                        </label>
                      </div>
                    </form>

                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <a
                          href="/welcome-admin"
                          className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                        >
                          Registrarme
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
