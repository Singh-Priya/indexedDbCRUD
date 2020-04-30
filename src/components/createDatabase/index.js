// import React from 'react';
import Dexie from "dexie";

let LocationDBHandler = () => {
  const db = new Dexie("LocationDB");
  db.version(1).stores({
    locationData:
      "++id, locationName, address1, suiteNo, address2, city, state, zipCode, phoneNumber, timeZone, appoitpool",
  });
  db.open();
  return db;
};

export default LocationDBHandler;
