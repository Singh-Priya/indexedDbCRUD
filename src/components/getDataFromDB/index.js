import LocationDBHandler from "../../components/createDatabase";

let db = LocationDBHandler("LocationDB", {
  locationData:
    "++id, locationName, address1, suiteNo, address2, city, state, zipCode, phoneNumber, timeZone, appoitpool",
});

const getDataFromDB = (dbName, indexofData) => {
  let index = 0;
  let sortedData = {};
  dbName.count((count) => {
    if (count) {
      db.locationData.each((data) => {
        sortedData = sortData(data);
        indexofData(sortedData, index++);
      });
    } else {
      indexofData(0);
    }
  });
};

const sortData = (data) => {
  let dataObj = {
    id: data.id,
    locationName: data.locationName,
    address1: data.address1,
    suiteNo: data.suiteNo,
    address2: data.address2,
    city: data.city,
    state: data.state,
    zipcode: data.zipCode,
    phoneNumber: data.phoneNumber,
    timeZone: data.timeZone,
    appoitpool: data.appoitpool,
  };
  return dataObj;
};

export default getDataFromDB;

export { sortData };
