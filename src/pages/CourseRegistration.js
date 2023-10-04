import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { selectCourseById } from "../features/courses/coursesSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const CourseRegistration = () => {
  const { courseId } = useParams();
  const [submittedForm, setSubmittedForm] = useState(false);
  const [exitMessage, setExitMessage] = useState({
    title: "",
    description: "",
  });

  const selectedCourse = useSelector((state) =>
    selectCourseById(state, courseId)
  );

  console.log(selectedCourse);
  if (!selectedCourse) return <div>Course not found!</div>;

  const sendForm = (e) => {
    e.preventDefault();
    setExitMessage({
      title: "Formulario enviado correctamente",
      description:
        "Muchas gracias por el interes en nuestros cursos. Su mensaje ha sido enviado correctamente. Muy pronto el titular se estará comunicando con usted vía mail! ",
    });
    setSubmittedForm(true);
  };

  return (
    <Fragment>
      {!submittedForm ? (
        <>
          <Header />
          <div className="page-nav pt-lg--7 pb-4 pt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1 className="text-grey-800 fw-700 display3-size mb-3 display4-md-size">
                    Welcome to <br />
                    <span className="text-current">
                      {selectedCourse.title}{" "}
                    </span>
                    <br />
                    course
                    <span className="font-xsss text-grey-500 fw-600 d-block mt-3 pl-lg-5 pr-lg-5 lh-28">
                      Ask us a question by email and we will respond within a
                      few days.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-wrapp pb-lg--10 pb-5 pt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative top-0">
                    <h1 className="text-grey-900 fw-700 display3-size mb-5 lh-1">
                      Contact your teacher
                    </h1>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control style2-input bg-color-none text-grey-700"
                              defaultValue="Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control style2-input bg-color-none text-grey-700"
                              defaultValue="Email"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group mb-3 md-mb-2">
                            <textarea
                              defaultValue="Message"
                              className="w-100 h125 style2-textarea p-3 form-control"
                            />
                          </div>
                          <div className="text-left mt-3 float-left md-mb-2">
                            <div className="font-xsss text-grey-500 fw-500">
                              Gracias por ser parte de{" "}
                              <span className="text-grey-600 fw-600">
                                nuestra comunidad
                              </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              onClick={sendForm}
                              className="rounded-lg style1-input float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175"
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <Modal
          title={exitMessage.title}
          description={exitMessage.description}
        />
      )}
    </Fragment>
  );
};

export default CourseRegistration;
