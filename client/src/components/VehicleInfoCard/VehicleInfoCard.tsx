import './VehicleInfoCard.scss';

type Props = {
  plate: string;
  totalCourses: number;
  speedMax: number;
};

export function VehicleInfoCard({ plate, totalCourses, speedMax }: Props) {
  return (
    <div className="vehicle-card">
      <p><strong>Veículo:</strong> {plate}</p>
      <p><strong>Total de percursos:</strong> {totalCourses}</p>
      <p><strong>Velocidade máxima:</strong> {speedMax.toFixed(2)} km/h</p>
    </div>
  );
}
