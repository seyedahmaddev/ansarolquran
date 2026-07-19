import Link from "next/link";
// ==================== فوتر ====================
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl">انصارالقرآن</h3>
            <p className="mt-2 text-sm leading-relaxed">
              سامانه جامع آموزش قرآن کریم با رویکردی نوین و اساتید مجرب.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="hover:text-amber-400 transition">روبیكا</a>
              <a href="#" className="hover:text-amber-400 transition">اپارات</a>
              <a href="#" className="hover:text-amber-400 transition">ایتا</a>
              <a href="#" className="hover:text-amber-400 transition">بله</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold">دسترسی سریع</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/" className="hover:text-white transition">صفحه اصلی</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">دوره‌ها</Link></li>
              <li><Link href="/about" className="hover:text-white transition">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">تماس با ما</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">دوره‌ها</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="#">روخوانی</Link></li>
              <li><Link href="#">روانخوانی</Link></li>
              <li><Link href="#">حفظ و قرائت</Link></li>
              <li><Link href="#">دوره کودکان</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">تماس</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>۰۲۱-۲۲۹۸۶۶۳۴</li>
              <li>۰۹۰۳۴۲۶۰۴۵۴</li>
              <li>
                <a href="mailto:ansarolquran@gmail.com" className="hover:text-white transition">
                  ansarolquran@gmail.com
                </a>
              </li>
              <li>تهران، پاسداران، آموزش مجازی</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © ۱۴۰۴ تمامی حقوق برای انصارالقرآن محفوظ است.
        </div>
      </div>
    </footer>
  );
}