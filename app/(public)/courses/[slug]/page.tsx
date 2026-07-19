import { notFound } from "next/navigation";

import { CourseDetail } from "@/features/courses/components/CourseDetail";
import { coursesData } from "@/features/courses/data/coursesData";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound(); // 404
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
     
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CourseDetail course={course} />
        </div>
      </section>
      
    </div>
  );
}