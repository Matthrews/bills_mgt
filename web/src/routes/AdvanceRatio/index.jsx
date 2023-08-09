import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeDataAction } from "../../store/actionCreators";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./index.css";
import { Select, Divider, Button, Input, Tooltip, message } from "antd";
import { Link } from 'react-router-dom'
import _ from "lodash"

const { Option } = Select;

// message 全局配置
message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
});

class AdvanceRatio extends Component {
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
        // 权重
        {
          field: "ratio",
          sortable: true,
          headerName: "权重(百分比1~100)",
        },
        // // VALUE
        // {
        //   field: "value_ratio",
        //   sortable: true,
        //   headerName: "VALUE",
        // },
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
      groups: [
        { value: '', ratio: '' }
      ],
      homeDataCopy: [],
      addedCount: 0
    };
  }

  UNSAFE_componentWillMount() {
    document.title = "Transsion";
  }

  render() {
    const { homeData = [] } = this.props;
    const { popupParent, defaultColDef, columnDefs, status, homeDataModified = [], 
      instances = [], groups = [], addedCount } = this.state;

    let normalized_2 = [];
    let normalized_3 = [];
    const normalized = this.getNormalizedTagList(homeData);
    normalized
      .filter((v) => v !== "EMPTY")
      .map((v) => v.trim())
      .forEach((t) => {
        normalized_2 = normalized_2.concat(
          t.includes(" ") ? t.split(" ")[0] : t
        );
        normalized_3 = normalized_3.concat(
          t.includes(" ") ? t.split(" ")[1] : t
        );
      });

    const productDetailList = this.getNormalizedProductDetailList(homeData)
    productDetailList.unshift('查看全量数据');
    const instanceTagList = Array.from(new Set(normalized_2));
    const valueList = Array.from(new Set(homeData.map(v => v.resource_group)
    .concat(normalized_3.map(v => v.replace('value:', '')))))
    .filter(v => v !== '-');

    const instanceTagChildren = [], valueListChildren = [],
      productDetailListChildren = [];
    for (const ele of instanceTagList) {
      instanceTagChildren.push(<Option key={ele}>{ele}</Option>);
    }

    for (const ele of valueList) {
      valueListChildren.push(<Option key={ele}>{ele}</Option>);
    }

    for (const ele of productDetailList) {
      productDetailListChildren.push(<Option key={ele}>{ele}</Option>);
    }

    const rowCount = status === 'APPENDED' ? homeDataModified.length: homeData.length

    return (
      <div className="analysis-wrapper">
        <div className="header">
          {/* <h2>Transsion - AliCloud Bill </h2> */}
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
          <div className="tool-wrapper d-flex-column align-items-center">
          <div className="d-flex my-sm-2">
              <Input
                style={{ maxWidth: 320, marginRight: 10 }}
                class="form-control me-sm-2"
                type="search"
                placeholder="全表搜索"
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
                style={{ minWidth: 320, marginRight: 10 }}
                placeholder="请选择 KEY"
                allowClear
                value={instances}
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
            </div>

            {/* 空实例批量设置业务 */}
            <div className="d-flex my-sm-2">
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
                placeholder="请选择 VALUE"
                onChange={(e) => this.handleChange(e, "value")}
              >
                {valueListChildren}
              </Select>

              <Button type="primary" onClick={() => this.bulkUpdate()} style={{ marginLeft: 0 }}>
                空实例批量设置业务
              </Button>
              <Button type="primary" onClick={() => this.resetUpdate()}>
                重置
              </Button>
            </div>

            {/* 计算比重 */}
            <div className="d-flex position-relative" style={{ marginBottom: 16 }}>
              <Select
                mode="default"
                style={{ minWidth: 320, marginRight: 16, height: '100%' }}
                placeholder="请选择 PRODUCT"
                con
                onChange={(e) => this.handleChangeRatio(e, "product_ratio")}
              >
                {productDetailListChildren}
              </Select>

              {
                rowCount ? <div className="position-absolute" style={{ top: 40, color: '#666', fontSize: 12, fontWeight: 'bold' }}>
                  {["状态：", `现有 ${ rowCount } 行数据`, addedCount && `, 新增 ${ addedCount } 行数据`].filter(Boolean).join('')}
                </div>: "暂无数据"
              }
              
              <div className="group-container">
                { groups.map((group, index) => {
                  return <div className="d-flex" style={{ marginTop: index > 0 ? 8: 0}}>
                    <Select
                      mode="default"
                      style={{ minWidth: 320, marginRight: 16 }}
                      placeholder="请选择 VALUE"
                      value={group.value || "请选择 VALUE 并分配权重"}
                      onChange={(e) => this.handleChangeRatio(e, "value_ratio", index)}
                    >
                      {valueListChildren}
                    </Select>

                    <Input
                      style={{ minWidth: 200 }}
                      class="form-control me-sm-2"
                      type="input"
                      placeholder="请输入1～100之间的权重值"
                      value={group.ratio}
                      onPressEnter={(e) => this.handleAddGroup(index)}
                      onChange={(e) => this.handleChangeRatio(e.target.value, "ratio", index)}
                    />
                    <Tooltip title="添加权重分组">
                      <Button type="primary" shape="circle" icon="plus" onClick={() => this.handleAddGroup(index)} />
                    </Tooltip>
                    <Tooltip title="删除权重分组">
                      <Button type="primary" shape="circle" icon="close" onClick={() => this.handleDeleteGroup(index)} />
                    </Tooltip>
                </div>
                })}
               
              </div>
              <Divider type="vertical" style={{ height: "auto" }} />
              <Tooltip title="更新 PRODUCT 对应权重">
                <Button type="primary" onClick={() => this.updateRatio()} style={{ marginLeft: 0 }}>
                  更新对应权重
                </Button>
              </Tooltip>
              <Tooltip title="重置分组已填项">
                <Button type="primary" onClick={() => this.resetGroups()}>
                  重置分组
                </Button>
              </Tooltip>
            </div>
          </div>
          <div
            id="gridContainer"
            className="ag-theme-alpine"
            style={{ height: "calc(100vh - 280px)", width: "100%" }}
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
    if (key === 'product') {
      if (value === '查看全量数据') value = ''
      this.setState({
        ...this.state,
        [key]: value,
      });
      this.filterByColumnAndSearchKey('product_detail', value)
      // this.gridApi.setQuickFilter(value);
      return
    }
 
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  handleChangeRatio(value, key, index) {
    const { homeData = [] } = this.props;
    const { groups = [], homeDataCopy = [], actionType } = this.state;
    // product_ratio
    if (key === 'product_ratio') {
      if (value === '查看全量数据') value = ''
      if (actionType === "UpdateRatio") {
        this.setState({
          ...this.state,
          homeDataModified: homeDataCopy,
          [key]: value,
        });
      } else {
        this.setState({
          ...this.state,
          homeDataCopy: homeData,
          [key]: value,
        });
      }
      
      this.gridApi.setQuickFilter(value);
      return
    }

    // value_ratio
    if (key === 'value_ratio') {
      groups.forEach((group, groupIndex) => {
        if (groupIndex === index) {
          group.value = value;
        }
      })
      this.setState({
        ...this.state,
        groups,
      });
    }

    // ratio
    if (key === 'ratio') {
      groups.forEach((group, groupIndex) => {
        if (groupIndex === index) {
          group.ratio = value;
        }
      })
      this.setState({
        ...this.state,
        groups,
      });
    }
 
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  appendColumns() {
    const { instances, columnDefs } = this.state;
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
    this.setState({
      ...this.state,
      columnDefs: this.state.columnDefs.filter(v => v.type !== 'dynamic'),
      status: undefined,
      instances: []
    });
  }

  bulkUpdate() {
    const { homeData = [] } = this.props;
    const { product = '', value = '', status, homeDataModified = [] } = this.state;
    if (status === 'APPENDED') {
      homeDataModified.forEach(v => {
        if (v.product_detail === product && v.bussinessType === '自定义业务线') {
          v.bussinessType = value;
          v.bulkUpdated = true;
        }
      })
      this.gridApi.refreshCells();
      this.setState({
        ...this.state,
        homeDataModified
      });
    } else {
      let dataSource = _.clone(homeData);
      dataSource.forEach(v => {
        if (v.product_detail === product && v.bussinessType === '自定义业务线') {
          v.bussinessType = value;
          v.bulkUpdated = true;
        }
      })
      this.setState({
        ...this.state,
        status: "APPENDED",
        homeDataModified: dataSource
      });
    }
  }

  resetUpdate() {
    const { homeDataModified = [] } = this.state;
    homeDataModified.forEach(v => {
      if (v.bulkUpdated) {
        v.bussinessType = '自定义业务线';
        v.bulkUpdated = false;
      }
    })
    this.gridApi.refreshCells();
    this.setState({
      ...this.state,
      status: "APPENDED",
      homeDataModified
    });
  }

  handleAddGroup(index) {
    const { groups = [] } = this.state;
    if (groups.filter(v => v.ratio === '' || v.value === '').length) return
    this.setState({
      ...this.state,
      groups: groups.concat({ value: '', ratio: '' }),
    });
  }

  handleDeleteGroup(index) {
    const { groups = [] } = this.state;
    this.setState({
      ...this.state,
      groups: groups.filter((_v, groupIndex) => groupIndex !== index),
    });
  }

  updateRatio() {
    const { homeData = [] } = this.props;
    const { product_ratio, value_ratio, ratio, groups = [], status, homeDataCopy = [], homeDataModified = [] } = this.state;
    const rowCount = this.gridApi.getDisplayedRowCount();
    const finalGroups = groups.filter(v => v.ratio !== '' && v.value !== '');
    const total = finalGroups.reduce((acc, cur) => acc + Number(cur.ratio), 0);
    if (total !== 100) return message.warn('所有分组权重之和必须为100')
    if (status === 'APPENDED') {
      const newData = []
      homeDataModified.forEach(v => {
        if (v.product_detail === product_ratio) {
          finalGroups.forEach(finalGroup => {
            newData.push({ ...v, bussinessType: finalGroup.value, ratio: finalGroup.ratio, referenceID: v._id })
          })
        }
      })
      // Sync up to homeDataCopy
      const homeDataCopy = this.getSynchronizedHomeData(newData)
      this.gridApi.refreshCells()
      this.setState({
        ...this.state,
        status: 'APPENDED',
        actionType: "UpdateRatio",
        homeDataCopy,
        addedCount: rowCount * (finalGroups.length - 1),
        homeDataModified: newData
      });
    } else {
      const homeDataModified = _.clone(homeData);
      const newData = []
      homeDataModified.forEach(v => {
        if (v.product_detail === product_ratio) {
          finalGroups.forEach(finalGroup => {
            newData.push({ ...v, bussinessType: finalGroup.value, ratio: finalGroup.ratio, referenceID: v._id })
          })
        }
      })
      // Sync up to homeDataCopy
      const homeDataCopy = this.getSynchronizedHomeData(newData)
      this.gridApi.refreshCells()
      this.setState({
        ...this.state,
        status: 'APPENDED',
        actionType: "UpdateRatio",
        addedCount: rowCount * (finalGroups.length - 1),
        homeDataCopy,
        homeDataModified: newData
      });
    }
  }

  getSynchronizedHomeData(modifiedData = []) {
    const { homeDataCopy = [] } = this.state;
    const newData = []
    homeDataCopy.forEach(v => {
      if (modifiedData.find(k => k._id === v._id)) {
        newData.push(...modifiedData.filter(k => k._id === v._id))
      } else {
        newData.push(v)
      }
    })
    return newData;
  }
  
  clone() {
    const { homeDataModified = [] } = this.state;
    const rowCount = this.gridApi.getDisplayedRowCount();
    const newData = []
    homeDataModified.forEach(v => {
      new Array(rowCount).fill(0).forEach(() => {
        newData.push(v)
      })
    })
    this.setState({
      ...this.state,
      status: 'APPENDED',
      homeDataModified: newData
    });
  }

  resetGroups() {
    this.setState({
      ...this.state,
      groups: [{ value: '', ratio: '' }],
      addedCount: 0
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

  filterByColumnAndSearchKey(columnKey, searchKey) {
    // Get a reference to the filter instance
    const filterInstance = this.gridApi.getFilterInstance(columnKey); 

    // Set the filter model
    filterInstance.setModel({
        filterType: 'text',
        type: 'contains',
        filter: searchKey,
    });

    // Tell grid to run filter operation again
    this.gridApi.onFilterChanged();
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
export default connect(mapStateToProps, mapDispatchToProps)(AdvanceRatio);
