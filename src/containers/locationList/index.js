import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import LocationDBHandler from "../../components/createDatabase";
import getDataFromDB from "../../components/getDataFromDB";
import NoLocation from "../../components/noLocation";
import EditIcon from "../../assests/images/edit-tools.svg";
import DeleteIcon from "../../assests/images/interface.svg";

let db = LocationDBHandler();

class LocationList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    getDataFromDB(db.locationData, (locationData) => {
      if (locationData) {
        this.setState({ data: locationData });
      }
    });
  }

  editDatahandler = (e) => {
    let editId = parseInt(e.target.parentElement.parentElement.id);
    this.props.history.push("/addlocation");
    db.locationData.get(editId, (locationData) => {
      console.log("locationData in edit", locationData);
      document.getElementById("location_name").value =
        locationData.locationName;
      document.getElementById("address1").value = locationData.address2;
      document.getElementById("suite").value = locationData.suiteNo;
      document.getElementById("address2").value = locationData.address2;
      document.getElementById("city").value = locationData.city;
      document.getElementById("state").value = locationData.state;
      document.getElementById("zip_code").value = locationData.zipCode;
      document.getElementById("phone_number").value = locationData.phoneNumber;
      document.getElementById("time_zone").value = locationData.timeZone;
      document.getElementById("appointment_pool").value =
        locationData.appoitpool;
    });
  };

  deleteDataHandler = (e) => {
    let deleteId = parseInt(e.target.parentElement.parentElement.id);
    db.locationData.delete(deleteId);
    getDataFromDB(db.locationData, (locationData) => {
      if (locationData) {
        this.setState({ data: locationData });
      }
    });
  };

  render() {
    console.log("total data", this.state.data);
    const { data } = this.state;
    let iddd = data.map((item) => item.id);
    return (
      <Fragment>
        {data ? (
          <table className="listing_wrap">
            <thead>
              <tr>
                <th className="count" style={{ width: "30px" }}>
                  &nbsp;
                </th>
                <th style={{ width: "28%" }}>Location Name</th>
                <th style={{ width: "48%" }}>Address</th>
                <th>Phone No.</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr id={iddd[index]}>
                  {Object.keys(item).map((val) => (
                    <td>{item[val]}</td>
                  ))}
                  <td>
                    <img
                      onClick={(event) => this.editDatahandler(event)}
                      style={{ width: "15px", cursor: "pointer" }}
                      src={EditIcon}
                      alt="edit"
                    />{" "}
                  </td>
                  <td>
                    <img
                      onClick={(event) => this.deleteDataHandler(event)}
                      style={{ width: "15px", cursor: "pointer" }}
                      src={DeleteIcon}
                      alt="delete"
                    />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoLocation />
        )}
      </Fragment>
    );
  }
}

export default withRouter(LocationList);
