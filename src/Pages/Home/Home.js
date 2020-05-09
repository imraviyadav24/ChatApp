import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Home.css";
import images from "../../ProjectImages/ProjectImages";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="splash-container">
          <div class="splash">
            <h1 class="splash-head">WEB CHAT APP</h1>
            <p class="splash-subhead">Let's talk with our loved ones</p>

            <div id="custom-button-wrapper">
              <Link to="/login">
                <a class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span className="buttoncooltext">Get Started</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* <div class="content-wrapper">
          <div class="content">
            <h2 class="content-head is-center">
              Features of WebChat Application
            </h2>

            <div className="Appfeatures">
              <div className="contenthead">
                <h3 class="content-subhead">
                  <i class="fa fa-rocket"></i>
                  Get Started Quickly
                </h3>
                <p>
                  Just register yourself with this app and start chating with
                  your loved ones
                </p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-sign-in"></i>
                  Firebase Authentication
                </h3>
                <p>Firebase Authentication has been implemented in this app</p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-th-large"></i>
                  Media
                </h3>
                <p>
                  You can share images with yoyr friends for better experience
                </p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-refresh"></i>
                  Updates
                </h3>
                <p>
                  We will working with new features for this app for better
                  experience in future
                </p>
              </div>
            </div>
          </div>
          <Footer /> */}
        {/* </div> */}
      </div>
    );
  }
}

//In this project we have installed @material-ui/core
