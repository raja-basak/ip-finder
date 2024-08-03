import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon, map } from "leaflet";

const Map = (props) => {
  return (
    <MapContainer
      center={[props.lat, props.long]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        key={1}
        position={[props.lat, props.long]}
      />
    </MapContainer>
  );
};

export default Map;
