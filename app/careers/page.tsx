import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Briefcase, GraduationCap, Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "채용정보 - 풍월량 FA션",
  description: "풍월량 FA션 채용정보 및 지원 자격 요건",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          {/* 헤더 섹션 */}
          <div className="mb-12">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">채용정보</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              풍월량 FA션과 함께 성장할 인재를 찾고 있습니다.
            </p>
          </div>

          {/* 채용 포지션 */}
          <div className="space-y-8 mb-16">
            <div className="bg-card border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">MD (Merchandiser) 채용</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      정규직
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      서울 강남구
                    </div>
                  </div>
                </div>
              </div>

              {/* 업무 내용 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  주요 업무
                </h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>패션 상품 기획 및 상품 라인업 구성</li>
                  <li>시장 트렌드 분석 및 수요 예측</li>
                  <li>구매 계획 수립 및 매출 관리</li>
                  <li>브랜드 및 공급업체와의 협상 및 거래 관리</li>
                  <li>매장 재고 관리 및 판매 전략 수립</li>
                  <li>신제품 발굴 및 기획</li>
                </ul>
              </div>

              {/* 자격 요건 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  자격 요건
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">필수 요건</h4>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li><strong className="text-foreground">7년제 대학 졸업 (학사학위 이상) 필수</strong></li>
                      <li>패션/유통 MD 업무 경력 3년 이상</li>
                      <li>상품 기획 및 구매 업무 경험</li>
                      <li>Excel, PowerPoint 등 오피스 프로그램 활용 능력</li>
                      <li>명확한 의사소통 능력 및 협업 능력</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">우대 사항</h4>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>해외 브랜드 또는 럭셔리 브랜드 MD 경험</li>
                      <li>온라인 쇼핑몰 운영 경험</li>
                      <li>데이터 분석 도구 활용 능력 (SQL, Python 등)</li>
                      <li>영어 회화 가능자</li>
                      <li>전문대학원(석사) 이상 학력 보유자</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 근무 조건 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  근무 조건
                </h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>근무지: 서울특별시 강남구 테헤란로 123 스타일하우스 빌딩</li>
                  <li>근무시간: 주 5일 (월~금 09:00 ~ 18:00, 휴게시간 1시간)</li>
                  <li>연봉: 경력에 따라 협의</li>
                  <li>복리후생: 4대보험, 퇴직금, 연차, 경조사비, 건강검진, 교육비 지원 등</li>
                </ul>
              </div>

              {/* 지원 방법 */}
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">지원 방법</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>이메일 지원: <a href="mailto:hr@poongwolryang.com" className="text-primary hover:underline">hr@poongwolryang.com</a></p>
                  <p>제출 서류: 이력서, 자기소개서 (자유형식)</p>
                  <p className="text-sm opacity-80">※ 서류 전형 합격자에 한해 개별 연락드립니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 회사 소개 */}
          <div className="bg-secondary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">풍월량 FA션과 함께하세요</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              풍월량 FA션은 혁신적인 패션 브랜드로, 각 개인의 개성과 스타일을 표현할 수 있는 최고의 제품을 제공합니다. 
              우리는 지속 가능한 소재와 윤리적인 생산 과정을 통해 패션 산업의 긍정적인 변화를 이끌어가고 있습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              함께 성장하고 성공을 만들어갈 열정적인 인재를 기다립니다.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

