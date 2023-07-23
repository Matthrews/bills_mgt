import React, { Component } from "react";
import { Button, Input } from "antd";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import PropTypes from "prop-types";

class Stats extends Component {
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
        // 产品名称
        {
          field: "productName",
          filter: true,
          sortable: true,
          headerName: "产品名称",
        },
        // 占比
        {
          field: "ratio",
          filter: true,
          sortable: true,
          headerName: "占比",
        },
        // 业务
        {
          field: "amountPayable",
          filter: true,
          sortable: true,
          headerName: "应付金额",
        },
      ],
    };
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

  render() {
    const { dataSource = [] } = this.props;
    const { popupParent, defaultColDef, columnDefs } = this.state;
    return (
      <div className="stats-container">
        <div className="d-flex my-sm-2">
          <Input
            style={{ maxWidth: 200 }}
            class="form-control me-sm-2"
            type="search"
            placeholder="Fuzzy search"
            onChange={(e) => this.onSearch(e)}
          />
          <Button type="primary" className="mx-sm-2" onClick={() => this.onBtnExport()}>
            导出 Excel
          </Button>
        </div>

        <div
          id="gridContainer"
          className="ag-theme-alpine"
          style={{ height: "calc(100vh - 250px)", width: "100%" }}
        >
          <AgGridReact
            defaultColDef={defaultColDef}
            popupParent={popupParent}
            rowData={dataSource}
            columnDefs={columnDefs}
            onGridReady={this.onGridReady}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
};

Stats.defaultProps = {
  dataSource: [],
};

export default Stats;
