import './VehicleInfoCard.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  plate: string;
  totalCourses: number;
  speedMax: number;
};

export function VehicleInfoCard({ plate, totalCourses, speedMax }: Props) {
  const { t } = useTranslation();

  return (
    <div className="vehicle-card">
      <p><strong>{t('vehicleInfo.vehicle')}</strong> {plate}</p>
      <p><strong>{t('vehicleInfo.totalCourses')}</strong> {totalCourses}</p>
      <p><strong>{t('vehicleInfo.maxSpeed')}</strong> {speedMax.toFixed(2)} km/h</p>
    </div>
  );
}
