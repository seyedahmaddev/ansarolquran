import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google"; // ← حذف Geist و اضافه کردن Vazirmatn
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// تعریف فونت وزیرمتن
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn", // متغیر CSS برای استفاده در Tailwind
});

export const metadata: Metadata = {
  title: "انصارالقرآن | آموزش قرآن",
  description: "آموزش روخوانی، روانخوانی، حفظ و تفسیر قرآن کریم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} antialiased`} // ← فقط متغیر وزیرمتن
    >
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}