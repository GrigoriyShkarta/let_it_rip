import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const lemonTuesday = localFont({
  src: "../fonts/Lemon Tuesday.otf",
  variable: "--font-lemon-tuesday",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LET IT RIP — Курс з екстремального вокалу",
  description:
    "Онлайн-курс з екстремального вокалу: гроули, скрими та та сама хрипотця у голосі. Авторські вправи, відеоуроки, зворотний зв'язок. Старт 20 квітня.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${lemonTuesday.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
