import "../css/leaflet-container.css"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <div className="h-screen w-screen">
      <MapContainer 
      center={[-34.52230, -58.70029]} 
      zoom={17} 
      scrollWheelZoom={false} 
      className="flex align-bottom m-auto h-3/4 w-3/4"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
