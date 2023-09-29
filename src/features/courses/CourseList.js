import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { selectAllCourses, fetchCourses } from "./coursesSlice";
import { fetchProviders } from "../providers/providersSlice";
import CourseCard from "../../components/CourseCard";

const CourseList = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);

  const coursesStatus = useSelector((state) => state.courses.status);
  const providersStatus = useSelector((state) => state.providers.status);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }

    if (providersStatus === "idle") {
      dispatch(fetchProviders());
    }
  }, [coursesStatus, providersStatus, dispatch]);

  return (
    courseData &&
    courseData.map((course) => <CourseCard course={course} key={course.id} />)
  );
};

export default CourseList;
