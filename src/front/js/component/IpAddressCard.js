import React from "react";

export const IpAddressCard = (props) => {
  return (
    <>
      <div className="info-card d-flex align-items-center d-flex flex-column py-3">
        <div className="info-card__value d-flex align-items-center d-flex flex-column">
          <p>IP Address</p>
          {props.ip}
        </div>
        <div className="info-card__value d-flex align-items-center d-flex flex-column">
          <p>Location</p>
          {props.city}, {props.region} {props.postalCode}
        </div>
        <div className="info-card__value d-flex align-items-center d-flex flex-column">
          <p>Timezone</p>
          {props.timezone}
        </div>
        <div className="info-card__value d-flex align-items-center d-flex flex-column">
          <p>ISP</p>
          {props.isp}
        </div>
      </div>
    </>
  );
};
