import React, { Component } from "react";

import IndustryChart from "../../components/IndustryChart";
import GDPChart from "../../components/GDPChart";
import IndustryDistriutionChart from "../../components/IndustryDistriutionChart";
import NewResourcesGrowthChart from "../../components/NewResourcesGrowthChart";
import SoftwareAndComputerGrowthChart from "../../components/SoftwareAndComputerGrowthChart";
import NewIndustryChangeChart from "../../components/NewIndustryChangeChart";
import "./index.css";

import { getYMDHMS } from "../../util/time";

class Home extends Component {
  UNSAFE_componentWillMount() {
    document.title = "重庆新兴产业的可视化平台分析与设计";
  }
  render() {
    return (
      <div className="analysis-wrapper">
        <div className="header">
          <h2>重庆新兴产业的可视化平台分析与设计</h2>
          <a
            className="logout"
            href="https://www.bing.com"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.removeItem("userData");
              window.location.reload();
            }}
          >
            退出登录
          </a>
        </div>
        <div className="content">
          <div className="left">
            <GDPChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />
            <IndustryChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />

            <SoftwareAndComputerGrowthChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />
          </div>
          <div className="middle">
            <div className="time">{getYMDHMS(Date.now())}</div>

            <img
              alt="Animation"
              src={require("../../assets/imgs/animation.gif")}
              width="680"
            />
          </div>
          <div className="right">
            <IndustryDistriutionChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />

            <NewResourcesGrowthChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />
            <NewIndustryChangeChart
              init={() => {
                console.log("Init...");
              }}
              clear={() => {
                console.log("Clear...");
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
