import { useDispatch } from "react-redux";
import { addNewCourse } from "./coursesSlice";
import { useState } from "react";

const AddCourseForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const [succeededAdded, setSucceededAdded] = useState(false);

  const onTitleHandle = (e) => setTitle(e.target.value);
  const onDescriptioneHandle = (e) => setDescription(e.target.value);

  const canSave = () => addRequestStatus === "idle";

  const saveCourse = async () => {
    if (!canSave) return;
    try {
      setAddRequestStatus("loading");
      await dispatch(addNewCourse({ title, description })).unwrap();
      setTitle("");
      setDescription("");
      setSucceededAdded(true);
    } catch (error) {
      console.error("Failed to save the course: ", error);
    } finally {
      setAddRequestStatus("idle");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 ">
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
            <form
              className="contact_form"
              name="contact_form"
              action="#"
              method="post"
              noValidate=""
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Título
                    </label>
                    <input
                      name="form_name"
                      className="form-control form_control"
                      type="text"
                      required
                      placeholder="Título"
                      onChange={onTitleHandle}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Categoría
                    </label>
                    <input
                      name="form_type"
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
                      name="form_type"
                      required
                      className="form-control form_control"
                      type="text"
                      placeholder="Duración"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Frecuencia
                    </label>
                    <input
                      name="form_type"
                      required
                      className="form-control form_control"
                      type="text"
                      placeholder="Frecuencia"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Descripción
                    </label>
                    <textarea
                      name="form_message"
                      className="form-control h150"
                      required
                      rows="6"
                      placeholder="Descripción del curso *"
                      onChange={onDescriptioneHandle}
                    ></textarea>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Requisitos
                    </label>
                    <textarea
                      name="form_message"
                      className="form-control h150"
                      rows="6"
                      placeholder="Requisitos del curso"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
          <div className="card-body d-block">
            <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
              Subir imagen
            </h4>
            <div className="form-group mb30">
              <div className="file-upload-wrapper" data-text="Seleccionar!">
                <input
                  name="file-upload-field"
                  type="file"
                  className="file-upload-field"
                />
                <label
                  htmlFor="file"
                  className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed theme-black-bg"
                >
                  <i className="ti-cloud-down large-icon me-3 d-block"></i>
                  <span className="js-fileName">
                    Suelta una imagen o haz click aquí
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 p-4 mt-3 rounded-10 admin-form">
          <div className="card-body d-block">
            <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">Precio</h4>
            <form
              className="contact_form"
              name="contact_form"
              action="#"
              method="post"
            >
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
            </form>
          </div>
        </div>
        <div className="card align-items-center border-0 p-4 mt-3 rounded-10 admin-form">
          <button
            onClick={saveCourse}
            className="col-md-6 form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
