import L from "leaflet";

export function getAngleBetweenPoints(
  p1: { lat: number; lng: number },
  p2: { lat: number; lng: number }
): number {
  const dx = p2.lng - p1.lng;
  const dy = p2.lat - p1.lat;

  if (Math.abs(dx) < 0.00001 && Math.abs(dy) < 0.00001) {
    return 0;
  }

  const angleRad = Math.atan2(dy, dx);
  const angleDeg = (angleRad * 180) / Math.PI;
  return (angleDeg + 360) % 360;
}

export function createCarDivIcon(angle: number, size: [number, number] = [152, 151]): L.DivIcon {
  const frameWidth = 152;
  const frameHeight = 151;
  const degreesPerFrame = 360 / 120;
  const spriteOffset = 245;
  const adjustedAngle = (((angle + spriteOffset) % 360) + 360);
  const frameIndex = Math.floor(adjustedAngle / degreesPerFrame) % 120;
  const offsetX = frameIndex * frameWidth;

  return L.divIcon({
    className: 'car-icon',
    html: `
      <div class="car-sprite" style="
        width: ${frameWidth}px;
        height: ${frameHeight}px;
        background-position: -${offsetX}px 0;
      "></div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}
