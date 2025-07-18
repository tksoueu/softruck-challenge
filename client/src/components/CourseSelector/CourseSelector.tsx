import './CourseSelector.scss';
import { useTranslation } from 'react-i18next';

type Course = {
  start_at: string;
  end_at: string;
};

type Props = {
  courses: Course[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

export function CourseSelector({ courses, selectedIndex, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div className="course-selector">
      <label htmlFor="course-select">{t('courseSelector.label')}</label>
      <select
        id="course-select"
        value={selectedIndex}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {courses.map((course, index) => (
          <option key={index} value={index}>
            {new Date(course.start_at).toLocaleString()} →{' '}
            {new Date(course.end_at).toLocaleTimeString()}
          </option>
        ))}
      </select>
    </div>
  );
}
