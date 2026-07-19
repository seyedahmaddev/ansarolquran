export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string; // مبتدی، متوسط، پیشرفته
  price: "رایگان" | "پولی";
  duration: string; // مثلاً "۱۲ جلسه"
  instructor: string;
  coverImage?: string; // آدرس تصویر (فعلاً خالی)
  tags?: string[];
  lessons?: string[]; // سرفصل‌های دوره
  createdAt?: string;
}