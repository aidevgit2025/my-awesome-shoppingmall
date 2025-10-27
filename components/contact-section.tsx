"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">문의하기</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              풍월량 FA션에 대해 궁금하신 점이 있으시면 언제든지 연락주세요. 최선을 다해 답변드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">이메일</h3>
                  <p className="text-muted-foreground">contact@poongwolryang.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">전화</h3>
                  <p className="text-muted-foreground">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">주소</h3>
                  <p className="text-muted-foreground">
                    서울특별시 강남구 테헤란로 123
                    <br />
                    스타일하우스 빌딩 10층
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  이름
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="홍길동"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  메시지
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="문의 내용을 입력해주세요"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
