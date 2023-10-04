import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchCourses, selectAllCourses } from "./coursesSlice";

import "../../scss/components/draft-course-list.scss";

const DraftCoursesList = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);
  const coursesStatus = useSelector((state) => state.courses.status);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [coursesStatus, dispatch]);

  return (
    courseData &&
    courseData.map((value) => (
      <Fragment key={value.id}>
        <tr className="draft-course-line">
          <td className="product-thumbnail text-start ps-0">
            <Link to={`/edit-course/${value.id}`} className="small-icon">
              <img
                src="/assets/images/course-default.avif"
                alt="product"
                className="w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden"
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
              className={`font-xsssss fw-700 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
            >
              {value.category}
            </span>
          </td>
          <td className="product-remove text-right">
            <div>
              <Button className="bg-transparent border-0 pr-0 course-action">
                <i className="ti-export mr-1 font-xs text-grey-500" />
                <span className="button-legend">Publicar</span>
              </Button>
              <Button className="bg-transparent border-0 pr-0 course-action">
                <Link to={`/edit-course/${value.id}`}>
                  <i className="feather-edit mr-1 font-xs text-grey-500"></i>
                  <span className="button-legend">Editar</span>
                </Link>
              </Button>
              <Button className="bg-transparent border-0 pr-0 course-action">
                <i className="ti-trash font-xs text-danger"></i>
                <span className="button-legend">Eliminar</span>
              </Button>
            </div>
          </td>
        </tr>
      </Fragment>
    ))
  );
};

export default DraftCoursesList;
