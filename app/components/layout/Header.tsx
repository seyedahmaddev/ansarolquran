import Link from "next/link";

// ==================== کامپوننت هدر ====================
export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* لوگو (کامنت شده) */}
        {/* <Image src="/logo.png" alt="انصارالقرآن" width={40} height={40} /> */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-emerald-700">انصارالقرآن</span>
          <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">آموزش قرآن</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-emerald-600 transition">صفحه اصلی</Link>
          <Link href="/courses" className="hover:text-emerald-600 transition">دوره‌ها</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">درباره ما</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition">تماس با ما</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
          >
            ورود
          </Link>
          <Link
            href="/register"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-full transition shadow-sm"
          >
            ثبت‌نام
          </Link>
        </div>
      </div>
    </header>
  );
}