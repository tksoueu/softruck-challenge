import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { LatLngExpression, icon } from 'leaflet';

type Props = {
  gpsPoints: { lat: number; lng: number }[];
};

export function MapView({ gpsPoints }: Props) {
  if (!gpsPoints.length) return null;

  const startPosition: LatLngExpression = [gpsPoints[0].lat, gpsPoints[0].lng];

  return (
    <MapContainer
      className="custom-map"
      center={startPosition}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline positions={gpsPoints.map(p => [p.lat, p.lng])} color="blue" />

      <Marker position={startPosition} icon={icon({ iconUrl: 'marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })} />
    </MapContainer>
  );
}
