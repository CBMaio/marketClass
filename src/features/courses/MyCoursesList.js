import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchCourses, selectAllCourses } from "./coursesSlice";

const MyCoursesList = () => {
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
        <tr>
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
              className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
            >
              {value.category}
            </span>
          </td>
          <td>
            <b>{value.frequency}</b>
          </td>
          <td className="product-remove text-right">
            <Link to={`/edit-course/${value.id}`}>
              <i className="feather-edit mr-1 font-xs text-grey-500"></i>
            </Link>
            <Button className="bg-transparent border-0">
              <i className="ti-trash  font-xs text-danger"></i>
            </Button>
          </td>
        </tr>
      </Fragment>
    ))
  );
};

export default MyCoursesList;
