import { useEffect, useState } from 'react';
import { getCourses } from '../../services/coursesService';
import { getSummary } from '../../services/summaryService';
import { getVehicle } from '../../services/vehicleService';
import { MapView } from './MapView';

export function MapPage() {
  const [courses, setCourses] = useState([]);
  const [summary, setSummary] = useState(null);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const [coursesRes, summaryRes, vehicleRes] = await Promise.all([
        getCourses(),
        getSummary(),
        getVehicle(),
      ]);

      setCourses(coursesRes.data);
      setSummary(summaryRes.data[0]);
      setVehicle(vehicleRes.data[0]);
    }

    fetchData();
  }, []);

  if (!courses.length || !summary || !vehicle) {
    return <p>Loading...</p>;
  }

  const gpsPoints = courses[0]?.gps?.map((point: any) => ({
    lat: point.latitude,
    lng: point.longitude,
  }));

  return (
    <div className="page-wrapper">
      {gpsPoints?.length ? (
        <MapView gpsPoints={gpsPoints} />
      ) : (
        <p>Nenhum dado GPS disponível.</p>
      )}

      <p>Veículo: {vehicle.plate}</p>
      <p>Total de percursos: {summary.num_courses}</p>
      <p>Velocidade máxima: {summary.speed_max.toFixed(2)} km/h</p>
    </div>
  );
}
