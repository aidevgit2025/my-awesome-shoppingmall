import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "풍월량 FA션 - 스타일과 품질이 만나는 곳",
  description: "풍월량 FA션은 현대적인 감각과 시대를 초월한 우아함을 결합하여 당신만의 스타일을 완성합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

