 // یا همان هدر ساده که در صفحات دیگر دارید

import { CourseList } from "@/features/courses/components/CourseList";
import { coursesData } from "@/features/courses/data/coursesData";
import { Search, Filter } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* بخش بالایی با بک‌گراند رنگی */}
      <section className="bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/80 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">
              دوره‌های آموزشی <span className="text-emerald-600">انصارالقرآن</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              از روخوانی تا تفسیر، همه دوره‌ها با کیفیت بالا و پشتیبانی مداوم
            </p>
            {/* جستجوی ساده (فقط UI) */}
            <div className="mt-6 max-w-md mx-auto flex items-center gap-2 bg-white rounded-full shadow-sm border border-gray-200 px-4 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="جستجوی دوره..."
                className="w-full outline-none text-sm bg-transparent"
              />
              <button className="bg-emerald-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-emerald-700 transition">
                جستجو
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* لیست دوره‌ها */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CourseList courses={coursesData} />
        </div>
      </section>

    </div>
  );
}