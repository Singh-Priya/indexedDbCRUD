import LocationDBHandler from "../../components/createDatabase";

let db = LocationDBHandler();

const getDataFromDB = (dbName, indexofData) => {
  let index = 0;
  let sortedData = {};
  let newdata = [];
  dbName.count((count) => {
    if (count) {
      db.locationData.each((table) => {
        sortedData = sortData(table);
        // console.log("sorted data", sortedData);
        newdata.push(sortedData);
        // console.log("newdata", newdata);
        indexofData(newdata, index++);
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
    address: `${data.address1}, ${data.suiteNo}, ${data.address2}, ${data.city}, ${data.state}, ${data.zipCode}`,
    phoneNumber: data.phoneNumber,
  };
  return dataObj;
};

export default getDataFromDB;

export { sortData };
