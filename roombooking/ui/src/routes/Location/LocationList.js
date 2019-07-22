import React, {Component} from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import hoc from "./hoc";
import classnames from "classnames/bind";
import styles from "./Location.css";
const locationCss = classnames.bind(styles);


class LocationList extends Component {
  componentDidMount() {
    this.props.fetchLocationAction();
  }

  onLocationDelete = (cell, row, rowIndex) => {
    let confirm = window.confirm(
      "are you sure you want to delete location ..?? "
    );
    if (confirm) {
      this.props.deleteLocationAction(row.locationID);
    }
  };

  nameFormatter = (cell, row, enumObject, rowIndex) => {
    return (
      <span>
        {cell}{" "}
        <small className={locationCss("edit-location")} aria-hidden="true">
          edit
        </small>
      </span>
    );
  };

  deleteButtonFormatter = (cell, row, enumObject, rowIndex) => {
    return (
      <button
        className="btn btn-danger btn-sm"
        type="button"
        onClick={() => this.onLocationDelete(cell, row, rowIndex)}
      >
        Delete
      </button>
    );
  };

  onAfterSaveCell = (row, cellName, cellValue) => {
    let rowStr = {};
    for (const prop in row) {
      if (prop === "locationID" || prop === "locationName") {
        rowStr[prop] = row[prop];
      }
    }
    this.props.editLocationAction(JSON.stringify(rowStr));
  };

  onBeforeSaveCell(row, cellName, cellValue) {
    if (row.locationName === cellValue) {
      return false;
    }
    let confirm = window.confirm("Are you sure you want to save changes ..?? ");
    if (!confirm) {
      return false;
    }
    return true;
  }

  cellEditProp = {
    mode: "click",
    blurToSave: true,
    beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
  };

  render() {
    return (
      <BootstrapTable
        data={this.props.LocationList}
        cellEdit={this.cellEditProp}
        striped
        hover
      >
        <TableHeaderColumn
          isKey
          dataField="locationID"
          editable={false}
          width={"15%"}
        >
          Location ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="locationName"
          dataFormat={this.nameFormatter}
          width={"70%"}
        >
          Location Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="button"
          editable={false}
          dataFormat={this.deleteButtonFormatter}
          width={"15%"}
        />
      </BootstrapTable>
    );
  }
}


export default (hoc(LocationList));