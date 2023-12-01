import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  selectCourseById,
  getCoursesStatus,
  fetchCourses,
} from "./coursesSlice";
import { Rating } from "react-simple-star-rating";
import { FETCH_STATUS } from "../../utils";

import "../../scss/pages/single-course.scss";
import { CustomAlert } from "../../components/CustomAlert";
import { addComment } from "../comments/commentsSlice";

const SingleCoursePage = () => {
  const { LOADING, IDLE } = FETCH_STATUS;
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [rating, setRating] = useState(0);
  const [emptyFields, setEmptyFields] = useState(false);
  const [commentSentSucceeded, setCommentSentSucceeded] = useState(false);

  const coursesStatus = useSelector(getCoursesStatus);
  const course = useSelector((state) => selectCourseById(state, courseId));

  const {
    title,
    author,
    description,
    requirements,
    comments,
    frequency,
    duration,
    price,
    type,
    image,
  } = course || {};

  const handleRating = (rate) => {
    setRating(rate);
  };
  const canSave = (data) => Object.values(data).every(Boolean);

  const sendComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());
    const finalData = {
      ...formattedData,
      rating,
      course: course._id,
    };

    if (!canSave(finalData)) {
      setEmptyFields(true);
      setTimeout(() => {
        setEmptyFields(false);
      }, 1000);
      return;
    }

    dispatch(addComment(finalData));

    window.scrollTo(0, 0);
    setCommentSentSucceeded(true);
    setTimeout(() => {
      setCommentSentSucceeded(false);
    }, 3000);
    e.target.reset();
  };

  useEffect(() => {
    if (coursesStatus === IDLE) {
      dispatch(fetchCourses());
    }
  }, [coursesStatus, IDLE, dispatch]);

  if (coursesStatus === LOADING) {
    return <section>Cargando...</section>;
  } else if (!course) {
    return <section>Course not found!</section>;
  }

  console.log(course);
  return (
    <div className="row">
      {commentSentSucceeded && (
        <CustomAlert
          isSuccess={true}
          text="Comentario enviado correctamente. En caso de ser aprobado podrá verlo en el listado de comentarios"
        />
      )}
      <div className="col-12">
        <div className="col-md-6 card border-0 mb-0 rounded-lg overflow-hidden m-auto">
          <img src={image} alt="course-img" />
        </div>
        <div className="col-6 m-auto align-items-center border-0 pt-4 rounded-10 admin-form">
          <Link
            to={`/course-registration/${course._id}`}
            className="col-12 form-control text-center style2-input text-white fw-600 bg-current border-0 p-0 "
          >
            Inscribirme
          </Link>
        </div>
        <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
          <div className="row">
            <div className="col-10">
              <h2 className="fw-700 font-md d-block lh-4 mb-2">{title}</h2>
              <Link to={`/author-profile/${author._id}`}>
                <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark">
                  {author.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 course-data-container">
          <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 data-title mb-4">
            Información del curso
          </h2>
          <h4 className="font-xssss fw-600 text-grey-600 mb-2 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            {description}
          </h4>
          <h4 className="font-xssss fw-600 text-grey-600 mb-2 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            Este curso será {type}
          </h4>
          <h4 className="font-xssss fw-600 text-grey-600 mb-2 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            Frecuencia: {frequency}
          </h4>
          <h4 className="font-xssss fw-600 text-grey-600 mb-2 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            Duracion: {duration} semanas
          </h4>
          <h4 className="font-xssss fw-600 text-grey-600 mb-5 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            Costo total del curso: ${price}
          </h4>
          <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 data-title mb-4">
            Requisitos
          </h2>
          <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
            <i className="ti-check font-xssss btn-round-xs bg-dark-purple text-white position-absolute left-0 top-5"></i>
            {requirements}
          </h4>
        </div>

        <div className="card w-100 border-0 mt-4 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
          <div className="row">
            <div className="pl-4 mb-4 pr-0">
              <h2 className="display1-size lh-1 m-0 text-grey-900 fw-700">
                {comments?.length
                  ? `${comments.length} Comentarios`
                  : "Aún no hay comentarios"}
              </h2>
            </div>
          </div>

          {course.comments?.map(
            ({ _id: id, name, description, rating, created_at: date }) => (
              <div key={id} className="row mt-2 mb-1">
                <div className="col-10 pl-4">
                  <div className="content">
                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                      {name}
                    </h6>
                    <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                      {/* TODO add comment date */}
                      {/* {new Date(date).toString()} */}
                    </h6>
                    <div className="star d-block w-100 text-left">
                      {Array.from(Array(rating).keys()).map((n) => (
                        <img
                          key={n}
                          src="/assets/images/star.png"
                          alt="star"
                          className="w10"
                        />
                      ))}
                    </div>
                    <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="card w-100 border-0 mt-4 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
          <div className="row">
            <div className="col-12  mb-4">
              <h2 className="lh-1 m-0 text-grey-900 fw-700">
                Agregar un comentario
              </h2>
              <form className="row" onSubmit={sendComment}>
                <div className="col-md-6">
                  <div className="mt-5 form-group mb30">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                      name="name"
                      className="form-control form_control"
                      type="text"
                      required
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-md-5 form-group mb30">
                    <label className="form-label">Puntuación</label>
                    <div className="App">
                      <Rating onClick={handleRating} disableFillHover={true} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Comentario</label>
                    <textarea
                      name="description"
                      className="form-control h150"
                      required
                      rows="6"
                      placeholder="Comentario"
                    ></textarea>
                  </div>
                </div>
                {emptyFields && (
                  <div className="col-12 text-center font-xsss text-danger">
                    <p className="mb-0">
                      Debe seleccionar al menos una estrella
                    </p>
                  </div>
                )}
                <div className="card col-6 m-auto align-items-center border-0 p-4 mt-3 rounded-10 admin-form">
                  <button
                    type="submit"
                    className="col-12 form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
