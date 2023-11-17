import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FETCH_STATUS } from "../../utils";

import { courseUpdated, selectCourseById } from "./coursesSlice";

import "./styles/add-course-form.scss";
import { CustomAlert } from "../../components/CustomAlert";

const EditCourseForm = () => {
  const { courseId } = useParams();
  const { IDLE, SUCCEEDED, LOADING } = FETCH_STATUS;
  const course = useSelector((state) => selectCourseById(state, courseId));

  const [title, setTile] = useState(course?.title || "");
  const [description, setDescription] = useState(course?.description || "");
  const [succeededEdit, setSucceededEdit] = useState(false);

  const dispath = useDispatch();
  const navigate = useNavigate();

  const saveCourse = () => {
    if (title && description) {
      dispath(
        courseUpdated({
          id: courseId,
          title,
          description,
        })
      );
      setSucceededEdit(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <form
          className="contact_form"
          name="contact_form"
          onSubmit={saveCourse}
        >
          <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
            <div className="card-body d-block">
              {succeededEdit && (
                <CustomAlert isSuccess={true} text="Curso editado con éxito!" />
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      name="form_name"
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

export default EditCourseForm;
