import { useEffect, useRef, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import { createCarDivIcon, getAngleBetweenPoints } from '../../utils/carUtils';

type GpsPoint = { lat: number; lng: number; direction: number };

type Props = {
  gpsPoints: GpsPoint[];
  speed: number;
};

export function CarAnimation({ gpsPoints, speed }: Props) {
  const map = useMap();
  const zoom = map.getZoom();
  const baseZoom = 15;
  const visualScale = 1;
  const scaleFactor = Math.pow(1.05, zoom - baseZoom) * visualScale;
  const iconSize: [number, number] = [152 * scaleFactor, 151 * scaleFactor];

  const [position, setPosition] = useState<LatLngExpression>([gpsPoints[0].lat, gpsPoints[0].lng]);
  const [icon, setIcon] = useState<L.Icon>(createCarDivIcon(0, iconSize));

  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current >= gpsPoints.length - 1) {
        clearInterval(interval);
        return;
      }

      const current = gpsPoints[indexRef.current];
      const next = gpsPoints[indexRef.current + 1];
      const angle = typeof current.direction === 'number'
        ? current.direction
        : getAngleBetweenPoints(current, next);

      setPosition([current.lat, current.lng]);
      setIcon(createCarDivIcon(angle, iconSize));

      indexRef.current += 1;
    }, Math.max(30, 1000 / (speed / 10)));

    return () => clearInterval(interval);
  }, [gpsPoints, speed]);

  return <Marker position={position} icon={icon} />;
}
