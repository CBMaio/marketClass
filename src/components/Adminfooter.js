import { Link } from "react-router-dom";

const Adminfooter = () => {
  return (
    <div className="lower-footer pb-3">
      <div className="container px-3">
        <div className="row">
          <div className="col-md-6 text-center text-sm-left xs-mb-3">
            <p className="text-grey-500 fw-500 font-xssss mb-0">
              @ Copyright 2021 Todos los derechos reservados.
            </p>
          </div>
          <div className="col-sm-6 text-right">
            <p className="float-right copyright-text text-grey-500 fw-500 font-xssss mb-0">
              Ante cualquier problema,{" "}
              <b>
                <Link className="text-grey-500 " to="/contact">
                  contactanos
                </Link>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminfooter;
