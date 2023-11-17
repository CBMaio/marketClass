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

const CourseList = ({ limit = false, queryFilter, selectedCategory }) => {
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
    if (selectedCategory === "all" || !selectedCategory) {
      data = data.filter(({ title }) => title.toLowerCase().includes(filter));
    } else {
      data = data.filter(
        ({ title, category }) =>
          category === selectedCategory && title.toLowerCase().includes(filter)
      );
    }

    setCoursesToShow(data);
  }, [selectedCategory, queryFilter, courseData]);

  return coursesStatus === LOADING ? (
    <div className="pl-3">Cargando...</div>
  ) : !coursesToShow.length ? (
    <div className="pl-3">No se encontraron cursos</div>
  ) : (
    coursesToShow
      .slice(0, limit || coursesToShow.length)
      .map((course) => <CourseCard course={course} key={course.id} />)
  );
};

export default CourseList;
