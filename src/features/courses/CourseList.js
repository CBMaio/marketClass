import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import {
  selectAllCourses,
  fetchCourses,
  getCoursesStatus,
} from "./coursesSlice";
import { fetchAuthors } from "../authors/authorsSlice";
import CourseCard from "../../components/CourseCard";
import { FETCH_STATUS } from "../../utils";

const CourseList = ({ limit = false, queryFilter, filterSelected }) => {
  const { LOADING, SUCCEEDED, IDLE } = FETCH_STATUS;
  const dispatch = useDispatch();
  const [coursesToShow, setCoursesToShow] = useState([]);
  const courseData = useSelector(selectAllCourses);
  const coursesStatus = useSelector(getCoursesStatus);

  const authorsStatus = useSelector((state) => state.authors.status);

  useEffect(() => {
    if (coursesStatus === IDLE) {
      dispatch(fetchCourses());
    }

    if (authorsStatus === IDLE) {
      dispatch(fetchAuthors());
    }
  }, [coursesStatus, authorsStatus, dispatch, IDLE]);

  useEffect(() => {
    let data = courseData;
    const filter = queryFilter?.toLowerCase() || "";
    // const filters = Object.entries(filterSelected || {});
    // filterByItems(data, filters);

    data = data.filter(({ title }) => title.toLowerCase().includes(filter));

    setCoursesToShow(data);
  }, [queryFilter, courseData]);

  // const filterByItems = (data, filters) => {
  //   const newData = data.map((course) => {});
  // };

  return coursesStatus === LOADING ? (
    <div className="pl-3">Cargando...</div>
  ) : !coursesToShow.length ? (
    <div className="pl-3">No se encontraron cursos</div>
  ) : (
    coursesToShow
      .slice(0, limit || coursesToShow.length)
      .map((course) => <CourseCard key={course._id} course={course} />)
  );
};

export default CourseList;
