import React, { Component } from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
// import scriptjs from "scriptjs";
import PropTypes from "prop-types";

const { data } = require("../data/SoftwareAndComputerGrowthChart.json");

const d = data;

const colors30 = [];

const windTheme = {
  color: colors30,
};

const option = {
  title: {
    showTitle: true,
    text: "信息传输、软件和信息技术服务业:累计同比",
    left: "center",
    textStyle: {
      color: "#fff",
    },
  },
  color: [
    "#F7C176",
    "#F19491",
    "#82CAA9",
    "#86BFF2",
    "#76CBD7",
    "#B9A5DE",
    "#C3CED3",
  ],
  tooltip: {
    trigger: "item",
  },
  legend: {
    bottom: 0,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: d.map((v) => v.name),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: d.map((v) => v.value),
      type: "line",
      smooth: true,
    },
  ],
};

class Charts extends Component {
  state = {
    echarts: null,
  };

  componentDidMount() {
    const { init } = this.props;
    // webpack命令无效，原因待查
    import(
      /* webpackPrefetch: 10, webpackChunkName: "echarts" */ "echarts"
    ).then((echarts) => {
      echarts.registerTheme("wind_theme", windTheme);
      this.setState({
        echarts,
      });
    });
    // // 异步加载第三方库
    // scriptjs('https://cdn.bootcdn.net/ajax/libs/echarts/4.3.0/echarts.min.js', () => {
    //   const { echarts } = window;
    //   echarts.registerTheme('wind_theme', windTheme);
    //   this.setState({
    //     echarts,
    //   });
    //   init();
    // });
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { echarts } = this.state;
    return echarts ? (
      <ReactEchartsCore
        echarts={echarts}
        option={{ ...option }}
        style={{ height: 360 }}
      />
    ) : (
      <img
        src="/logo192.png"
        style={{ transform: "scale(0.5)" }}
        className="init-loading"
        alt="加载中"
      />
    );
  }
}

Charts.propTypes = {
  data: PropTypes.object,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

Charts.defaultProps = {
  data: {},
};

export default Charts;
