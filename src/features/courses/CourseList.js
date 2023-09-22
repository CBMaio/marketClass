import { useSelector } from "react-redux/";
import { Link } from "react-router-dom";

const CourseList = () => {
  const courseData = useSelector((state) => state.courses);

  return (
    courseData &&
    courseData.map((value) => (
      <div
        className="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4"
        key={value.id}
      >
        <div className="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
          <div className="card-image w-100 mb-3">
            <Link
              to={`/course-detail/${value.id}`}
              className="position-relative d-block"
            >
              <img
                src="/assets/images/course-default.avif"
                alt="course"
                className="w-100"
              />
            </Link>
          </div>
          <div className="card-body pt-0">
            <span
              className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
            >
              {value.category}
            </span>
            <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
              <span className="font-xsssss">$</span> {value.price}
            </span>
            <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
              <Link
                to={`/course-detail/${value.id}`}
                className="text-dark text-grey-900"
              >
                {value.name}
              </Link>
            </h4>
            <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
              {value.frequency}
            </h6>
            <div className="memberlist mt-3 mb-2 ml-0 d-block">
              <li className="w-auto">
                <a href="/" className="fw-500 text-grey-500 font-xssss">
                  Profesor: {value.author}
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default CourseList;