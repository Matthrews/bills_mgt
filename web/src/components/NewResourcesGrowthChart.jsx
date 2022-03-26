import React, { Component } from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
// import scriptjs from "scriptjs";
import PropTypes from "prop-types";

const { name, data } = require("../data/NewResourcesGrowthChart.json");

const d = data;

const [n, n2] = [
  "重庆:产量:新能源汽车:累计值",
  "重庆:产量:新能源汽车:累计同比",
];

const colors30 = [];

const windTheme = {
  color: colors30,
};

const option = {
  title: {
    text: name,
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
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      // dataView: { show: true, readOnly: false },
      // magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: [n.trim(), n2.trim()],
    bottom: 0,
    textStyle: {
      color: "#fff",
    },
  },
  xAxis: [
    {
      type: "category",
      data: d.map((v) => v.year),
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      // name: n.trim(),
      min: 0,
      max: 16,
      interval: 16,
      // axisLabel: {
      //   formatter: "{value} 亿元/年",
      // },
    },
    {
      type: "value",
      // name: n2.trim(),
      min: -100,
      max: 2800,
      interval: 1000,
      // axisLabel: {
      //   formatter: "{value} %",
      // },
    },
  ],
  series: [
    {
      name: n.trim(),
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " 万辆/月";
        },
      },
      data: d.map((v) => v.value),
    },
    {
      name: n2.trim(),
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + " %/月";
        },
      },
      data: d.map((v) => v.ratio),
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
