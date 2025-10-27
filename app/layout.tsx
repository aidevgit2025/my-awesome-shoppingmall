import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "둥둥둥 파션 - 스타일과 품질이 만나는 곳",
  description: "둥둥둥 파션은 현대적인 감각과 시대를 초월한 우아함을 결합하여 당신만의 스타일을 완성합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

