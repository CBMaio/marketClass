import { useState } from "react";
import { Button } from "react-bootstrap";
import { categories } from "../utils";

const Searcharea = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");

  const searchCourse = () => {
    search(searchQuery, searchCategory);
  };

  return (
    <div
      className="card rounded-xxl p-lg--5 border-0 bg-no-repeat"
      style={{ backgroundColor: `#f3e5f5` }}
    >
      <div className="card-body w-100 p-4">
        <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
          <div className="row">
            <div className="col-lg-5">
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

            <div className="col-lg-4">
              <div className="form-group icon-input mb-0">
                <i className="ti-package font-xs text-grey-400"></i>
                <select
                  className="style1-select bg-transparent border-0 pl-5"
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="all">Ver todo</option>
                  {categories.map(({ id, name }) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
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
