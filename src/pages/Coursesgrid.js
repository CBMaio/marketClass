import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searcharea from "../components/Searcharea";
import Pagination from "../components/Pagination";
import CourseList from "../features/courses/CourseList";

const Coursesgrid = () => {
  return (
    <Fragment>
      <Header />

      <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <Searcharea />
            </div>
            <div className="col-lg-12 pt-2 mb-4">
              <h2 className="fw-400 font-lg">
                Search <b>Results</b>
                <span className="fw-500 ml-2 text-grey-500 font-xssss">
                  ( 23 course is found )
                </span>
              </h2>
            </div>

            <CourseList />

            <div className="col-lg-12">
              <Pagination divClass="pagination justify-content-center d-flex pt-5" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Coursesgrid;
