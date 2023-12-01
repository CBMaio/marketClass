import { useDispatch, useSelector } from "react-redux";
import { addNewCourse } from "./coursesSlice";
import { useEffect, useState } from "react";
import { FETCH_STATUS } from "../../utils";
import "./styles/add-course-form.scss";
import { CustomAlert } from "../../components/CustomAlert";
import { fetchCategories } from "../categories/categorySlice";
import { getCategories } from "../categories/categorySlice";
import { convertBase64 } from "../../utils";

const AddCourseForm = () => {
  const dispatch = useDispatch();
  const { IDLE, SUCCEEDED, LOADING } = FETCH_STATUS;
  const [addRequestStatus, setAddRequestStatus] = useState(IDLE);
  const [succeededAdded, setSucceededAdded] = useState(false);
  const categories = useSelector(getCategories);
  const [selectedImage, setSelectedImage] = useState(null);

  const { status: statusCategory } = useSelector((state) => state.category);

  const canSave = (values) =>
    Object.values(values).every(Boolean) && addRequestStatus === IDLE;

  const saveCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());
    let finalData = formattedData;

    if (!canSave(Object.values(formattedData))) return;

    try {
      setAddRequestStatus(LOADING);
      if (selectedImage) {
        finalData = { ...formattedData, image: selectedImage };
      }
      dispatch(addNewCourse({ ...finalData })).unwrap();
      setSucceededAdded(true);
      e.target.reset();
    } catch (error) {
      console.error("Failed to save the course: ", error);
    } finally {
      setAddRequestStatus(IDLE);
      window.scrollTo(0, 0);
    }
  };

  const handleFile = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setSelectedImage(base64);
  };

  useEffect(() => {
    if (statusCategory === IDLE) {
      dispatch(fetchCategories());
    }
  });
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
                <CustomAlert
                  isSuccess={true}
                  text="Curso agregado con éxito!"
                />
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
                    <label className="form-label">Categoría</label>
                    <select
                      name="category"
                      required
                      className="form-control form_control"
                    >
                      {categories.map(({ _id: id, title }) => (
                        <option key={id} value={id}>
                          {" "}
                          {title}
                        </option>
                      ))}
                    </select>
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
                    <label className="form-label">Frecuencia</label>
                    <select
                      name="frequency"
                      required
                      className="form-control form_control"
                    >
                      <option value="unica">Unica</option>
                      <option value="semanal">Semanal</option>
                      <option value="mensual">Mensual</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb30">
                    <label className="form-label">Tipo de curso</label>
                    <select
                      name="type"
                      required
                      className="form-control form_control"
                    >
                      <option value="individual">Individual</option>
                      <option value="grupal">Grupal</option>
                    </select>
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
                    onChange={(event) => handleFile(event)}
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
              {addRequestStatus === LOADING ? "Cargando" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
