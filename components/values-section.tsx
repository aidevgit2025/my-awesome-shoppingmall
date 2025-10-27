import { Sparkles, Heart, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "혁신",
    description: "끊임없는 연구와 개발로 패션의 새로운 기준을 제시합니다",
  },
  {
    icon: Heart,
    title: "품질",
    description: "최고급 소재와 장인정신으로 완성되는 프리미엄 제품",
  },
  {
    icon: Leaf,
    title: "지속가능성",
    description: "환경을 생각하는 윤리적이고 지속 가능한 패션을 추구합니다",
  },
  {
    icon: Users,
    title: "고객중심",
    description: "고객의 만족과 신뢰를 최우선으로 생각합니다",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">우리의 핵심 가치</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            풍월량 FA션을 만들어가는 네 가지 핵심 원칙
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-card p-8 rounded-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
