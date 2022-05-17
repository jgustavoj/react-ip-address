import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../styles/_map.scss";

export const LeafMap = () => {
  const { store, actions } = useContext(Context);
  console.log("data", store.content.location);
  return (
    <>
      <MapContainer
        center={[store.content.location.lat, store.content.location.lng]}
        zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[store.content.location.lat, store.content.location.lng]}
        />
      </MapContainer>
    </>
  );
};
