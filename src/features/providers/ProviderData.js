import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import { selectAllCourses } from "../courses/coursesSlice";
import { selectProviderById } from "./providersSlice";
import CourseCard from "../../components/CourseCard";

const ProviderData = () => {
  const { providerId } = useParams();
  const author = useSelector((state) =>
    selectProviderById(state, Number(providerId))
  );

  const coursesForPrivider = useSelector((state) => {
    const allCourses = selectAllCourses(state);
    return allCourses.filter((course) => `${course.author.id}` === providerId);
  });

  console.log(author);
  console.log(coursesForPrivider);
  if (!author) {
    return <section>Author not found!</section>;
  }

  const { name, email, key, experience, qualifications, interests, image } =
    author;

  return (
    <div className="course-details pb-lg--7 pt-4 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="middle-sidebar-left">
              <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-3">
                <div className="card-body p-lg-5 p-4 bg-black-08">
                  <div className="clearfix"></div>
                  <div className="row">
                    <div className="col-lg-12 pl-xl-5 pt-xl-5">
                      <figure className="avatar ml-0 mb-4 position-relative w100 z-index-1">
                        <img
                          src={`${
                            image || "/assets/images/learn-illustration.svg"
                          }`}
                          alt="avater"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                    </div>
                    <div className="col-xl-4 col-lg-6 pl-xl-5 pb-xl-5 pb-3">
                      <h4 className="fw-700 font-md text-white mt-3 mb-1">
                        {name}
                      </h4>
                      <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-0">
                        {email}
                      </span>
                      <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                      <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                        {key}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 nav nav-tabs profile xs-p-4 d-flex align-items-center justify-content-around product-info-tab border-bottom-0 bg-white shadow-xss rounded-lg"
              >
                <Tab eventKey="profile" title="Profile">
                  <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-lg-4 p-2">
                    <div className="card-body mb-lg-3 pb-0">
                      <h2 className="fw-400 font-lg d-block">
                        <b>About Me</b>
                      </h2>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-xl-12">
                          <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">
                            {experience}
                          </p>
                          <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">
                            {qualifications}
                          </p>
                          <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">
                            {interests}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="video" title="VIDEO">
                  <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-lg-4 p-2">
                    <div className="card-body mb-lg-3 pb-0">
                      <h2 className="fw-400 font-lg d-block">
                        My <b>Courses</b>
                      </h2>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        {coursesForPrivider.map((value) => (
                          <CourseCard course={value} key={value.id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderData;
