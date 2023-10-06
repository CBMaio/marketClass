import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { selectAllCourses, fetchCourses } from "./coursesSlice";
import { fetchAuthors } from "../authors/authorsSlice";
import CourseCard from "../../components/CourseCard";

const CourseList = ({ limit = false, queryFilter, selectedCategory }) => {
  const [coursesToShow, setCoursesToShow] = useState([]);
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);

  const coursesStatus = useSelector((state) => state.courses.status);
  const authorsStatus = useSelector((state) => state.authors.status);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }

    if (authorsStatus === "idle") {
      dispatch(fetchAuthors());
    }
  }, [coursesStatus, authorsStatus, dispatch]);

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

  return !coursesToShow.length ? (
    <div className="pl-3">No se encontraron cursos</div>
  ) : (
    coursesToShow
      .slice(0, limit || coursesToShow.length)
      .map((course) => <CourseCard course={course} key={course.id} />)
  );
};

export default CourseList;
