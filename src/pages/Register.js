import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthenticated } from "../features/auth/authSlice";

import "../scss/pages/login-register.scss";

const Register = () => {
  const isAuth = useSelector(isAuthenticated);
  const [userData, setUserData] = useState({});
  const [step, setStep] = useState(0);

  if (isAuth) {
    return <Navigate to="/welcome-admin" />;
  }

  const updateStep = (e, nextStep) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    if (nextStep === 3 && !isValidPassword(data)) {
      return;
    }

    if (nextStep === 3) {
      registerUser();
      return;
    }

    setUserData({ ...userData, ...data });
    setStep(nextStep);
  };

  const isValidPassword = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }

    setUserData({ ...userData, ...data });
    return true;
  };

  const registerUser = () => {
    console.log(userData);
  };

  const togglePw = (elementId) => {
    const element = document.querySelector(`#${elementId}`);
    element.type = element.type === "password" ? "text" : "password";
  };

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
                    <form onSubmit={(e) => updateStep(e, 1)}>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          required
                          type="text"
                          name="name"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Nombre"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          required
                          type="text"
                          name="lastName"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Apellido"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-email text-grey-500 pr-0"></i>
                        <input
                          required
                          type="text"
                          name="email"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu correo"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-face-smile text-grey-500 pr-0"></i>
                        <input
                          required
                          type="number"
                          name="number"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Tu Número"
                        />
                      </div>

                      <div className="col-sm-12 p-0 text-left">
                        <div className="form-group mb-1">
                          <button className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
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
                    </form>
                  </>
                )}

                {/* Second step */}
                {step === 1 && (
                  <>
                    <form onSubmit={(e) => updateStep(e, 2)}>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          required
                          name="qualification"
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Titulo"
                        />
                      </div>
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <textarea
                          name="experience"
                          className="pl-5 form-control text-grey-900 font-xsss fw-600"
                          required
                          rows="2"
                          placeholder="Experiencia Profesional"
                        ></textarea>
                      </div>

                      <div className="col-sm-12 p-0 text-left">
                        <div className="form-group mb-1">
                          <button className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
                            Siguiente
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}

                {/* Third step */}
                {step === 2 && (
                  <>
                    <form onSubmit={(e) => updateStep(e, 3)}>
                      <div className="form-group icon-input mb-3">
                        <input
                          name="password"
                          id="password"
                          type="Password"
                          className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                          placeholder="Contraseña"
                        />
                        <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                        <i
                          onClick={() => togglePw("password")}
                          className="font-sm ti-eye text-grey-500 pr-0 toggle-pw-icon"
                        ></i>
                      </div>
                      <div className="form-group icon-input mb-1">
                        <input
                          name="confirmPassword"
                          id="confirm-password"
                          type="Password"
                          className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                          placeholder="Confirmar Contraseña"
                        />
                        <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                        <i
                          onClick={() => togglePw("confirm-password")}
                          className="font-sm ti-eye text-grey-500 pr-0 toggle-pw-icon"
                        ></i>
                      </div>
                      <div className="col-sm-12 p-0 text-left mt-3">
                        <div className="form-group mb-1">
                          <button className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
                            Registrarme
                          </button>
                        </div>
                      </div>
                    </form>
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
