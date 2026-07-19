import { Course } from "../types/course.types";
import { ChevronLeft, User, Clock, Tag, BookOpen } from "lucide-react";
import Link from "next/link";

interface CourseDetailProps {
  course: Course;
}

export function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* هدر با تصویر یا گرادینت */}
      <div className="h-64 bg-gradient-to-r from-emerald-600 to-amber-600 flex items-center justify-center text-white text-5xl font-bold">
        📖 {course.title}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <span
            className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
              course.price === "رایگان"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {course.price}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> مدرس: {course.instructor}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> مدت: {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-4 h-4" /> سطح: {course.level}
          </span>
        </div>

        <div className="mt-6 prose prose-lg text-gray-700">
          <p className="leading-relaxed">{course.description}</p>
        </div>

        {course.lessons && course.lessons.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              سرفصل‌های دوره
            </h2>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.lessons.map((lesson, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition shadow-md"
          >
            ثبت‌نام در دوره
          </Link>
          <Link
            href="/courses"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            بازگشت به دوره‌ها
          </Link>
        </div>
      </div>
    </div>
  );
}