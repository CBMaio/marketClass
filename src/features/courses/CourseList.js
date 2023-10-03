import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { selectAllCourses, fetchCourses } from "./coursesSlice";
import { fetchAuthors } from "../authors/authorsSlice";
import CourseCard from "../../components/CourseCard";

const CourseList = ({ limit = false }) => {
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

  return (
    courseData &&
    courseData
      .slice(0, limit || courseData.length)
      .map((course) => <CourseCard course={course} key={course.id} />)
  );
};

export default CourseList;
