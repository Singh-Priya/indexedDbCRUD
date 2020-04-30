import React, { Component } from "react";
import LocationDBHandler from "../../components/createDatabase";

let db = LocationDBHandler();

class AddLocation extends Component {
  state = {
    fieldEmpty: false,
    insertData: null,
  };

  insertData = (dataObj) => {
    let dbname = db.locationData;
    console.log("dbname>>", dbname);
    for (const val in dataObj) {
      if (dataObj[val] !== "" && dataObj[val] !== null) {
        this.setState({ fieldEmpty: true });
      } else {
        this.setState({ fieldEmpty: false });
      }
    }
    this.setState({ insertData: dataObj });
    console.log("insertData>>", this.state.insertData);
    console.log("dataObj>>", dataObj);
  };

  componentDidUpdate() {
    if (this.state.fieldEmpty === true) {
      db.locationData.bulkAdd([this.state.insertData]);
    } else {
      alert("Please provide the complete data!!");
    }
  }

  render() {
    console.log("empty field>>", this.state.fieldEmpty);
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
                <select name="state" id="state" class="form-control">
                  <option value="state">State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
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
                <input
                  type="tel"
                  id="phone_number"
                  autoComplete="off"
                  pattern="([0-9]{3})-[0-9]{2}-[0-9]{3}"
                  placeholder="(756)567-6567"
                />
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
