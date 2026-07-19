import Link from "next/link";
import { ChevronLeft, Target, Users, BookOpen, Heart, Globe, Lightbulb } from "lucide-react";


// ==================== فوتر ====================
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>© ۱۴۰۴ تمامی حقوق برای انصارالقرآن محفوظ است.</p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-amber-400 transition">روبیكا</a>
          <a href="#" className="hover:text-amber-400 transition">اپارات</a>
          <a href="#" className="hover:text-amber-400 transition">ایتا</a>
          <a href="#" className="hover:text-amber-400 transition">بله</a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// صفحه درباره ما
// ============================================================
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ===== بخش اول: معرفی با بک‌گراند رنگی ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/80 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              درباره <span className="text-emerald-600">انصارالقرآن</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              ما بر این باوریم که آموزش قرآن، نه یک انتخاب، بلکه یک <span className="text-emerald-700 font-semibold">وظیفهٔ الهی</span> است. 
              انصارالقرآن با هدف ترویج فرهنگ قرآنی و توانمندسازی مسلمانان در تلاوت، تدبر و عمل به قرآن، گام برداشته است.
            </p>
          </div>
        </div>
        {/* المان تزئینی پایین */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== بخش دوم: وظیفه مسلمانان ===== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-full">
                <BookOpen className="w-6 h-6 text-emerald-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                وظیفهٔ مسلمانان در آموختن قرآن
              </h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                قرآن کریم، کتاب هدایت و نور است و آموختن آن، نه تنها یک عبادت، بلکه یک ضرورت حیاتی برای هر مسلمان محسوب می‌شود. 
                پیامبر اکرم (ص) فرمودند: «خَیْرُکُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» (بهترین شما کسی است که قرآن را بیاموزد و به دیگران بیاموزد).
              </p>
              <p>
                آموختن قرآن، ما را با کلام خداوند آشنا می‌کند، ایمانمان را تقویت می‌بخشد و راه سعادت دنیا و آخرت را به ما نشان می‌دهد. 
                هر مسلمانی وظیفه دارد که حداقل روخوانی صحیح قرآن را بیاموزد و درک درستی از مفاهیم آن داشته باشد.
              </p>
              <p className="bg-amber-50/50 p-4 rounded-xl border-r-4 border-amber-400 text-amber-800">
                «وَ رَتِّلِ الْقُرْآنَ تَرْتِیلًا» — قرآن را با ترتیل (و شمرده) بخوان.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== بخش سوم: اهداف آموزشگاه ===== */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 rounded-full">
                <Target className="w-6 h-6 text-amber-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                اهداف آموزشگاه انصارالقرآن
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-full shrink-0">
                    <Heart className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">ایجاد عشق به قرآن</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      هدف ما ایجاد علاقه و انس با قرآن در دل دانش‌پذیران از همان ابتدای مسیر آموزشی است.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-full shrink-0">
                    <Globe className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">آموزش همگانی</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      دسترسی آسان و رایگان به دوره‌های پایه برای همه اقشار جامعه، به ویژه کودکان و نوجوانان.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-full shrink-0">
                    <Lightbulb className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">تدریس تخصصی</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      ارائه آموزش‌های تخصصی در زمینه‌های روخوانی، تجوید، حفظ، تفسیر و مفاهیم قرآنی.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-full shrink-0">
                    <Users className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">تربیت مربیان</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      پرورش مربیان و معلمان قرآن برای ترویج هرچه بیشتر فرهنگ قرآنی در جامعه.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== بخش چهارم: اقدامات ضروری ===== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-full">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                کارهایی که همه باید به آن همت ورزیم
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-6 text-center border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ۱
                </div>
                <h3 className="mt-4 font-bold text-gray-900">یادگیری فردی</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  هر مسلمانی موظف است حداقل روخوانی و روانخوانی قرآن را بیاموزد و به مرور دانش خود را افزایش دهد.
                </p>
              </div>
              <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 text-center border border-amber-100">
                <div className="w-16 h-16 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ۲
                </div>
                <h3 className="mt-4 font-bold text-gray-900">آموزش به دیگران</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  آنچه می‌آموزیم را به دیگران نیز منتقل کنیم، خصوصاً کودکان و نوجوانان که آینده‌سازان جامعه هستند.
                </p>
              </div>
              <div className="bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl p-6 text-center border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ۳
                </div>
                <h3 className="mt-4 font-bold text-gray-900">عمل به قرآن</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  قرآن را نه فقط بخوانیم، بلکه در زندگی به آن عمل کنیم و اخلاق قرآنی را در رفتارمان نهادینه سازیم.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200 text-center">
              <p className="text-emerald-800 font-medium">
                «إِنَّ هَذَا الْقُرْآنَ یَهْدِی لِلَّتِی هِیَ أَقْوَمُ»
              </p>
              <p className="text-sm text-gray-600 mt-1">— قرآن به راهی که استوارتر است، هدایت می‌کند.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== بخش پنجم: دعوت به اقدام ===== */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">به جمع انصارالقرآن بپیوندید</h2>
          <p className="mt-3 text-emerald-50 max-w-2xl mx-auto">
            با ثبت‌نام در دوره‌ها، قدمی در راه انس با قرآن بردارید و به ما در ترویج این فرهنگ الهی کمک کنید.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition shadow-lg">
              شروع یادگیری
            </Link>
            <Link href="/contact" className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition">
              ارتباط با ما
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}