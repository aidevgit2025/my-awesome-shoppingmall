export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">우리의 이야기</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>풍월량 FA션은 2015년 설립 이후 고객의 라이프스타일을 풍요롭게 하는 패션 브랜드로 성장해왔습니다.</p>
              <p>
                우리는 단순히 옷을 판매하는 것이 아니라, 각 개인의 개성과 스타일을 표현할 수 있는 최고의 제품을
                제공합니다. 지속 가능한 소재와 윤리적인 생산 과정을 통해 패션 산업의 긍정적인 변화를 이끌어가고
                있습니다.
              </p>
              <p>
                전 세계 50개 이상의 매장과 온라인 플랫폼을 통해 고객들과 만나고 있으며, 매 시즌 새로운 컬렉션으로
                트렌드를 선도하고 있습니다.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40"></div>
            </div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm px-8 py-4 rounded-lg border shadow-lg">
                <p className="text-sm font-medium text-foreground">풍월량 FA션 부티크</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
