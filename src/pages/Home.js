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
      name: "Programación",
      img: "assets/images/language.svg",
      description: "Domina el arte de la programación con nuestros cursos especializados.",
    },
    {
      name: "Diseño Gráfico",
      img: "assets/images/graphic-design.svg",
      description: "Desarrolla tu creatividad y habilidades visuales con nuestros cursos de diseño gráfico.",
    },
    {
      name: "Ciberseguridad",
      img: "assets/images/content-writing.svg",
      description: "Aprende sobre técnicas de protección y estrategias de seguridad con nuestros cursos.",
    },
    {
      name: "Data Science",
      img: "assets/images/finance.svg",
      description: "Adquiere habilidades en análisis de datos, aprendizaje automático y visualización de datos.",
    },
  ];

  const iconList = [
    {
      title: "Certifícate",
      des: "Obtén reconocimiento por tu aprendizaje con nuestros certificados de finalización de cursos.",
      icon: "ti-check",
      color: "text-warning",
      bgcolor: "alert-warning",
    },
    {
      title: "Excelentes instructores",
      des: "Nuestra plataforma cuenta con instructores altamente calificados y apasionados.",
      icon: "ti-heart",
      color: "text-secondary",
      bgcolor: "alert-secondary",
    },
    {
      title: "Soporte 24/7",
      des: "Nuestro equipo de soporte está disponible para ti en todo momento.",
      icon: "feather-box",
      color: "text-success",
      bgcolor: "alert-success",
    },
  ];

  const feedbackList = [
    {
      imageUrl: "student1.jpg",
      name: "Goria Coast",
      status: "Diseñadora gráfica",
      des: "MarketClass ha sido una revelación para mí. Los cursos son muy completos y están impartidos por expertos en la industria. Aprendí mucho y ahora me siento más segura en el mundo digital.",
    },
    {
      imageUrl: "student2.jpg",
      name: "Thomas Smith",
      status: "Desarrollador de software junior",
      des: "¡Increíble! Los cursos de MarketClass me ayudaron a conseguir un nuevo empleo en el campo de la programación. La plataforma es fácil de usar y las lecciones son muy informativas.",
    },
    {
      imageUrl: "student3.jpg",
      name: "Hurin Seary",
      status: "Analista de datos",
      des: "Me encanta cómo MarketClass simplifica el aprendizaje en tecnología. Las opciones de filtrado me ayudaron a encontrar el curso perfecto para mis necesidades.",
    },
    {
      imageUrl: "student1.jpg",
      name: "Goria Coast",
      status: "Administrador de sistemas",
      des: "Como profesional de TI, siempre estoy en busca de actualizaciones. MarketClass me mantiene al día con las últimas tendencias y herramientas. ¡Muy recomendado!",
    },
    {
      imageUrl: "student2.jpg",
      name: "Thomas Smith",
      status: "Marketing digital",
      des: "MarketClass no solo ofrece cursos de alta calidad, sino que también fomenta la comunidad. He conocido a personas increíbles a través de los foros de discusión.",
    },
    {
      imageUrl: "student3.jpg",
      name: "Hurin Seary",
      status: "Desarrollador web front-end",
      des: "MarketClass es la clave para avanzar en mi carrera de desarrollo web. Los instructores son apasionados y están comprometidos con el éxito de los estudiantes. ¡No puedo esperar para seguir aprendiendo!",
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
                Encuentra el curso online perfecto
              </h2>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 aos-init lh-24">
                Cientos de cursos para comenzar tu camino al éxito
              </h4>
              <div className="form-group mt-lg-5 p-3 border-light border p-2 bg-white rounded-lg">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="/courses-grid"
                      className="w-100 btn font-xssss fw-600 ls-3 banner-btn p-0 border-0 text-uppercase light-btn "
                    >
                      Buscar cursos
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="/register"
                      className="w-100 btn bg-current text-white font-xssss fw-600 ls-3  p-0 border-0 text-uppercase create-account-btn"
                    >
                      Crear una cuenta
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                <b className="text-grey-800">Cursos Populares:</b> Diseño,
                Programación, PHP, HTML, CSS, SCSS
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
                Explorar las distintas categorías
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
              Descubre un mundo de conocimiento al explorar las diversas categorías disponibles en MarketClass. Desde programación hasta análisis de datos y más, encontrarás cursos y recursos que se adaptan a tus intereses y objetivos de aprendizaje.
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
                Aprovecha al máximo nuesta plataforma
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
              En MarketClass, te ofrecemos una experiencia de aprendizaje enriquecedora y flexible, diseñada para impulsar tu éxito en el mundo de la tecnología y la innovación.
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
                Cursos populares online
              </h2>
              <p className="fw-300 font-xsss lh-28 text-grey-500">
              Descubre nuestra selección de cursos en línea altamente demandados. Amplía tus horizontes y adquiere habilidades relevantes con nuestros cursos líderes en el mercado.
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
              <p>Estudiantes en todo el mundo</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/experience.png" alt="students icon" />
              <p>24 +</p>
              <p>Años de experiencia</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/courses.png" alt="students icon" />
              <p>550 +</p>
              <p>Cursos profesionales</p>
            </div>
            <div className="experience-box">
              <img src="assets/images/reviews.png" alt="students icon" />
              <p>2M +</p>
              <p>Reseñas increíbles</p>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-wrapper pb-5 pt-5 pb-lg--7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left mb-3 pb-0">
              <h2 className="text-grey-800 fw-700 font-xl lh-2">
              Nuestros clientes aman lo que hacemos
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
