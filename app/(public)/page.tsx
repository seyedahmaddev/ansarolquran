"use client";

import { useState } from "react";
import {
  ChevronDown,
  Users,
  BookOpen,
  Award,
  Calendar,
  Clock,
  Star,
  MessageCircle,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


// ==================== بخش قهرمان (Hero) ====================
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🌙 بیست سال تجربه در آموزش قرآن
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            با <span className="text-emerald-600">انصارالقرآن</span>،
            <br />
            قرآن را <span className="text-amber-600">آسان</span> بیاموزید
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            دوره‌های تخصصی روخوانی، روانخوانی، حفظ، تفسیر و تجوید قرآن کریم
            با اساتید مجرب و متدهای نوین آموزشی
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-emerald-200 flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              شروع یادگیری
            </Link>
            <Link
              href="#courses"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-full border border-gray-200 transition shadow-sm flex items-center gap-2"
            >
              مشاهده دوره‌ها
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* المان تزئینی */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ==================== بخش آمار ====================
function StatsSection() {
  const stats = [
    { label: "دانش‌پذیران", value: "+۷۵", icon: Users, desc: "در طول ۱۰ سال" },
    { label: "دوره‌های فعال", value: "۱۲", icon: BookOpen, desc: "روخوانی تا تفسیر" },
    { label: "سال تجربه", value: "۱۰", icon: Award, desc: "مدرسه تخصصی" },
    { label: "جلسات برگزار شده", value: "+۵۰۰", icon: Calendar, desc: "آنلاین و حضوری" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-gray-50/80 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 mx-auto text-emerald-600" />
              <div className="mt-3 text-2xl font-bold text-gray-900">{item.value}</div>
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
              <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== بخش دوره‌های آموزشی ====================
function CoursesSection() {
  const courses = [
    {
      title: "روخوانی قرآن",
      desc: "آموزش اصولی روخوانی از مبتدی تا پیشرفته با تمرین‌های عملی",
      level: "مبتدی تا متوسط",
      price: "رایگان",
      tag: "محبوب",
    },
    {
      title: "روانخوانی",
      desc: "روان‌خوانی با تکنیک‌های جدید و تمرین‌های تعاملی",
      level: "متوسط",
      price: "رایگان",
      tag: "جدید",
    },
    {
      title: "دوره‌های کودکان",
      desc: "آموزش قرآن به کودکان با روش‌های جذاب، بازی و قصه",
      level: "۵ تا ۱۲ سال",
      price: "رایگان",
      tag: "ویژه",
    },
    {
      title: "حفظ قرآن",
      desc: "دوره تخصصی حفظ با برنامه‌ریزی روزانه و پشتیبانی",
      level: "همه سطوح",
      price: "پولی",
      tag: "پیشرفته",
    },
    {
      title: "قرائت و تجوید",
      desc: "آموزش قواعد تجوید و قرائت صحیح با اساتید مجرب",
      level: "متوسط تا پیشرفته",
      price: "پولی",
      tag: "تخصصی",
    },
    {
      title: "تفسیر قرآن",
      desc: "آشنایی با مفاهیم و تفسیر آیات به زبان ساده و کاربردی",
      level: "همه سطوح",
      price: "رایگان",
      tag: "معرفتی",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
            دوره‌های ما
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            متنوع‌ترین دوره‌های آموزشی قرآن
          </h2>
          <p className="mt-4 text-gray-600">
            از روخوانی تا تفسیر، همه دوره‌ها با کیفیت بالا و پشتیبانی مداوم
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      course.tag === "محبوب"
                        ? "bg-amber-100 text-amber-700"
                        : course.tag === "جدید"
                        ? "bg-blue-100 text-blue-700"
                        : course.tag === "ویژه"
                        ? "bg-rose-100 text-rose-700"
                        : course.tag === "پیشرفته"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {course.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{course.desc}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">سطح: {course.level}</span>
                  <span
                    className={`font-semibold ${
                      course.price === "رایگان" ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {course.price}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="#"
                  className="w-full inline-flex justify-center items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 hover:border-emerald-300 px-4 py-2 rounded-full transition"
                >
                  مشاهده دوره
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            مشاهده همه دوره‌ها
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== بخش اساتید ====================
function InstructorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full">
            اساتید ما
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            با استادان مجرب آشنا شوید
          </h2>
          <p className="mt-4 text-gray-600">همه اساتید دارای مدرک تخصصی و سال‌ها تجربه در آموزش قرآن</p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-8 text-center shadow-md border border-emerald-100">
            <div className="w-32 h-32 mx-auto rounded-full bg-emerald-200 flex items-center justify-center text-5xl font-bold text-emerald-700">
              س
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">سیداحمد غلامی</h3>
            <p className="text-emerald-600 font-medium">مؤسس و مدرس ارشد</p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              بیش از ۱۰ سال تجربه در آموزش روخوانی، روانخوانی، حفظ و تفسیر قرآن.
              تربیت بیش از ۷۵ دانش‌پذیر در دوره‌های مختلف.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
              <span>⭐ ۴.۹ از ۵</span>
              <span>•</span>
              <span>🎓 ۱۰ سال تجربه</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== بخش نظرات دانش‌پذیران ====================
function TestimonialsSection() {
  const testimonials = [
    {
      name: "مریم رضایی",
      text: "بسیار عالی! روش تدریس استاد غلامی واقعاً مؤثر بود. من در کمتر از ۶ ماه روخوانی را کامل یاد گرفتم.",
      rating: 5,
    },
    {
      name: "محمد کریمی",
      text: "دوره حفظ قرآن انصارالقرآن به من کمک کرد تا برنامه‌ریزی منظمی داشته باشم و تاکنون ۵ جزء را حفظ کرده‌ام.",
      rating: 5,
    },
    {
      name: "فاطمه حسینی",
      text: "کلاس‌های روانخوانی برای فرزندم بسیار مفید بود. الان با علاقه قرآن می‌خواند و پیشرفت چشمگیری داشته.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
            نظرات دانش‌پذیران
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            آنچه دیگران می‌گویند
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              <p className="mt-4 font-semibold text-gray-900">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== بخش مزایا ====================
function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "دسترسی همیشگی",
      desc: "به تمام محتوای دوره‌ها در هر زمان و مکانی دسترسی دارید",
    },
    {
      icon: MessageCircle,
      title: "پشتیبانی مداوم",
      desc: "تیم پشتیبانی پاسخگوی سوالات شما در تمام مراحل یادگیری است",
    },
    {
      icon: Award,
      title: "گواهینامه معتبر",
      desc: "پس از پایان هر دوره، گواهینامه معتبر دریافت می‌کنید",
    },
    {
      icon: Users,
      title: "یادگیری تعاملی",
      desc: "فضای پرسش و پاسخ و تعامل با اساتید و دیگر دانش‌پذیران",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            چرا <span className="text-emerald-600">انصارالقرآن</span>؟
          </h2>
          <p className="mt-4 text-gray-600">مزایای یادگیری در بزرگترین سامانه آموزش قرآن</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50/70 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-200 transition">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== بخش پرسش و پاسخ (FAQ) ====================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "آیا دوره‌ها کاملاً آنلاین هستند؟",
      a: "بله، تمام دوره‌ها به صورت کاملاً آنلاین و غیرحضوری برگزار می‌شوند. شما می‌توانید در هر زمان و مکانی به محتوا دسترسی داشته باشید.",
    },
    {
      q: "چطور می‌توانم در دوره ثبت‌نام کنم؟",
      a: "کافی است در سایت ثبت‌نام کنید، سپس از بین دوره‌های موجود، دوره مورد نظر خود را انتخاب و ثبت‌نام نمایید. دوره‌های رایگان نیازی به پرداخت ندارند.",
    },
    {
      q: "آیا گواهینامه ارائه می‌شود؟",
      a: "بله، پس از گذراندن موفقیت‌آمیز هر دوره، گواهینامه معتبر با تأیید استاد به شما اعطا می‌شود.",
    },
    {
      q: "چه مدت به محتوای دوره دسترسی دارم؟",
      a: "دسترسی به محتوای دوره‌ها تا یک سال پس از ثبت‌نام برای شما فعال خواهد بود و می‌توانید در هر زمان مرور کنید.",
    },
    {
      q: "آیا دوره‌های کودکان هم دارید؟",
      a: "بله، دوره‌های ویژه کودکان ۵ تا ۱۲ سال با روش‌های بازی‌محور و جذاب طراحی شده است.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full">
            پرسش‌های متداول
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            سوالات شما، پاسخ ما
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-medium text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== بخش تایم‌لاین اخبار و رویدادها ====================
function TimelineSection() {
  const events = [
    {
      date: "خرداد ۱۴۰۴",
      title: "حمله نظامی آمریکا",
      description: "حمله گسترده آمریکا به مواضع نظامی ایران در خلیج فارس و آغاز تنش‌های جدید",
      icon: "⚔️",
    },
    {
      date: "اسفند ۱۴۰۴",
      title: "ادامه حملات و پایان جنگ",
      description: "سلسله حملات متقابل و در نهایت آتش‌بس با میانجی‌گری سازمان ملل",
      icon: "🕊️",
    },
    {
      date: "فروردین ۱۴۰۵",
      title: "تشییع پیکر شهدا",
      description: "مراسم تشییع پیکر پاک شهدای مدافع حرم و میهن با حضور گسترده مردم",
      icon: "🌹",
    },
    {
      date: "در انتظار",
      title: "انتظار برای انتقام",
      description: "انتظار برای تحقق وعده‌های الهی و انتقام از ظالمان",
      icon: "🤲",
    },
    {
      date: "افق نور",
      title: "انتظار برای فرج",
      description: "چشم‌داشت ظهور منجی و برقراری عدالت جهانی",
      icon: "🌙",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full">
            اخبار و رویدادها
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            تقویم رویدادهای مهم
          </h2>
          <p className="mt-4 text-gray-600">مرور تاریخ و رویدادهای تأثیرگذار در مسیر انقلاب و انتظار</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* خط عمودی */}
          <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block" />

          <div className="space-y-8 pr-4 md:pr-12">
            {events.map((event, index) => (
              <div key={index} className="relative flex gap-4 items-start">
                {/* نقطه روی خط */}
                <div className="hidden md:block absolute right-0 top-1.5 w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow" />

                <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-center gap-3 text-sm text-amber-600 font-semibold">
                    <span className="bg-amber-100 px-3 py-1 rounded-full text-xs">
                      {event.date}
                    </span>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">{event.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== بخش CTA نهایی ====================
function FinalCTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-amber-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          آماده‌اید قرآن را به زیبایی بیاموزید؟
        </h2>
        <p className="mt-4 text-emerald-50 max-w-2xl mx-auto">
          همین حالا ثبت‌نام کنید و از دوره‌های رایگان و پولی ما بهره‌مند شوید.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="bg-white text-emerald-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition shadow-lg"
          >
            شروع یادگیری
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </section>
  );
}


// ==================== صفحه اصلی ====================
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FAQSection />
      <TimelineSection />
      <FinalCTASection />
      
    </div>
  );
}