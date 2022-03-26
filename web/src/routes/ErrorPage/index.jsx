import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";

class ErrorPage extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 100,
        }}
      >
        <img src={logo} alt="LOGO" style={{ width: 100 }} />
        <Link to="/">
          <h3 className="text-primary">哎呀，迷路了，点我我返回首页！</h3>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
