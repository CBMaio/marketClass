import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store";

import "./main.scss";

import Adminproductlist from "./pages/Adminproductlist";
import AddCoursePage from "./pages/AddCoursePage";
import EditCoursePage from "./pages/EditCoursePage";
import AdminDraftList from "./pages/AdminDraftList";
import Adminreview from "./pages/Adminreview";
import WelcomeAdmin from "./pages/WelcomeAdmin";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Coursesgridone from "./pages/Coursesgrid";

import AuthorProfile from "./pages/AuthorProfile";
import Coursedetails from "./pages/Coursedetails";

import Accountinfo from "./pages/Accountinfo";
import Password from "./pages/Password";
import Home from "./pages/Home";
import CourseRegistration from "./pages/CourseRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import AdminRequests from "./pages/AdminRequests";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              element={<Home />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin`}
              element={<WelcomeAdmin />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin-productlist`}
              element={<Adminproductlist />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/add-course`}
              element={<AddCoursePage />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/edit-course/:courseId`}
              element={<EditCoursePage />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin-draft-list`}
              element={<AdminDraftList />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin-review`}
              element={<Adminreview />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/login`}
              element={<Login />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/register`}
              element={<Register />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/forgot`}
              element={<Forgot />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/notfound`}
              element={<Notfound />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              element={<Contact />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              element={<About />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/account-information`}
              element={<Accountinfo />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/password`}
              element={<Password />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/courses-grid`}
              element={<Coursesgridone />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/author-profile/:authorId`}
              element={<AuthorProfile />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/course-detail/:courseId`}
              element={<Coursedetails />}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/welcome-admin`}
              element={<WelcomeAdmin />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/course-registration/:courseId`}
              element={<CourseRegistration />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/admin-requests`}
              element={<AdminRequests />}
            />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </Provider>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
serviceWorker.register();
