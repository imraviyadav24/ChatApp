import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import firebase from "./Services/firebase";
import { toast, toastContainer } from "react-toastify";
