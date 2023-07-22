import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeDataAction } from "../../store/actionCreators";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";
import { Select, Divider, Button, Input, Statistic, Alert, Typography, List } from "antd";
import { Link } from 'react-router-dom'

const { Option } = Select;
const { Paragraph } = Typography;

class Advance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultColDef: {
        editable: true,
        resizable: true,
        minWidth: 160,
        flex: 1,
      },
      popupParent: document.body,
      columnDefs: [
        // 账期
        {
          field: "occuring_date",
          filter: true,
          sortable: true,
          headerName: "账期",
        },
        // 财务单元
        {
          field: "financial_unit",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "财务单元",
        },
        // 账号ID
        { field: "u_id", filter: true, sortable: true, headerName: "账号ID" },
        // 账号
        { field: "id", filter: true, sortable: true, hide: true, headerName: "账号" },
        // Owner账号ID
        {
          field: "owner_id",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "Owner账号ID",
        },
        // Owner账号
        {
          field: "owner_account",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "Owner账号",
        },
        // 产品Code
        {
          field: "product_code",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "产品Code",
        },
        // 产品
        {
          field: "product_name",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "产品",
        },
        // 产品明细Code
        {
          field: "product_detail_code",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "产品明细Code",
        },
        // 产品明细
        {
          field: "product_detail",
          filter: true,
          sortable: true,
          headerName: "产品明细",
        },
        // 业务类型
        {
          field: "business_type",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "业务类型",
        },
        // 消费类型
        {
          field: "fee_type",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "消费类型",
        },
        // 服务时长
        {
          field: "service_time",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "服务时长",
        },
        // 时长单位
        {
          field: "time_unit",
          filter: true,
          sortable: true,
          headerName: "时长单位",
        },
        // 账单类型
        {
          field: "bill_type",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "账单类型",
        },
        // 计费方式
        {
          field: "charge_type",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "计费方式",
        },
        // 实例ID
        {
          field: "instance_id",
          filter: true,
          sortable: true,
          headerName: "实例ID",
        },
        // 实例昵称
        {
          field: "instance_name",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "实例昵称",
        },
        // 资源组
        {
          field: "resource_group",
          filter: true,
          sortable: true,
          headerName: "资源组",
        },
        // 实例标签
        {
          field: "instance_tag",
          filter: true,
          sortable: true,
          headerName: "实例标签",
        },
        // 实例配置
        {
          field: "instance_conf",
          filter: true,
          sortable: true,
          headerName: "实例配置",
        },
        // 实例规格
        {
          field: "instance_schema",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "实例规格",
        },
        // 公网IP
        { field: "e_ip", filter: true, sortable: true, headerName: "公网IP" },
        // 私网IP
        {
          field: "private_ip",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "私网IP",
        },
        // 地域
        { field: "region", filter: true, sortable: true, headerName: "地域" },
        // 可用区
        { field: "zoom", filter: true, sortable: true, headerName: "可用区" },
        // 官网价
        {
          field: "official_price",
          filter: true,
          sortable: true,
          hide: true,
          hide: true,
          headerName: "官网价",
        },
        // 优惠金额
        {
          field: "bonus_price",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "优惠金额",
        },
        // 优惠券抵扣
        {
          field: "coupon",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "优惠券抵扣",
        },
        // 应付金额
        {
          field: "amount_payable",
          filter: true,
          sortable: true,
          sort: "desc",
          headerName: "应付金额",
        },
        // 现金支付
        {
          field: "cash_payment",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "现金支付",
        },
        // 代金券抵扣
        {
          field: "voucher",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "代金券抵扣",
        },
        // 储值卡支付金额
        {
          field: "payment_in_deposit",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "储值卡支付金额",
        },
        // 欠费金额
        {
          field: "fee_owed",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "欠费金额",
        },
        // 币种
        { field: "currency", filter: true, sortable: true, hide: true, headerName: "币种" },
        // 信用额度退款抵扣
        {
          field: "credit_line_refund",
          filter: true,
          sortable: true,
          hide: true,
          headerName: "信用额度退款抵扣",
        },
        // 业务
        {
          field: "bussinessType",
          filter: true,
          pinned: "right",
          sortable: true,
          headerName: "业务",
        },
      ],
    };
    this.gridRef = React.createRef();
  }

  UNSAFE_componentWillMount() {
    document.title = "Transsion";
  }

  render() {
    const { homeData = [] } = this.props;
    const { popupParent, defaultColDef, columnDefs, total, msg, status, homeDataModified = [] } = this.state;

    let instanceTagList = [],
      productDetailList = [],
      groupList = [];
    homeData.forEach((element) => {
      productDetailList.push(element.product_detail);
      groupList.push(element.resource_group);
    });

    let normalized_2 = [];
    const normalized = this.getNormalizedTagList(homeData);
    normalized
      .filter((v) => v !== "EMPTY")
      .map((v) => v.trim())
      .forEach((t) => {
        normalized_2 = normalized_2.concat(
          t.includes(" ") ? t.split(" ")[0] : t
        );
      });

    productDetailList = Array.from(new Set(productDetailList));
    instanceTagList = Array.from(new Set(normalized_2));
    groupList = Array.from(new Set(groupList));

    const instanceTagChildren = [],
      productDetailListChildren = [],
      groupListChildren = [];
    for (let i = 0; i < instanceTagList.length; i++) {
      const ele = instanceTagList[i];
      instanceTagChildren.push(<Option key={ele}>{ele}</Option>);
    }

    for (let i = 0; i < productDetailList.length; i++) {
      const ele = productDetailList[i];
      productDetailListChildren.push(<Option key={ele}>{ele}</Option>);
    }

    for (let i = 0; i < groupList.length; i++) {
      const ele = groupList[i];
      groupListChildren.push(<Option key={ele}>{ele}</Option>);
    }

    const dataSource = groupList.filter(v => v !== '-').map(v => ({ title: v }))

    return (
      <div className="analysis-wrapper">
        <div className="header">
          <h2>Transsion - AliCloud Bill </h2>
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
          <Link className="logout" style={{ right: 120 }} to="/"> 返回 </Link>
        </div>
        <div className="content">
          <div className="tool-wrapper d-flex-column align-items-center">
            <div className="d-flex my-sm-4">
              <Input
                style={{ maxWidth: 200 }}
                class="form-control me-sm-2"
                type="search"
                placeholder="Fuzzy search"
                onChange={(e) => this.onSearch(e)}
              />
              <Button type="primary" onClick={() => this.onBtnExport()}>
                导出 Excel
              </Button>
            </div>

            <div className="d-flex">
              <Select
                mode="multiple"
                style={{ minWidth: 400, marginRight: 16 }}
                placeholder="请选择 KEY"
                onChange={(e) => this.handleChange(e, "instances")}
              >
                {instanceTagChildren}
              </Select>

              <Select
                mode="default"
                style={{ minWidth: 400, marginRight: 16 }}
                placeholder="请选择产品"
                onChange={(e) => this.handleChange(e, "product")}
              >
                {productDetailListChildren}
              </Select>

              <Button type="primary" onClick={() => this.appendColumns()}>
                新增业务
              </Button>
              <Button type="primary" onClick={() => this.resetColumns()}>
                重置
              </Button>
              <Divider type="vertical" style={{ height: "auto" }} />

              <Button type="primary" onClick={() => this.bulkUpdate()}>
                空实例批量设置业务
              </Button>

              {total ? (
                <Statistic
                  className="flex-fill"
                  title="总费用(人民币)"
                  value={total}
                  precision={2}
                />
              ) : null}

              {msg ? <Alert message={msg} type="error" /> : null}
            </div>
          </div>
          <div
            id="gridContainer"
            className="ag-theme-alpine"
            style={{ height: "calc(100vh - 250px)", width: "100%" }}
          >
            <AgGridReact
              defaultColDef={defaultColDef}
              popupParent={popupParent}
              rowData={status === 'APPENDED' ? homeDataModified: homeData}
              columnDefs={columnDefs}
              onGridReady={this.onGridReady}
            ></AgGridReact>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.reqHomeData();
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onSearch(e) {
    this.gridApi.setQuickFilter(e.target.value?.trim());
  }

  handleChange(value, key) {
    const { homeData = [] } = this.props;
    if (key === 'product') {
      this.setState({
        ...this.state,
        [key]: value,
        status: "APPENDED",
        homeDataModified: homeData.filter(v => v.product_detail.indexOf(value) > -1),
      });
    return
    }
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  appendColumns() {
    const { instances, groups, columnDefs } = this.state;
    const { homeData = [] } = this.props;
    const keys = instances.map(v => v.replace('key:', ''));
    const updatedColumnDefs = [...columnDefs].concat(keys.map(v => ({
      field: v,
      filter: true,
      sortable: true,
      headerName: v,
      type: "dynamic"
    })));
    const homeDataModified = [...homeData]
    keys.forEach(key => {
      homeDataModified.forEach(data => {
        data[key] = this.formatString(data.instance_tag).indexOf(key) > -1 ? this.getValueByKey(data, key): ''
      })
    })
    this.setState({
      ...this.state,
      columnDefs: updatedColumnDefs,
      status: "APPENDED",
      homeDataModified,
    });
  }

  resetColumns() {
    const { homeData = [] } = this.props;
    this.setState({
      ...this.state,
      columnDefs: this.state.columnDefs.filter(v => v.type !== 'dynamic'),
      status: undefined,
    });
  }

  bulkUpdate() {
    const { instances = [] } = this.state;
    const { homeData = [] } = this.props;
    const normalized = this.getNormalizedTagList(homeData);
    this.setState({
      ...this.state,
      status: "APPENDED",
      homeDataModified: homeData.filter((v) => {
        if (v.bussinessType === "请选择业务线") {
          v.bussinessType = this.getValueByKey_2(normalized, instances[0]);
        }
        return true;
      }),
    });
  }

  getNormalizedTagList(homeData = []) {
    let instanceTagList = [];
    homeData.forEach((element) => {
      instanceTagList.push(element.instance_tag);
    });

    let normalized = [];
    instanceTagList
      .map((v) => (typeof v !== "string" || v === "-" ? "EMPTY" : v.split(";")))
      .forEach((v) => {
        normalized = normalized.concat(v);
      });

    return normalized;
  }

  caculateResult() {
    const { instances, groups } = this.state;
    const { homeData = [] } = this.props;
    const s = Array.isArray(homeData) && homeData.length,
      s1 = Array.isArray(instances) && instances.length,
      s2 = Array.isArray(groups) && groups.length;
    let total = 0,
      finalData = [],
      msg = "";
    if (!s) {
      msg = "账单数据查询失败!";
      console.error("计算总计费出错：", msg);
      this.setState({
        ...this.state,
        msg,
      });
      return;
    }
    if (s1 && s2) {
      finalData = homeData
        .filter(
          (v) =>
            !!instances.find((k) =>
              this.formatString(v.instance_tag).includes(k.trim())
            )
        )
        .filter(
          (v) =>
            !!groups.find((k) =>
              this.formatString(v.resource_group).includes(k.trim())
            )
        );
    } else if (s1) {
      finalData = homeData.filter(
        (v) =>
          !!instances.find((k) =>
            this.formatString(v.instance_tag).includes(k.trim())
          )
      );
    } else if (s2) {
      finalData = homeData.filter(
        (v) =>
          !!groups.find((k) =>
            this.formatString(v.resource_group).includes(k.trim())
          )
      );
    } else {
      msg = "实例标签和资源组均不存在!";
      console.error("计算总计费出错：", msg);
    }

    if (finalData.length === 0) {
      msg = "未找到同时符合实例标签和资源组条件的记录!";
      console.error("计算总计费出错：", msg);
    }

    total = finalData.reduce((acc, cur) => acc + cur.amount_payable, 0);
    this.setState({
      ...this.state,
      total,
      msg,
    });
  }

  formatString(value) {
    if (typeof value !== "string" || value === "-") return "EMPTY";
    return value.trim();
  }

  getValueByKey(data, key) {
    const targetKVPair = this.formatString(data.instance_tag).split(';').map(v => v.trim()).find(v => v.indexOf(key) > -1)
    if (!targetKVPair) return 'Exception'
    return targetKVPair.split(' ')[1].replace('value:', '')
  }
}

// get state
const mapStateToProps = (state) => {
  return {
    homeData: state.homeData,
  };
};

// dispatch action
const mapDispatchToProps = (dispatch) => {
  return {
    reqHomeData() {
      const action = getHomeDataAction();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Advance);
