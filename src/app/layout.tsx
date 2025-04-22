import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hii-dev",
  description:
    "hii-dev は、情報系専門学生である私のスキルとプロジェクトを紹介するポートフォリオサイトです。Next.jsをベースに開発を行い、自身のプロフィール、制作実績、技術スタック、活動などを整理し、閲覧者にわかりやすく伝える構成にしています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
