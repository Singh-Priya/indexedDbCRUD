import React, { Component } from "react";
import LocationDBHandler from "../../components/createDatabase";
import getDataFromDB from "../../components/getDataFromDB";

let db = LocationDBHandler("LocationDB", {
  locationData:
    "++id, locationName, address1, suiteNo, address2, city, state, zipCode, phoneNumber, timeZone, appoitpool",
});

class LocationList extends Component {
  state = {
    data: {},
  };
  render() {
    getDataFromDB(db.locationData, (locationData) => {
      this.setState({ data: locationData });
      console.log("state data of list", this.state.data);
      console.log(locationData.id);
    });
    return (
      <table className="listing_wrap">
        <thead>
          <tr>
            <th className="count" style={{ width: "30px" }}>
              &nbsp;
            </th>
            <th style={{ width: "28%" }}>Location Name</th>
            <th style={{ width: "48%" }}>Address</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="count">1</td>
            <td>Logix</td>
            <td>Test</td>
            <td>(756) 565-6565</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default LocationList;
