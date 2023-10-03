import React, { Fragment } from "react";
import Header from "../components/Header";
import Upperheader from "../components/Upperheader";
import Footer from "../components/Footer";
import AuthorData from "../features/authors/AuthorData";

const AuthorProfile = () => {
  return (
    <Fragment>
      <Upperheader />
      <Header />
      <AuthorData />
      <Footer />
    </Fragment>
  );
};

export default AuthorProfile;
