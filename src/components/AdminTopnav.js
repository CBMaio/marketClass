import { Link } from "react-router-dom";
import Sidebartoggle from "../components/Sidebartoggle";

import "../scss/components/admin-top-nav.scss";

const AdminTopnav = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-xs ">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1 mr-4">
          <Link to="/admin-review" className="navi-link dropdown-toggle">
            <i className="feather-bell black-icon"></i>
            <span className="badge badge-danger badge-counter">3+</span>
          </Link>
        </li>

        <li className="nav-item dropdown no-arrow">
          <Link to="/account-information" className="navi-link dropdown-toggle">
            <img
              src="/assets/images/student3.jpg"
              alt="user"
              className="w45 mt-n1 rounded-circle user-img"
            />
            <span className="d-none d-lg-inline text-grey-600 fw-700 ml-4 mr-4 font-xssss">
              John Doe
              <i className="font-xsssss d-block text-grey-500 fw-500 black-icon">
                Python Dev
              </i>
            </span>
          </Link>
        </li>

        <li className="nav-item dropdown no-arrow">
          <Link to="/" className="navi-link dropdown-toggle">
            <i className="ms-3 feather-log-out d-none d-lg-block black-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminTopnav;
