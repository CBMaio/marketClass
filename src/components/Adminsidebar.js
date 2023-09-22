import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../scss/components/admin-sidebar.scss";

const Adminsidebar = () => {
  const [displayCourseOptions, setDisplayCouseOptions] = useState(false);

  const toggleCourseOptions = () =>
    setDisplayCouseOptions(!displayCourseOptions);
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark scroll-bar"
      id="accordionSidebar"
    >
      <Link
        to={"/"}
        className="sidebar-brand d-flex align-items-start justify-content-start"
      >
        <span className="d-inline-block fredoka-font ls-3 fw-600 text-success font-xl logo-text mb-0 text-capitalize lh-1">
          MarketClass
        </span>
        <button className="ms-auto mt-2 d-lg-none" id="sidebarClose">
          <i className="ti-close text-white font-sm text-grey-100 "></i>
        </button>
      </Link>

      <li className="nav-item">
        <NavLink className="navi-link" to="/welcome-admin">
          <i className="feather-home mr-2"></i>
          <span>Home</span>
        </NavLink>
      </li>
      <li className="nav-item" onClick={toggleCourseOptions}>
        <div className="navi-link">
          <i className="feather-video mr-2 droupdown-toggle"></i>
          <span>Course</span>
        </div>
        {displayCourseOptions && (
          <ul className="submenu active">
            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-productlist">
                Course List
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="navi-link" to="/admin-productgrid">
                Course grid
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="navi-link" to="/add-course">
                Add Course
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="nav-item">
        <Link to="/admin-venderlist" className="navi-link">
          <i className="feather-slack mr-2"></i>
          <span>Sin publicar</span>
        </Link>
        {/* <ul className="submenu">
          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-venderlist">
              Sin publicar
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-venderview">
              Channel Details
            </NavLink>
          </li>
        </ul> */}
      </li>
      {/* <li className="has-droupdown nav-item">
        <Link to="#" className="navi-link">
          <i className="feather-shopping-bag droupdown-toggle mr-2"></i>
          <span>Order</span>
        </Link>
        <ul className="submenu">
          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-order">
              Order List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-orderview">
              Order Status
            </NavLink>
          </li>
        </ul>
      </li> */}
      {/* <li className="has-droupdown nav-item">
        <Link to="#" className="navi-link">
          <i className="feather-user droupdown-toggle mr-2"></i>
          <span>Customer</span>
        </Link>
        <ul className="submenu">
          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-customer">
              Customer List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navi-link" to="/admin-customerview">
              Customer Details
            </NavLink>
          </li>
        </ul>
      </li> */}
      <li className="nav-item">
        <NavLink className="navi-link" to="/admin-review">
          <i className="feather-message-circle mr-2"></i>
          <span>Comentarios</span>
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink className="navi-link" to="/admin-chat">
          <i className="feather-message-square mr-2"></i>
          <span>Chat</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="navi-link" to="/admin-email">
          <i className="feather-mail mr-2"></i>
          <span>Email</span>
        </NavLink>
      </li> */}

      <div className="sidebar-heading">Authentication</div>

      {/* <li className="nav-item">
        <NavLink className="navi-link" to="/login">
          <i className="feather-award mr-2"></i>
          <span>Login Admin</span>
        </NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink className="navi-link" to="/account-information">
          <i className="feather-user mr-2"></i>
          <span>Cuenta</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="navi-link" to="/forgot">
          <i className="feather-lock mr-2"></i>
          <span>Cambiar contraseña</span>
        </NavLink>
      </li>
      {/* 
      <li className="nav-item">
        <NavLink className="navi-link" to="/notfound">
          <i className="feather-log-out mr-2"></i>
          <span>Verify Password</span>
        </NavLink>
      </li> 

      <div className="mt-3"></div>

      {/* <div className="sidebar-card d-lg-flex mt-auto p-4">
        <p className="text-center mb-3 font-xsss text-grey-100 fw-500">
          Become a <b>pro</b> <br /> Get more <b>features</b>
        </p>
        <NavLink
          to="/admin"
          className="bg-success text-white rounded-xl btn-cart w125 d-inline-block text-center font-xsssss p-3 fw-700 ls-3"
        >
          ANALYTICS
        </NavLink>
      </div> */}
    </ul>
  );
};

export default Adminsidebar;
