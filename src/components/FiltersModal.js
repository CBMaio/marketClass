import { Link } from "react-router-dom";
import { categories } from "../utils";

import "../scss/components/custom-modal.scss";
import "../scss/components/filters-modal.scss";

const FiltersModal = ({ handleModal, setFilters }) => {
  const closeModal = () => handleModal(false);
  const filterCategories = categories;

  const setSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());
    setFilters(formattedData);
    closeModal();
  };
  return (
    <div className="custom-modal filters-modal">
      <div className="col-8 contact-wrap bg-white shadow-lg rounded-lg position-relative top-0 modal-content">
        <div className="close-btn" onClick={closeModal}>
          x
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={setSearch}>
              <div className="mb-3 md-mb-2">
                <div className="w-100 p-3 modal-description">
                  <div className="filters-btn-container">
                    <div className="form-group icon-input mb-0">
                      <i className="ti-package font-xs text-grey-400"></i>
                      <select
                        name="category"
                        className="style1-select bg-transparent border-0 pl-5"
                      >
                        <option>Categoría</option>
                        {filterCategories.map(({ id, name }) => (
                          <option key={id} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group icon-input mb-0">
                      <i className="ti-package font-xs text-grey-400"></i>
                      <select
                        name="type"
                        className="style1-select bg-transparent border-0 pl-5"
                      >
                        <option>Tipo de clase</option>
                        <option value={"individual"}>Individual</option>
                        <option value={"grupal"}>Grupal</option>
                      </select>
                    </div>
                    <div className="form-group icon-input mb-0">
                      <i className="ti-package font-xs text-grey-400"></i>
                      <select
                        name="frequency"
                        className="style1-select bg-transparent border-0 pl-5"
                      >
                        <option>Frecuencia</option>
                        <option>Unica</option>
                        <option>Semanal</option>
                        <option>Mensual</option>
                      </select>
                    </div>
                    <div className="form-group icon-input mb-0">
                      <i className="ti-package font-xs text-grey-400"></i>
                      <select
                        name="ranking"
                        className="style1-select bg-transparent border-0 pl-5"
                      >
                        <option>Calificación</option>
                        <option>1 Estrella</option>
                        <option>2 Estrellas</option>
                        <option>3 Estrellas</option>
                        <option>4 Estrellas</option>
                        <option>5 Estrellas</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group mb-0">
                <button
                  type="submit"
                  className="m-auto rounded-lg style1-input mb-0 bg-current text-white text-center font-xss fw-500 border-0 p-0 w175"
                >
                  Aplicar filtros
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
