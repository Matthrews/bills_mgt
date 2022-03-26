import React, { Component } from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
// import scriptjs from "scriptjs";
import PropTypes from "prop-types";

const { name, data } = require("../data/IndustryDistriutionChart.json");
const d = data.slice(0, 10);

const colors30 = [];

const windTheme = {
  color: colors30,
};

const option = {
  color: [
    "#F7C176",
    "#F19491",
    "#82CAA9",
    "#86BFF2",
    "#76CBD7",
    "#B9A5DE",
    "#C3CED3",
  ],
  title: {
    text: name,
    left: "center",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    bottom: "0",
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  series: [
    {
      name: "企业数量",
      type: "pie",
      radius: "50%",
      data: d.map((v) => ({ name: v.name, value: v.count })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
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
