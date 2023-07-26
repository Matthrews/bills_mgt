import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./routes/Home";
import Advance from "./routes/Advance";
import AdvanceRatio from "./routes/AdvanceRatio";
import Login from "./routes/Login";
import ErrorPage from "./routes/ErrorPage";

import * as constants from "./store/actionType";

import "./style/global.css";
import "./style/index.css";

class App extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchLocalData();
  }

  render() {
    let LayoutRouter = (
      <Routes>
        <Route index path="/" element={<Home />} />
        {/*go to this page for no match*/}
        <Route element={ErrorPage} />
      </Routes>
    );
    return (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              this.props.userData ? LayoutRouter : <Navigate to="/login" push />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/advance" element={<Advance />} />
          <Route path="/advance_ratio" element={<AdvanceRatio />} />
          <Route path="/" element={LayoutRouter} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocalData() {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      dispatch({
        type: constants.INIT_USER_DATA,
        userData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
