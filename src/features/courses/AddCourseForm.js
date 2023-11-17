import { useDispatch } from "react-redux";
import { addNewCourse } from "./coursesSlice";
import { useState } from "react";
import { FETCH_STATUS } from "../../utils";
import "./styles/add-course-form.scss";

const AddCourseForm = () => {
  const dispatch = useDispatch();
  const { IDLE, SUCCEEDED, LOADING } = FETCH_STATUS;
  const [addRequestStatus, setAddRequestStatus] = useState(IDLE);
  const [succeededAdded, setSucceededAdded] = useState(false);

  const canSave = (values) =>
    Object.values(values).every(Boolean) && addRequestStatus === IDLE;

  const saveCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());

    if (!canSave(Object.values(formattedData))) return;

    try {
      setAddRequestStatus(LOADING);
      dispatch(addNewCourse({ ...formattedData })).unwrap();
      setSucceededAdded(true);
      e.target.reset();
    } catch (error) {
      console.error("Failed to save the course: ", error);
    } finally {
      setAddRequestStatus(IDLE);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 ">
        <form
          className="contact_form"
          name="contact_form"
          onSubmit={saveCourse}
        >
          <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
            <div className="card-body d-block">
              {succeededAdded && (
                <div className="col-12  text-center font-xsss fw-700 p-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-4 mr-1">
                  <span>Curso agregado con éxito!</span>
                </div>
              )}
              <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                Información del curso
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Título
                    </label>
                    <input
                      name="title"
                      className="form-control form_control"
                      type="text"
                      placeholder="Título"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Categoría
                    </label>
                    <input
                      name="category"
                      className="form-control form_control"
                      type="text"
                      placeholder="Categoría"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Duración del curso
                    </label>
                    <input
                      name="duration"
                      className="form-control form_control"
                      type="text"
                      placeholder="Duración (Semanas)"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Frecuencia
                    </label>
                    <input
                      name="frecuency"
                      className="form-control form_control"
                      type="text"
                      placeholder="Ej: 1 vez por semana"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Tipo de curso
                    </label>
                    <input
                      name="type"
                      className="form-control form_control"
                      type="text"
                      placeholder="Individual o grupal"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Descripción
                    </label>
                    <textarea
                      name="description"
                      className="form-control h150"
                      rows="6"
                      placeholder="Descripción del curso"
                    ></textarea>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Requisitos
                    </label>
                    <textarea
                      name="requirements"
                      className="form-control h150"
                      rows="6"
                      placeholder="Requisitos del curso"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
            <div className="card-body d-block">
              <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                Subir imagen
              </h4>
              <div className="form-group mb30">
                <div className="input-file-container">
                  <input
                    name="course-image"
                    className="upload-file-input"
                    type="file"
                    id="course-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0 p-4 mt-3 rounded-10 admin-form">
            <div className="card-body d-block">
              <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                Precio
              </h4>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Precio
                    </label>
                    <input
                      name="price"
                      className="form-control form_control"
                      type="text"
                      placeholder="($)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card align-items-center border-0 p-4 mt-3 rounded-10 admin-form">
            <button className="col-md-6 form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
