export default function ContactPage() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          {/* بخش اول: اطلاعات تماس */}
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                تماس با ما
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                با ما در ارتباط باشید. ما پاسخگوی سوالات و نظرات شما هستیم.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {/* پشتیبانی */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">پشتیبانی</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">ایمیل</dt>
                    <dd>
                      <a
                        href="mailto:ansarolquran@gmail.com"
                        className="font-semibold text-indigo-600"
                      >
                        ansarolquran@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">تلفن</dt>
                    <dd>۰۲۱-۲۲۹۸۶۶۳۴</dd>
                  </div>
                </dl>
              </div>

              {/* مدیریت */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">ارتباط با مدیریت</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">ایمیل</dt>
                    <dd>
                      <a
                        href="mailto:ansarolquran@gmail.com"
                        className="font-semibold text-indigo-600"
                      >
                        ansarolquran@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">تلفن همراه</dt>
                    <dd>۰۹۰۳۴۲۶۰۴۵۴</dd>
                  </div>
                </dl>
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">شبکه‌های اجتماعی</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">روبیکا</dt>
                    <dd>
                      <a href="#" className="font-semibold text-indigo-600">
                        روبیکا: @ansarolquran
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">اپارات</dt>
                    <dd>
                      <a href="#" className="font-semibold text-indigo-600">
                        اپارات: @ansarolquran
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">ایتا</dt>
                    <dd>
                      <a href="#" className="font-semibold text-indigo-600">
                        ایتا: @ansarolquran
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">بله</dt>
                    <dd>
                      <a href="#" className="font-semibold text-indigo-600">
                        بله: @ansarolquran
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* آدرس */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">آدرس</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                  <p>تهران، پاسداران، آموزش مجازی</p>
                  <p>سامانه آموزش قرآن انصارالقرآن</p>
                </address>
              </div>
            </div>
          </div>

          {/* بخش دوم: دوره‌های آموزشی (جایگزین مکان‌ها) */}
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                دوره‌های آموزشی
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                ما دوره‌های متنوعی برای تمام سنین و سطوح داریم.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">روخوانی قرآن</h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  آموزش روخوانی صحیح قرآن کریم از مبتدی تا پیشرفته
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">روانخوانی</h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  دوره‌های روانخوانی با تکنیک‌های نوین و تمرین‌های عملی
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">دوره‌های کودکان</h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  آموزش قرآن به کودکان با روش‌های جذاب و بازی‌محور
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">حفظ و قرائت</h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  دوره‌های تخصصی حفظ قرآن و قرائت با تجوید کامل
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}