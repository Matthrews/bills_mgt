import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeDataAction } from "../../store/actionCreators";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";
import { Select, Divider, Button, Input, Modal, Table } from "antd";
import { Link } from 'react-router-dom'

const { Option } = Select;

const columns = [
  {
    title: '产品名称',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '占比',
    dataIndex: 'ratio',
    key: 'ratio',
  },
  {
    title: '应付金额',
    dataIndex: 'amountPayable',
    key: 'amountPayable',
  }
]

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
      isModalOpen: false,
    };
    this.gridRef = React.createRef();
  }

  UNSAFE_componentWillMount() {
    document.title = "Transsion";
  }

  render() {
    const { homeData = [] } = this.props;
    const { popupParent, defaultColDef, columnDefs, status, homeDataModified = [], 
      isModalOpen, stats = [], stats_2 = [], statsIndex } = this.state;

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

    const productDetailList = this.getNormalizedProductDetailList(homeData);
    const instanceTagList = Array.from(new Set(normalized_2));

    const instanceTagChildren = [],
      productDetailListChildren = [];
    for (let i = 0; i < instanceTagList.length; i++) {
      const ele = instanceTagList[i];
      instanceTagChildren.push(<Option key={ele}>{ele}</Option>);
    }

    for (let i = 0; i < productDetailList.length; i++) {
      const ele = productDetailList[i];
      productDetailListChildren.push(<Option key={ele}>{ele}</Option>);
    }

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
          <div className="d-flex my-sm-2">
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

            {/* 新增业务 */}
            <div className="d-flex my-sm-2">
              <Select
                mode="multiple"
                style={{ minWidth: 320, marginRight: 16 }}
                placeholder="请选择 KEY"
                onChange={(e) => this.handleChange(e, "instances")}
              >
                {instanceTagChildren}
              </Select>

              <Button type="primary" onClick={() => this.appendColumns()}>
                新增业务
              </Button>
              <Button type="primary" onClick={() => this.resetColumns()}>
                重置
              </Button>

              <Divider type="vertical" style={{ height: "auto" }} />
              <Button type="primary" onClick={() => this.getStatsByProduct()}>
                按产品统计
              </Button>
              <Button type="primary" onClick={() => this.getStatsByBussinessType()}>
                按业务统计
              </Button>
            </div>
            {/* 计算比重 */}
            <div className="d-flex">
              <Select
                mode="default"
                style={{ minWidth: 320, marginRight: 16 }}
                placeholder="请选择 PRODUCT"
                onChange={(e) => this.handleChange(e, "product")}
              >
                {productDetailListChildren}
              </Select>

              <Select
                mode="default"
                style={{ minWidth: 320, marginRight: 16 }}
                placeholder="请选择 KEY"
                onChange={(e) => this.handleChange(e, "instance")}
              >
                {instanceTagChildren}
              </Select>

              <Button type="primary" onClick={() => this.bulkUpdate()}>
                空实例批量设置业务
              </Button>
              <Button type="primary" onClick={() => this.resetBulk()}>
                重置
              </Button>
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
        <Modal width={'75vw'} title="Basic Modal" visible={isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Table columns={columns} dataSource={ statsIndex === 1 ? stats_2: stats } />
        </Modal>
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
    const { homeDataModified = [], status } = this.state;
    const data = !!status ?  homeDataModified: homeData;
    if (key === 'product') {
      this.setState({
        ...this.state,
        [key]: value,
        status: "APPENDED",
        homeDataModified: data.filter(v => v.product_detail.indexOf(value) > -1),
      });
    return
    }
    if (key === 'instance') {
      this.setState({
        ...this.state,
        [key]: value,
        status: "APPENDED",
        homeDataModified: data.filter(v => this.formatString(v.instance_tag).indexOf(value) > -1),
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
    const { instance = '', product = '' } = this.state;
    console.log('bulkUpdate', instance, product);
    const { homeData = [] } = this.props;
    // const normalized = this.getNormalizedTagList(homeData);
    // this.setState({
    //   ...this.state,
    //   status: "APPENDED",
    //   homeDataModified: homeData.filter((v) => {
    //     if (v.bussinessType === "请选择业务线") {
    //       v.bussinessType = this.getValueByKey_2(normalized, instances[0]);
    //     }
    //     return true;
    //   }),
    // });
  }

  resetBulk() {
    console.log('resetBulk', this.state);
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

  getNormalizedProductDetailList(homeData = []) {
    let productDetailList = [];
    homeData.forEach((element) => {
      productDetailList.push(element.product_detail);
    });

    return Array.from(new Set(productDetailList));
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

  getStatsByProduct() {
    const { homeData = [] } = this.props;
    const total = homeData.reduce((acc, cur) => acc + cur.amount_payable, 0);
    let stats = []
    const productDetailList = this.getNormalizedProductDetailList(homeData);
    productDetailList.forEach(v => {
      const items = homeData.filter(k => k.product_detail === v);
      const amountPayable = items.reduce((acc, cur) => acc + cur.amount_payable, 0).toFixed(2);
      stats.push({ productName: v, ratio: ((amountPayable / total) * 100).toFixed(2) + '%', amountPayable })
    })
    this.setState({
      ...this.state,
      stats,
      statsIndex: 0,
      isModalOpen: true
    })
  }

  getStatsByBussinessType() {
    const { homeData = [] } = this.props;
    const { homeDataModified = [], columnDefs  } = this.state;
    const dynamicColumnFields = columnDefs.filter(v => v.type === 'dynamic').map(v => v.field)
    const total = homeData.reduce((acc, cur) => acc + cur.amount_payable, 0);

    // P1
    homeDataModified.forEach(v => {
      v.attrCount = [v.bussinessType !== ''].filter(Boolean).concat(dynamicColumnFields.map(k => v[k]).filter(Boolean)).length;
    })

    const map = new Map();
    const updateMapByKey = (map, key, record) => {
      const value = map.get(key)
      if (Array.isArray(value)) {
        map.set(key, value.concat(record))
      } else {
        map.set(key, [record])
      }
    }

    // P2
    homeDataModified.forEach(v => {
      dynamicColumnFields.concat('bussinessType').forEach(columnField => {
        const record = v;
        const value = record[columnField]
        if (value) {
          if (map.has(value)) {
            updateMapByKey(map, value, record)
          } else {
            map.set(value, [record])
          }
        }
      })
    })

    // P3
    const stats_2 = []
    for (let [k , v] of map) {
      const sum = v.reduce((acc, cur) => acc + cur.amount_payable / cur.attrCount, 0)
      stats_2.push({ productName: k, ratio: ((sum / total) * 100).toFixed(2) + '%', amountPayable: sum.toFixed(2) })
    }

    this.setState({
      ...this.state,
      stats_2,
      statsIndex: 1,
      isModalOpen: true
    })
  }

  handleOk = () => {
    this.setState({
      ...this.state,
      isModalOpen: false
    })
  }

  handleCancel = () => {
    this.setState({
      ...this.state,
      isModalOpen: false
    })
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
