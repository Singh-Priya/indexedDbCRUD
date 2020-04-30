import React, { Component } from "react";
import LocationDBHandler from "../../components/createDatabase";

let db = LocationDBHandler();

class AddLocation extends Component {
  state = {
    fieldEmpty: false,
  };

  insertData = (dataObj) => {
    let dbname = db.locationData;
    console.log("dbname>>", dbname);
    // for (const val in dataObj) {
    //   if (dataObj[val] !== "" && dataObj[val] !== null) {
    //     this.setState({ fieldEmpty: true });
    //   } else {
    //     this.setState({ fieldEmpty: false });
    //   }
    // }

    if (!this.state.fieldEmpty) {
      dbname.bulkAdd([dataObj]);
      console.log("data inserted!!");
    } else {
      console.log("Please provide the data!!");
    }
  };

  render() {
    return (
      <div className="addLocation_wrap">
        <h3>Add Location</h3>
        <form>
          <div className="form_group">
            <label>Location Name</label>
            <input type="text" id="location_name" autoComplete="off" />
          </div>

          <div className="form_wrap_half">
            <div className="form_group">
              <label>Address Line 1</label>
              <input type="text" id="address1" autoComplete="off" />
            </div>
            <div className="form_group">
              <label>Suite No.</label>
              <input type="text" id="suite" autoComplete="off" />
            </div>
          </div>

          <div className="form_wrap_three">
            <div className="form_group">
              <label>Address Line 2</label>
              <input type="text" id="address2" autoComplete="off" />
            </div>
            <div className="form_wrap">
              <div className="form_group">
                <label>City</label>
                <input type="text" id="city" autoComplete="off" />
              </div>
              <div className="form_group">
                <label>State</label>
                <input type="text" id="state" autoComplete="off" />
              </div>
            </div>
          </div>

          <div className="form_wrap_three">
            <div className="form_wrap">
              <div className="form_group">
                <label>Zip Code</label>
                <input type="text" id="zip_code" autoComplete="off" />
              </div>
              <div className="form_group">
                <label>Phone Number</label>
                <input type="text" id="phone_number" autoComplete="off" />
              </div>
            </div>
            <div className="form_group">
              <label>Time Zone</label>
              <input type="text" id="time_zone" autoComplete="off" />
            </div>
          </div>

          <div className="form_group">
            <label>Appointment Pool</label>
            <input type="text" id="appointment_pool" autoComplete="off" />
          </div>

          <div className="button_group">
            <button>Cancel</button>
            <span
              onClick={() =>
                this.insertData({
                  locationName: document.getElementById("location_name").value,
                  address1: document.getElementById("address1").value,
                  suiteNo: document.getElementById("suite").value,
                  address2: document.getElementById("address2").value,
                  city: document.getElementById("city").value,
                  state: document.getElementById("state").value,
                  zipCode: document.getElementById("zip_code").value,
                  phoneNumber: document.getElementById("phone_number").value,
                  timeZone: document.getElementById("time_zone").value,
                  appoitpool: document.getElementById("appointment_pool").value,
                })
              }
            >
              Save
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddLocation;
