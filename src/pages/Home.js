import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import { Card } from "react-bootstrap";

import "../scss/pages/home.scss";
import CourseList from "../features/courses/CourseList";

const Home = () => {
  const categoryList = [
    {
      name: "Language",
      img: "assets/images/language.svg",
      description: "Descripción de la categoría 1",
    },
    {
      name: "Graphic Design",
      img: "assets/images/graphic-design.svg",
      description: "Descripción de la categoría 2",
    },
    {
      name: "Content Writing",
      img: "assets/images/content-writing.svg",
      description: "Descripción de la categoría 2",
    },
    {
      name: "Finance",
      img: "assets/images/finance.svg",
      description: "Descripción de la categoría 2",
    },
  ];

  const iconList = [
    {
      title: "Get Certificate",
      des: "Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.",
      icon: "ti-check",
      color: "text-warning",
      bgcolor: "alert-warning",
    },
    {
      title: "Amazing instructor",
      des: "Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.",
      icon: "ti-heart",
      color: "text-secondary",
      bgcolor: "alert-secondary",
    },
    {
      title: "24/7 Supports",
      des: "Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.",
      icon: "feather-box",
      color: "text-success",
      bgcolor: "alert-success",
    },
  ];

  const feedbackList = [
    {
      imageUrl: "student1.jpg",
      name: "Goria Coast",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
    {
      imageUrl: "student2.jpg",
      name: "Thomas Smith",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
    {
      imageUrl: "student3.jpg",
      name: "Hurin Seary",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
    {
      imageUrl: "student1.jpg",
      name: "Goria Coast",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
    {
      imageUrl: "student2.jpg",
      name: "Thomas Smith",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
    {
      imageUrl: "student3.jpg",
      name: "Hurin Seary",
      status: "Digital Marketing Executive",
      des: "Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.",
    },
  ];
  const brandsettings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const feedbacksettings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    autoplay: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Header divclassName="shadow-none" />

      <div className="banner-wrapper bg-after-fluid header-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 order-lg-2 banner-container">
              <img
                src="assets/images/banner-illustration.svg"
                alt="banner"
                className="pt-lg--10 w-100"
              />
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10 xl-p-5">
              <h2 className="display3-size display2-md-size fw-700">
                Find the best perfect Online Course
              </h2>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 aos-init lh-24">
                For only course you need to learn web development
              </h4>
              <div className="form-group mt-lg-5 p-3 border-light border p-2 bg-white rounded-lg">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="/courses-grid"
                      className="w-100 btn font-xssss fw-600 ls-3 banner-btn p-0 border-0 text-uppercase light-btn "
                    >
                      Search Courses
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="/register"
                      className="w-100 btn bg-current text-white font-xssss fw-600 ls-3  p-0 border-0 text-uppercase create-account-btn"
                    >
                      Create an account
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                <b className="text-grey-800">Popular Courses:</b> Designer,
                Developer, PHP, HTML, CSS, SCSS
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-wrapper pt-5 pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="page-title style1 col-xl-6 col-lg-6 col-md-10 text-center mb-5">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                Explore our Course Categories
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dol ad minim veniam, quis
                nostrud exercitation
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...brandsettings} className="slider-element">
                {categoryList.map(({ name, description, img }, index) => (
                  <Card
                    className="card-container text-center"
                    style={{ width: "18rem" }}
                    key={index}
                  >
                    <Card.Img
                      variant="top"
                      src={img}
                      style={{ height: "110px" }}
                    />
                    <Card.Body className="category-card-body">
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="how-to-work pt-lg--5 pb-lg--7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                How to work
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dol ad minim veniam, quis
                nostrud exercitation
              </p>
            </div>
          </div>

          <div className="row">
            {iconList.map((value, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card p-4 border-0 text-center d-block">
                  <i
                    className={`btn-round-xxxl font-xxl position-relative z-index ${value.icon} ${value.color} ${value.bgcolor}`}
                  ></i>
                  <h2 className="font-xs fw-700 text-grey-900 mt-4 mb-2">
                    {value.title}
                  </h2>
                  <p className="fw-500 font-xssss lh-28 text-grey-500">
                    {value.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="how-to-work pb-lg--7 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="page-title style1 col-xl-6 col-lg-6 col-md-10 text-center mb-5">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                Online Popular Course
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dol ad minim veniam, quis
                nostrud exercitation
              </p>
            </div>
          </div>

          <div className="row">
            <CourseList limit={6} />
          </div>

          <div className="row justify-content-center pt-5">
            <a
              href="/courses-grid"
              className="ml-1 mr-1 rounded-lg font-xss border-size-md fw-600 open-font p-3 w200 btn outline-btn"
            >
              Ver todos los cursos
            </a>
          </div>
        </div>
      </div>

      <div className="how-to-work pb-lg--7">
        <div className="container-fluid experience-banner">
          <div className="container row experience-content">
            <div className="experience-box">
              <img src="assets/images/students.png" alt="students icon" />
              <p>260K +</p>
              <p>Worldwide Student</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/experience.png" alt="students icon" />
              <p>24 +</p>
              <p>Years Experience</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/courses.png" alt="students icon" />
              <p>550 +</p>
              <p>Professional Courses</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/reviews.png" alt="students icon" />
              <p>2M +</p>
              <p>Amazing Review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-wrapper pb-5 pt-5 pb-lg--7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left mb-3 pb-0">
              <h2 className="text-grey-800 fw-700 font-xl lh-2">
                Customer love what we do
              </h2>
            </div>

            <div className="col-lg-12 p-0">
              <Slider {...feedbacksettings}>
                {feedbackList.map((value, index) => (
                  <div key={index} className="text-center py-4 px-3">
                    <div className="card w-100 p-3 p-lg-5 text-left border-0 shadow-xss rounded-lg">
                      <div className="card-body pl-0 pt-0">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="user"
                          className="w45 float-left mr-3 rounded-circle"
                          style={{ height: "45px", objectFit: "cover" }}
                        />
                        <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">
                          {value.name}
                        </h4>
                        <h5 className="font-xssss fw-500 mb-1 text-grey-500">
                          {value.status}
                        </h5>
                      </div>
                      <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">
                        {value.des}
                      </p>
                      <div className="star d-block w-100 text-right mt-4 mb-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
