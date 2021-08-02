import React from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords);
  return null;
}

const Map = ({ data }) => {
  return (
    <MapContainer
      center={[data.lat, data.lng]}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <Marker position={[data.lat, data.lng]}>
        <Popup>{"Location"}</Popup>
      </Marker>
      <SetViewOnClick coords={[data.lat, data.lng]} />
    </MapContainer>
  );
};

export default Map;
