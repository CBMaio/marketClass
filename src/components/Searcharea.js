import { useState } from "react";
import { Button } from "react-bootstrap";
import { categories } from "../utils";

import "../scss/components/search-area.scss";

const Searcharea = ({ search, handleModal }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchCourse = () => {
    search(searchQuery);
  };

  const openFiltersModal = () => handleModal(true);

  return (
    <div
      className="card rounded-xxl p-lg--5 border-0 bg-no-repeat search-area"
      style={{ backgroundColor: `#f3e5f5` }}
    >
      <div className="card-body w-100 p-4">
        <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group icon-input mb-0">
                <i className="ti-search font-xs text-grey-400"></i>
                <input
                  type="text"
                  className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent"
                  placeholder="Buscar cursos online..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-5 mb-3 mb-lg-0">
              <button
                onClick={openFiltersModal}
                className="w-100 d-block btn font-xssss fw-600 ls-3 style1-input p-0 text-uppercase outline-btn"
              >
                Ver filtros
              </button>
            </div>
            <div className="col-lg-3">
              <Button
                onClick={searchCourse}
                className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
          <b className="text-grey-800 text-dark">Busquedas populares: </b>
          Diseño, Programación, PHP, HTML, CSS, SCSS
        </h4>
      </div>
    </div>
  );
};

export default Searcharea;
