// import React from 'react';
import Dexie from "dexie";

const LocationDBHandler = (dbName, locationData) => {
  const db = new Dexie(dbName);
  db.version(1).stores(locationData);
  db.open();
  return db;
};

export default LocationDBHandler;
