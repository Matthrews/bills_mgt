import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeDataAction } from "../../store/actionCreators";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";

class Home extends Component {
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
          headerName: "财务单元",
        },
        // 账号ID
        { field: "u_id", filter: true, sortable: true, headerName: "账号ID" },
        // 账号
        { field: "id", filter: true, sortable: true, headerName: "账号" },
        // Owner账号ID
        {
          field: "owner_id",
          filter: true,
          sortable: true,
          headerName: "Owner账号ID",
        },
        // Owner账号
        {
          field: "owner_account",
          filter: true,
          sortable: true,
          headerName: "Owner账号",
        },
        // 产品Code
        {
          field: "product_code",
          filter: true,
          sortable: true,
          headerName: "产品Code",
        },
        // 产品
        {
          field: "product_name",
          filter: true,
          sortable: true,
          headerName: "产品",
        },
        // 产品明细Code
        {
          field: "product_detail_code",
          filter: true,
          sortable: true,
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
          headerName: "业务类型",
        },
        // 消费类型
        {
          field: "fee_type",
          filter: true,
          sortable: true,
          headerName: "消费类型",
        },
        // 服务时长
        {
          field: "service_time",
          filter: true,
          sortable: true,
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
          headerName: "账单类型",
        },
        // 计费方式
        {
          field: "charge_type",
          filter: true,
          sortable: true,
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
          headerName: "实例规格",
        },
        // 公网IP
        { field: "e_ip", filter: true, sortable: true, headerName: "公网IP" },
        // 私网IP
        {
          field: "private_ip",
          filter: true,
          sortable: true,
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
          headerName: "官网价",
        },
        // 优惠金额
        {
          field: "bonus_price",
          filter: true,
          sortable: true,
          headerName: "优惠金额",
        },
        // 优惠券抵扣
        {
          field: "coupon",
          filter: true,
          sortable: true,
          headerName: "优惠券抵扣",
        },
        // 应付金额
        {
          field: "amount_payable",
          filter: true,
          sortable: true,
          headerName: "应付金额",
        },
        // 现金支付
        {
          field: "cash_payment",
          filter: true,
          sortable: true,
          headerName: "现金支付",
        },
        // 代金券抵扣
        {
          field: "voucher",
          filter: true,
          sortable: true,
          headerName: "代金券抵扣",
        },
        // 储值卡支付金额
        {
          field: "payment_in_deposit",
          filter: true,
          sortable: true,
          headerName: "储值卡支付金额",
        },
        // 欠费金额
        {
          field: "fee_owed",
          filter: true,
          sortable: true,
          headerName: "欠费金额",
        },
        // 币种
        { field: "currency", filter: true, sortable: true, headerName: "币种" },
        // 信用额度退款抵扣
        {
          field: "credit_line_refund",
          filter: true,
          sortable: true,
          headerName: "信用额度退款抵扣",
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
    const { popupParent, defaultColDef, columnDefs } = this.state;
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
        </div>
        <div className="content">
          <div className="tool-wrapper d-flex">
            <input
              style={{ maxWidth: 200 }}
              class="form-control me-sm-2"
              type="search"
              placeholder="Search"
              onChange={(e) => this.onSearch(e)}
            />
            <button
              type="button"
              class="btn btxn-lg btn-primary"
              onClick={() => this.onBtnExport()}
            >
              Export to CSV
            </button>
          </div>
          <div
            id="gridContainer"
            className="ag-theme-alpine"
            style={{ height: "80vh", width: "100%" }}
          >
            <AgGridReact
              defaultColDef={defaultColDef}
              popupParent={popupParent}
              rowData={homeData}
              enableRangeSelection={true}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
