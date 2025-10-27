const collections = [
  {
    title: "2024 봄/여름 컬렉션",
    description: "자연에서 영감을 받은 밝고 경쾌한 디자인",
    image: "/spring-summer-fashion-collection-with-light-fabric.jpg",
  },
  {
    title: "프리미엄 라인",
    description: "최고급 소재로 완성한 럭셔리 컬렉션",
    image: "/luxury-premium-fashion-collection-elegant-clothing.jpg",
  },
  {
    title: "에코 컬렉션",
    description: "지속 가능한 소재로 만든 친환경 패션",
    image: "/sustainable-eco-friendly-fashion-collection.jpg",
  },
]

export function CollectionSection() {
  return (
    <section id="collection" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">컬렉션</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            매 시즌 새로운 영감으로 선보이는 둥둥둥 파션의 컬렉션
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const images = [
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
            ];
            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${images[index]})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{collection.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
