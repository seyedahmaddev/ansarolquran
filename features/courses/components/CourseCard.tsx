import Link from "next/link";
import { Course } from "../types/course.types";
import { ChevronLeft, Clock, User, Tag } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden group">
      {/* تصویر (در صورت وجود) */}
      {course.coverImage ? (
        <div className="h-48 bg-gray-200 relative">
          {/* <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center text-emerald-700 font-bold text-2xl">
          📖
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{course.title}</h3>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              course.price === "رایگان"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {course.price}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{course.description}</p>

        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {course.instructor}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            {course.level}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {course.tags?.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-4 w-full inline-flex justify-center items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 hover:border-emerald-300 px-4 py-2 rounded-full transition"
        >
          مشاهده دوره
          <ChevronLeft className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}