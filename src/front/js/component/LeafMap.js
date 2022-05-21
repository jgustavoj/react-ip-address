import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../../styles/_leaf-map.scss";

export const LeafMap = () => {
  const { store, actions } = useContext(Context);
  // console.log("data", store.content.location);

  const icon = new Icon({
    iconUrl:
      "https://res.cloudinary.com/dgiw6qnle/image/upload/v1652821738/icon-location_gaeth6.svg",
    iconSize: [40, 45],
  });

  return (
    <>
      <MapContainer
        // center={[store.content.location.lat, store.content.location.lng]}
        zoom={18}
        style={{ position: "static" }}
        scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <Marker
          position={[store.content.location.lat, store.content.location.lng]}
          icon={icon}
        /> */}
      </MapContainer>
    </>
  );
};
