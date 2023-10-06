import { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchCourses, selectAllCourses } from "./coursesSlice";
import { BREAKPOIN_SMALL } from "../../utils";

const MyCoursesList = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);
  const coursesStatus = useSelector((state) => state.courses.status);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpenCourseModal, setIsOpenCourseModal] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOIN_SMALL);

  const onResizeScrren = () => {
    setIsMobile(window.innerWidth < BREAKPOIN_SMALL);
  };

  window.addEventListener("resize", () => onResizeScrren());

  const openModalForSelectedCourse = (course) => {
    setSelectedCourse(course);
    setIsOpenCourseModal(true);
  };

  const closeCourseModal = () => setIsOpenCourseModal(false);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [coursesStatus, dispatch]);

  return (
    <>
      {courseData &&
        courseData.map((value) => (
          <Fragment key={value.id}>
            {!isMobile ? (
              <tr className="my-course-line desktop-view">
                <td className="product-thumbnail text-start ps-0">
                  <Link to={`/edit-course/${value.id}`} className="small-icon">
                    <img
                      src="/assets/images/course-default.avif"
                      alt="product"
                      className="d-inline-block p-0 bg-greylight rounded-lg overflow-hidden course-image"
                    />
                  </Link>
                </td>

                <td>
                  <b>{value.title}</b>
                </td>

                <td>
                  $ <b>{value.price}</b>
                </td>
                <td>
                  <span
                    className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                  >
                    {value.category}
                  </span>
                </td>
                <td>
                  <b>{value.frequency}</b>
                </td>
                <td className="product-remove text-right">
                  <Button className="bg-transparent border-0 pr-0 course-action">
                    <Link to={`/edit-course/${value.id}`}>
                      <i className="feather-edit mr-1 font-xs text-grey-500"></i>
                      <span className="button-legend">Editar</span>
                    </Link>
                  </Button>
                  <Button className="bg-transparent border-0 course-action">
                    <i className="ti-trash  font-xs text-danger"></i>
                    <span className="button-legend">Eliminar</span>
                  </Button>
                </td>
              </tr>
            ) : (
              <div
                className="my-course-line mobile-view course-row"
                onClick={() => openModalForSelectedCourse(value)}
              >
                <div className="product-thumbnail text-start ps-0 course-image-container">
                  <img
                    src="/assets/images/course-default.avif"
                    alt="product"
                    className="d-inline-block p-0 bg-greylight rounded-lg overflow-hidden course-image"
                  />
                </div>

                <div className="course-title-container">
                  <b>{value.title}</b>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      {isOpenCourseModal && (
        <div className="course-data-overlay">
          <div className="course-data-modal p-4 rounded-lg">
            <div className="close-btn" onClick={closeCourseModal}>
              <i className="text-white font-lg text-grey-400 feather-x"></i>
            </div>
            <div className="course-title pt-3">
              <h1 className="text-grey-900 fw-700 mb-3 lh-1 text-center">
                {selectedCourse.title}
              </h1>
            </div>
            <div className="course-modal-body">
              <div>
                <span>Precio: </span>
                <span>
                  <b>$ {selectedCourse.price} </b>
                </span>
              </div>
              <div>
                <span>Categoria: </span>
                <span>
                  <b>{selectedCourse.category} </b>
                </span>
              </div>
              <div>
                <span>Frecuencia: </span>
                <span>
                  <b>{selectedCourse.frequency} </b>
                </span>
              </div>

              <div className="mt-4 actions-container">
                <Button className="col-12 bg-current border-0 action-btn filled-btn">
                  <Link
                    className="text-white"
                    to={`/edit-course/${selectedCourse.id}`}
                  >
                    <span>Editar</span>
                  </Link>
                </Button>
                <Button className="col-12 action-btn outline-btn">
                  <span>Eliminar</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCoursesList;
