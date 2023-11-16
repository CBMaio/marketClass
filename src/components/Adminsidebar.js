import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

import "../scss/components/admin-sidebar.scss";

const Adminsidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayCourseOptions, setDisplayCouseOptions] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const toggleCourseOptions = () =>
    setDisplayCouseOptions(!displayCourseOptions);

  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const closeSession = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="toggle-navbar-btn" onClick={toggleNavbar}>
        <button
          className={`border-0 ms-4 bg-transparent mt-0 `}
          onClick={toggleNavbar}
        >
          <i
            className={`text-white font-lg text-grey-400 ${
              isOpenNavbar ? "feather-x" : "feather-menu"
            }`}
          ></i>
        </button>
      </div>
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark scroll-bar admin-sidebar ${
          isOpenNavbar && "is-open"
        }`}
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-start justify-content-start"
        >
          <span className="d-inline-block fredoka-font ls-3 fw-600 font-xl logo-text mb-0 text-capitalize lh-1 aside-title">
            MarketClass
          </span>
          <button className="ms-auto mt-2 d-lg-none" id="sidebarClose">
            <i className="ti-close text-white font-sm text-grey-100 "></i>
          </button>
        </Link>

        <li className="nav-item">
          <NavLink className="navi-link" to="/">
            <span>MarketClass</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navi-link" to="/welcome-admin">
            <i className="feather-home mr-2"></i>
            <span>Inicio</span>
          </NavLink>
        </li>
        <li className="nav-item" onClick={toggleCourseOptions}>
          <div className="navi-link">
            <i className="feather-video mr-2 droupdown-toggle"></i>
            <span>Cursos</span>
          </div>
          {displayCourseOptions && (
            <ul className="submenu active">
              <li className="nav-item">
                <NavLink className="navi-link" to="/admin-productlist">
                  Ver todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navi-link" to="/add-course">
                  Añadir
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/admin-draft-list" className="navi-link">
            <i className="feather-slack mr-2"></i>
            <span>Sin publicar</span>
          </Link>
        </li>

        <li className="nav-item">
          <NavLink className="navi-link" to="/admin-review">
            <i className="feather-message-circle mr-2"></i>
            <span>Comentarios</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navi-link" to="/admin-requests">
            <i className="feather-heart mr-2"></i>
            <span>Contrataciones</span>
          </NavLink>
        </li>

        <div className="sidebar-heading">Mi cuenta</div>

        <li className="nav-item">
          <NavLink className="navi-link" to="/account-information">
            <i className="feather-user mr-2"></i>
            <span>Cuenta</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navi-link" to="/password">
            <i className="feather-lock mr-2"></i>
            <span>Cambiar contraseña</span>
          </NavLink>
        </li>

        <li className="nav-item mobile-item">
          <div onClick={closeSession} className="navi-link">
            <i className="feather-log-out mr-2"></i>
            <span>Salir</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Adminsidebar;
