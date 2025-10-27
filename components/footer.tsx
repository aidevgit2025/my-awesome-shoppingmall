export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">둥둥둥 파션</h3>
            <p className="text-sm opacity-80 leading-relaxed">스타일과 품질이 만나는 곳</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">회사</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#values" className="hover:opacity-100 transition-opacity">
                  핵심가치
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:opacity-100 transition-opacity">
                  채용정보
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  배송 및 반품
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 둥둥둥 파션. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
