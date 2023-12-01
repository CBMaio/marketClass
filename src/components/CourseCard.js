import { Link } from "react-router-dom";

import "../scss/components/course-card.scss";

const CourseCard = ({ course = {} }) => {
  const {
    _id: id,
    category,
    status,
    price,
    title,
    frequency,
    author,
    image,
  } = course;

  return (
    <div
      className="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4"
      key={id}
    >
      <div className="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
        <div className="card-image w-100 mb-3">
          <a
            href={`/course-detail/${id}`}
            className="position-relative d-block"
          >
            <img
              src={image || "/assets/images/course-default.avif"}
              alt="course"
              className="w-100"
            />
          </a>
        </div>
        <div className="card-body pt-0">
          <div className="card-body-top">
            <div>
              <span
                className={`font-xsssss fw-700 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${status}`}
              >
                {category?.title}
              </span>
              <span className="font-xss fw-700 pl-3  ls-2 lh-32 d-inline-block float-right">
                <span className="font-xsssss">$</span> {price}
              </span>
            </div>
            <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
              <Link
                to={`/course-detail/${id}`}
                className="text-dark text-grey-900"
              >
                {title}
              </Link>
            </h4>
            <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
              {frequency.toUpperCase()}
            </h6>
            <div className="memberlist mt-3 mb-2 ml-0 d-block">
              <li className="w-auto">
                <Link
                  to={`/author-profile/${author?._id}`}
                  className="fw-500 text-grey-500 font-xssss"
                >
                  Profesor: {author?.name}
                </Link>
              </li>
            </div>
          </div>
          <div className="card-body-bottom">
            <div className="text-center mt-3 mb-2">
              <Link
                to={`/course-registration/${id}`}
                className="w-100 p-1 font-xssss text-uppercase fw-600 rounded-lg float-right register-btn text-center"
              >
                Inscribirme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
