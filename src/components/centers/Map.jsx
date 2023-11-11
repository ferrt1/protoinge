/* eslint-disable react/prop-types */
import "../../css/leaflet-container.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export const Map = ({ mapPosition }) => {
  const { center, zoom } = mapPosition;
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  return (

      <MapContainer
        ref={mapRef}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="flex h-full w-full md:m-auto md:h-full md:w-full rounded-xl z-0 my-0 py-0"
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup> Centro de atención médica </Popup>
        </Marker>
      </MapContainer>

  );
};

