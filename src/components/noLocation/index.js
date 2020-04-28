import React from "react";
import noLocationImg from "../../assests/images/location.jpg";

const NoLocation = () => {
  return (
    <div className="nolocation_wrap">
      <img src={noLocationImg} alt="noLocation" />
      <h4>Kindly Add Your Location First</h4>
      <p>There is no location added right now</p>
    </div>
  );
};

export default NoLocation;
