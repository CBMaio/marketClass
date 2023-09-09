import React, { Component } from "react";
import { createRoot } from "react-dom/client";

import "./main.scss";

// Common Layout
import Demo from "./demo/Demo";

import Admin from "./pages/Admin";
import Adminemail from "./pages/Adminemail";
import Adminchat from "./pages/Adminchat";
import Adminproductlist from "./pages/Adminproductlist";
import Adminproductgrid from "./pages/Adminproductgrid";
import Adminproductadd from "./pages/Adminproductadd";
import Admincustomer from "./pages/Admincustomer";
import Admincustomerview from "./pages/Admincustomerview";
import Adminorder from "./pages/Adminorder";
import Adminorderview from "./pages/Adminorderview";

import Adminvenderlist from "./pages/Adminvenderlist";
import Adminvenderview from "./pages/Adminvenderview";
import Adminreview from "./pages/Adminreview";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Coming from "./pages/Coming";
import Notfound from "./pages/Notfound";
import Blog from "./pages/Blog";
import BlogSidebar from "./pages/BlogSidebar";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Contacttwo from "./pages/Contacttwo";
import About from "./pages/About";
import Service from "./pages/Service";
import Price from "./pages/Price";
import Shopone from "./pages/Shopone";
import Shoptwo from "./pages/Shoptwo";
import Shopthree from "./pages/Shopthree";
import Productone from "./pages/Productone";
import Producttwo from "./pages/Producttwo";
import Productthree from "./pages/Productthree";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Coursesgridone from "./pages/Coursesgridone";
import Coursesgridtwo from "./pages/Coursesgridtwo";
import Coursesgridthree from "./pages/Coursesgridthree";
import Popupchat from "./pages/Popupchat";

import Userprofile from "./pages/Userprofile";
import Authorprofile from "./pages/Authorprofile";
import Coursedetails from "./pages/Coursedetails";
import Coursedetailstwo from "./pages/Coursedetailstwo";

import Default from "./pages/Default";
import Defaultcategory from "./pages/Defaultcategory";
import Defaultfollower from "./pages/Defaultfollower";
import Defaultsettings from "./pages/Defaultsettings";
import Defaultsearch from "./pages/Defaultsearch";
import Defaultchannel from "./pages/Defaultchannel";
import Defaultlive from "./pages/Defaultlive";
import Defaultcourseone from "./pages/Defaultcourseone";
import Defaultcoursetwo from "./pages/Defaultcoursetwo";
import Defaultuserprofile from "./pages/Defaultuserprofile";
import Defaultauthorprofile from "./pages/Defaultauthorprofile";
import Defaultanalytics from "./pages/Defaultanalytics";

import Accountinfo from "./pages/Accountinfo";
import Contactinfo from "./pages/Contactinfo";
import Social from "./pages/Social";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Chat from "./pages/Chat";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";

import Hometwo from "./pages/Hometwo";
import Homethree from "./pages/Homethree";
import Homefive from "./pages/Homefive";
import Homesix from "./pages/Homesix";
import Homefour from "./pages/Homefour";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Demo />} />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            element={<Admin />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-email`}
            element={<Adminemail />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-chat`}
            element={<Adminchat />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productlist`}
            element={<Adminproductlist />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productgrid`}
            element={<Adminproductgrid />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productadd`}
            element={<Adminproductadd />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customer`}
            element={<Admincustomer />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customerview`}
            element={<Admincustomerview />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-order`}
            element={<Adminorder />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-orderview`}
            element={<Adminorderview />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-venderlist`}
            element={<Adminvenderlist />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-venderview`}
            element={<Adminvenderview />}
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
            path={`${process.env.PUBLIC_URL}/coming-soon`}
            element={<Coming />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/notfound`}
            element={<Notfound />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog`}
            element={<Blog />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar`}
            element={<BlogSidebar />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-single`}
            element={<BlogSingle />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-2`}
            element={<Contacttwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            element={<About />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            element={<Service />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/price`}
            element={<Price />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-1`}
            element={<Shopone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-2`}
            element={<Shoptwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-3`}
            element={<Shopthree />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product`}
            element={<Productone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product-2`}
            element={<Producttwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product-3`}
            element={<Productthree />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/cart`}
            element={<Cart />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/checkout`}
            element={<Checkout />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default`}
            element={<Default />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-categories`}
            element={<Defaultcategory />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-follower`}
            element={<Defaultfollower />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-settings`}
            element={<Defaultsettings />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-search`}
            element={<Defaultsearch />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-live-stream`}
            element={<Defaultlive />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-channel`}
            element={<Defaultchannel />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-course-one`}
            element={<Defaultcourseone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-course-two`}
            element={<Defaultcoursetwo />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-user-profile`}
            element={<Defaultuserprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-analytics`}
            element={<Defaultanalytics />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-author-profile`}
            element={<Defaultauthorprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/popup-chat`}
            element={<Popupchat />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/account-information`}
            element={<Accountinfo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-information`}
            element={<Contactinfo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/social`}
            element={<Social />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/payment`}
            element={<Payment />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/password`}
            element={<Password />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/email-box`}
            element={<Email />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultemailopen`}
            element={<Emailopen />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/message`}
            element={<Chat />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-1`}
            element={<Coursesgridone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-2`}
            element={<Coursesgridtwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-3`}
            element={<Coursesgridthree />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/user-profile`}
            element={<Userprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/author-profile`}
            element={<Authorprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/coursedetails`}
            element={<Coursedetails />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/course-details-2`}
            element={<Coursedetailstwo />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-3`}
            element={<Homethree />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-5`}
            element={<Homefive />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-6`}
            element={<Homesix />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-4`}
            element={<Homefour />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-2`}
            element={<Hometwo />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
serviceWorker.register();
