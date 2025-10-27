"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/introduction_abc.txt'
    link.download = 'introduction_abc.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          스타일과 품질이
          <br />
          만나는 곳
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
          둥둥둥 파션은 현대적인 감각과 시대를 초월한 우아함을 결합하여 당신만의 스타일을 완성합니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            컬렉션 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={handleDownload} className="group">
            회사 소개서 다운로드
            <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
