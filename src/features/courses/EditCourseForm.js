import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { courseUpdated, selectCourseById } from "./coursesSlice";
import { tr } from "date-fns/locale";

const EditCourseForm = () => {
  const { courseId } = useParams();
  const course = useSelector((state) => selectCourseById(state, courseId));

  const [title, setTile] = useState(course?.title || "");
  const [description, setDescription] = useState(course?.description || "");
  const [succeededEdit, setSucceededEdit] = useState(false);

  const dispath = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTile(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

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
        <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
          <div className="card-body d-block">
            {succeededEdit && (
              <div className="col-12  text-center font-xsss fw-700 p-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-4 mr-1">
                <span>Curso editado con éxito!</span>
              </div>
            )}

            <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
              Course Information
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
                      Title
                    </label>
                    <input
                      name="form_name"
                      className="form-control form_control"
                      type="text"
                      required
                      placeholder="Title"
                      value={title}
                      onChange={onTitleChanged}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb30">
                    <label htmlFor="product_sku" className="form-label">
                      Category
                    </label>
                    <input
                      name="form_type"
                      required
                      className="form-control form_control"
                      type="text"
                      placeholder="Type"
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
                      placeholder="Type"
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
                      placeholder="Type"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="form_message"
                      className="form-control h150"
                      required
                      rows="6"
                      placeholder="Course Description *"
                      value={description}
                      onChange={onDescriptionChanged}
                    ></textarea>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="product_sku" className="form-label">
                      Requirements
                    </label>
                    <textarea
                      name="form_message"
                      className="form-control h150"
                      rows="6"
                      placeholder="Course Requirements"
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
              Upload Image
            </h4>
            <div className="form-group mb30">
              <div
                className="file-upload-wrapper"
                data-text="Select your file!"
              >
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
                    Drag and drop or click here
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 p-4 mt-3 rounded-10 admin-form">
          <div className="card-body d-block">
            <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">Price</h4>
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
                      Price
                    </label>
                    <input
                      name="form_name"
                      className="form-control form_control"
                      type="text"
                      placeholder="Price ($)"
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseForm;
