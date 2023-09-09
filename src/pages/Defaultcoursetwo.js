import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Accordion } from 'react-bootstrap';

class Defaultcoursetwo extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row">
                  <div className="col-xl-8 col-xxl-9">
                    <div
                      className="card border-0 mb-0 rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url("https://via.placeholder.com/1270x550.png")`,
                      }}
                    >
                      <div className="card-body p-5 bg-black-08">
                        <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                          Python
                        </span>
                        <h2 className="fw-700 font-lg d-block lh-4 mb-1 text-white mt-2">
                          Microsoft Access Development, Design and Advanced
                          Methods Workshop Tutorial
                        </h2>
                        <p className="font-xsss fw-500 text-grey-100 lh-30 pr-5 mt-3 mr-5">
                          ultrices justo eget, sodales orci. Aliquam egestas
                          libero ac turpis pharetra, in vehicula lacus
                          scelerisque. Vestibulum ut sem laoreet, feugiat tellus
                          at, hendrerit arcu.
                        </p>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Developer
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Design
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Developer
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          HTML5
                        </span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Jquery
                        </span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                        <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">
                          Follow Author
                        </span>

                        <div className="clearfix"></div>
                        <div className="star d-block w-100 text-left mt-2">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 float-left"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 float-left"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 float-left"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 float-left"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15 float-left mr-2"
                          />
                        </div>
                        <p className="review-link font-xssss fw-600 text-grey-500 lh-3 mb-4">
                          (456 ratings ) 2 customer review
                        </p>

                        <a
                          href="/default-course-two"
                          className="btn-round-lg ml-3 d-inline-block rounded-lg bg-greylight"
                        >
                          <i className="feather-share-2 font-sm text-grey-700"></i>
                        </a>
                        <a
                          href="/default-course-two"
                          className="btn-round-lg ml-2 d-inline-block rounded-lg bg-danger"
                        >
                          <i className="feather-bookmark font-sm text-white"></i>
                        </a>
                        <a
                          href="/default-course-two"
                          className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200"
                        >
                          Get Course
                        </a>
                      </div>
                    </div>
                    <div className="card d-block border-0 rounded-lg overflow-hidden mt-4">
                      <Accordion
                        defaultActiveKey="0"
                        className="accordian mb-3 accordian-course"
                      >
                        <Accordion.Item
                          eventKey="0"
                          className="accordion-item border-0 mb-3 shadow-xss rounded-sm bg-white"
                        >
                          <Accordion.Header>
                            How do I make a yearly payment?
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                1
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Introduction to the course
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                12:34
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                2
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Enjoyed this a lot and well done.
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                54:22
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                3
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Excel project such as animation with password
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                40:00
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="1"
                          className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                        >
                          <Accordion.Header>
                            People chart infographics Animation
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                1
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Introduction to the course
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                12:34
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                2
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Enjoyed this a lot and well done.
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                54:22
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                3
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Excel project such as animation with password
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                40:00
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="3"
                          className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                        >
                          <Accordion.Header>
                            Development to the Course
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                1
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Introduction to the course
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                12:34
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                2
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Enjoyed this a lot and well done.
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                54:22
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                3
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Excel project such as animation with password
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                40:00
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="4"
                          className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                        >
                          <Accordion.Header>
                            Creating a sliding down menu
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                1
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Introduction to the course
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                12:34
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                2
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Enjoyed this a lot and well done.
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                54:22
                              </span>
                            </div>
                            <div className="card-body d-flex p-2">
                              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                                3
                              </span>
                              <span className="font-xssss fw-500 text-grey-500 ml-2">
                                Excel project such as animation with password
                              </span>
                              <span className="ml-auto font-xssss fw-500 text-grey-500">
                                40:00
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
                      <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">
                        What you'll learn from this lesson
                      </h2>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </h4>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        After completing this course you'll be confident to
                        create any subtle to complex animation that will turn
                        any project a professional work and surely you'll become
                        an awesome developer and designer
                      </h4>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </h4>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        After completing this course you'll be confident to
                        create any subtle to complex animation that will turn
                        any project a professional work and surely you'll become
                        an awesome developer and designer
                      </h4>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </h4>
                      <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                        <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                        After completing this course you'll be confident to
                        create any subtle to complex animation that will turn
                        any project a professional work and surely you'll become
                        an awesome developer and designer
                      </h4>
                    </div>

                    <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
                      <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                        Description
                      </h2>
                      <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                        After creating more than a dozen courses on Microsoft
                        Access databases and programming in VBA, many students
                        have contacted me with discussions on specific problems
                        and scenarios. From these discussions, I have created
                        videos reviewing the details of the most useful
                        techniques that everyone will eventually need. I have
                        made sure that every detail of these techniques is
                        recorded in the videos! BUT you should be somewhat
                        familiar with VBA since there are lots of coding
                        examples in the course. <br /> There are MANY tips and
                        tricks in this workshop that you will not find an ANY of
                        my other courses! <br /> I also include a specific
                        database design challenge from a student and then go
                        over the details of how I would handle it. <br /> If you
                        are willing to take the time to go through this course
                        you could easily be much more productive with Microsoft
                        Access in just a few hours.
                      </p>
                    </div>

                    <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
                      <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                        Requirements
                      </h2>
                      <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                        After creating more than a dozen courses on Microsoft
                        Access databases and programming in VBA, many students
                        have contacted me with discussions on specific problems
                        and scenarios. From these discussions.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-3">
                    <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0 shadow-xss">
                      <div className="card-body p-3 d-block text-left">
                        <h1 className="display1-size text-current fw-700 mb-4">
                          € 49
                          <span className="font-xssss text-grey-500 fw-500">
                            / Lifetime Access
                          </span>
                        </h1>
                        <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-shield font-lg text-current position-absolute left-0"></i>
                          Experience
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            0 - 2 Year
                          </span>
                        </h4>
                        <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-database font-lg text-current position-absolute left-0"></i>
                          Language
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            English, Germen, Spanish
                          </span>
                        </h4>
                        <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-home font-lg text-current position-absolute left-0"></i>
                          Gender
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            Male
                          </span>
                        </h4>
                        <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-shield font-lg text-current position-absolute left-0"></i>
                          Education
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            MBA
                          </span>
                        </h4>
                        <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-flag font-lg text-current position-absolute left-0"></i>
                          Company
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            Github
                          </span>
                        </h4>
                        <h4 className="pl-35 mb-0 font-xsss fw-600 text-grey-900 position-relative">
                          <i className="feather-award font-lg text-current position-absolute left-0"></i>
                          Age
                          <span className="d-block text-grey-500 mt-1 font-xssss">
                            32 Year
                          </span>
                        </h4>
                        <a
                          href="/default-course-two"
                          className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-block mt-4 w-100 p-2 lh-34 text-center ls-3 "
                        >
                          BUy Now
                        </a>
                      </div>
                    </div>
                    <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
                      <div className="row">
                        <div className="col-5 pr-0">
                          <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">
                            4.2
                          </h2>
                        </div>
                        <div className="col-7 pl-0 text-right">
                          <div className="star d-block w-100 text-right">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                            <img
                              src="assets/images/star-disable.png"
                              alt="star"
                              className="w10"
                            />
                          </div>
                          <h4 className="font-xsssss text-grey-600 fw-600 mt-1">
                            Based on 433 rating
                          </h4>
                        </div>
                      </div>
                      <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
                        <div className="row mt-3">
                          <div className="col-3 pr-1 mt-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                              5
                            </h4>
                          </div>
                          <div className="col-7 pl-0 pr-2">
                            <div
                              id="bar_1"
                              data-value="45"
                              className="bar-container"
                            >
                              <div
                                className="bar-percentage"
                                style={{ Width: `70%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800">
                              70%
                            </h4>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-3 pr-1 mt-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                              4
                            </h4>
                          </div>
                          <div className="col-7 pl-0 pr-2">
                            <div
                              id="bar_2"
                              data-value="45"
                              className="bar-container"
                            >
                              <div
                                className="bar-percentage"
                                style={{ Width: `50%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800">
                              50%
                            </h4>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-3 pr-1 mt-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                              3
                            </h4>
                          </div>
                          <div className="col-7 pl-0 pr-2">
                            <div
                              id="bar_3"
                              data-value="45"
                              className="bar-container"
                            >
                              <div
                                className="bar-percentage"
                                style={{ Width: `40%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800">
                              40%
                            </h4>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-3 pr-1 mt-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                              2
                            </h4>
                          </div>
                          <div className="col-7 pl-0 pr-2">
                            <div
                              id="bar_4"
                              data-value="45"
                              className="bar-container"
                            >
                              <div
                                className="bar-percentage"
                                style={{ Width: `30%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800">
                              30%
                            </h4>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-3 pr-1 mt-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                              1
                            </h4>
                          </div>
                          <div className="col-7 pl-0 pr-2">
                            <div
                              id="bar_5"
                              data-value="45"
                              className="bar-container"
                            >
                              <div
                                className="bar-percentage"
                                style={{ Width: `20%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800">
                              20%
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-2 text-left">
                          <figure className="avatar float-left mb-0">
                            <img
                              src="assets/images/user.png"
                              alt="banner"
                              className="float-right shadow-none w40 mr-2"
                            />
                          </figure>
                        </div>
                        <div className="col-10 pl-4">
                          <div className="content">
                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                              Goria Coast
                            </h6>
                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                              July 26 at 8:20 PM
                            </h6>
                            <div className="star d-block w-100 text-left">
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star-disable.png"
                                alt="star"
                                className="w10"
                              />
                            </div>
                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                              Enjoyed this a lot and well done. We are an early
                              stage digitally native vertical brand, making
                              travel bags.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-2 text-left">
                          <figure className="avatar float-left mb-0">
                            <img
                              src="assets/images/user.png"
                              alt="banner"
                              className="float-right shadow-none w40 mr-2"
                            />
                          </figure>
                        </div>
                        <div className="col-10 pl-4">
                          <div className="content">
                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                              Goria Coast
                            </h6>
                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                              July 26 at 8:20 PM
                            </h6>
                            <div className="star d-block w-100 text-left">
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                              />
                              <img
                                src="assets/images/star-disable.png"
                                alt="star"
                                className="w10"
                              />
                            </div>
                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                              Enjoyed this a lot and well done. We are an early
                              stage digitally native vertical brand, making
                              travel bags.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <a
                          href="/default-course-one"
                          className="d-block p-2 lh-32 w-100 text-center ml-3 mr-3 bg-greylight fw-600 font-xssss text-grey-900"
                        >
                          Add a Review
                        </a>
                      </div>
                    </div>
                    <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
                      <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
                        Modul
                        <a href="/default-course-one" className="float-right">
                          <i className="ti-arrow-circle-right text-grey-500 font-xss"></i>
                        </a>
                      </h4>
                      <div className="card-body d-flex p-0">
                        <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                          1
                        </span>
                        <span className="font-xssss fw-500 text-grey-500 ml-2">
                          Introduction
                        </span>
                        <span className="ml-auto font-xssss fw-500 text-grey-500">
                          12:34
                        </span>
                      </div>
                      <div className="card-body d-flex p-0 mt-3">
                        <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                          2
                        </span>
                        <span className="font-xssss fw-500 text-grey-500 ml-2">
                          Watch the videos
                        </span>
                        <span className="ml-auto font-xssss fw-500 text-grey-500">
                          22:34
                        </span>
                      </div>

                      <div className="card-body d-flex p-0 mt-3">
                        <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                          3
                        </span>
                        <span className="font-xssss fw-500 text-grey-500 ml-2">
                          Creating a sliding
                        </span>
                        <span className="ml-auto font-xssss fw-500 text-grey-500">
                          34:34
                        </span>
                      </div>

                      <div className="card-body d-flex p-0 mt-3">
                        <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                          4
                        </span>
                        <span className="font-xssss fw-500 text-grey-500 ml-2">
                          Make a Dropdown
                        </span>
                        <span className="ml-auto font-xssss fw-500 text-grey-500">
                          40:34
                        </span>
                      </div>

                      <div className="card-body d-flex p-0 mt-3">
                        <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                          5
                        </span>
                        <span className="font-xssss fw-500 text-grey-500 ml-2">
                          Conclusion
                        </span>
                        <span className="ml-auto font-xssss fw-500 text-grey-500">
                          2:34
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sidebar-right scroll-bar">
                <div className="middle-sidebar-right-content">
                  <Profile />
                  <Myclass />
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>

          <Appfooter />
        </div>
      </Fragment>
    );
  }
}

export default Defaultcoursetwo;
