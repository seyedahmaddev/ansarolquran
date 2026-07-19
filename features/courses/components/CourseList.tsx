import { Course } from "../types/course.types";
import { CourseCard } from "./CourseCard";

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}