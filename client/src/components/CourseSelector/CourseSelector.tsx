import './CourseSelector.scss';

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
  return (
    <div className="course-selector">
      <label htmlFor="course-select">Selecionar percurso:</label>
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
