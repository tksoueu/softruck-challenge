import { useEffect, useState } from 'react';
import { getCourses } from '../../services/coursesService';
import { getSummary } from '../../services/summaryService';
import { getVehicle } from '../../services/vehicleService';
import { MapView } from './MapView';
import { CourseSelector } from '../../components/CourseSelector/CourseSelector';
import { VehicleInfoCard } from '../../components/VehicleInfoCard/VehicleInfoCard';
import { useTranslation } from 'react-i18next';

function interpolatePoints(
  points: { lat: number; lng: number }[],
  stepsPerSegment = 10
): { lat: number; lng: number }[] {
  const interpolated: { lat: number; lng: number }[] = [];

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];

    for (let step = 0; step < stepsPerSegment; step++) {
      const t = step / stepsPerSegment;
      interpolated.push({
        lat: p1.lat + (p2.lat - p1.lat) * t,
        lng: p1.lng + (p2.lng - p1.lng) * t,
      });
    }
  }

  interpolated.push(points[points.length - 1]);
  return interpolated;
}

export function MapPage() {
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]);
  const [summary, setSummary] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

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
    return <p>{t('map.loading')}</p>;
  }

  const selectedCourse = courses[selectedCourseIndex];

  const rawGpsPoints = selectedCourse?.gps?.map((point: any) => ({
    lat: point.latitude,
    lng: point.longitude,
    direction: point.direction,
  }));

  const gpsPoints = interpolatePoints(rawGpsPoints, 10);

  return (
    <div className="page-wrapper">
      <div className="info-bar">
        <CourseSelector
          courses={courses}
          selectedIndex={selectedCourseIndex}
          onChange={setSelectedCourseIndex}
        />
        <VehicleInfoCard
          plate={vehicle.plate}
          totalCourses={summary.num_courses}
          speedMax={selectedCourse.speed_max}
        />
      </div>

      {gpsPoints?.length ? (
        <MapView 
          key={selectedCourseIndex} 
          gpsPoints={gpsPoints} 
          speed={selectedCourse.speed_max} 
        />
      ) : (
        <p>{t('map.noData')}</p>
      )}
    </div>
  );
}
