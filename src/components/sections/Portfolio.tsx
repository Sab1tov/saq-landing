import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const cases = [
  {
    image: "https://images.pexels.com/photos/28688908/pexels-photo-28688908.jpeg?auto=compress&cs=tinysrgb&h=400&w=700",
    model: "Toyota Camry 70, 2020 г.",
    task: "Найти авто до 13 500 000 ₸ с пробегом до 60 тыс. км.",
    result: "Нашли за 4 дня.",
    priceFrom: "13 800 000 ₸",
    priceTo: "13 200 000 ₸",
    saved: "600 000 ₸",
  },
  {
    image: "https://images.pexels.com/photos/27517027/pexels-photo-27517027.jpeg?auto=compress&cs=tinysrgb&h=400&w=700",
    model: "Mercedes-Benz E200, 2021 г.",
    task: "Проверить конкретный автомобиль перед сделкой.",
    result: "Выявлены следы кузовного ремонта.",
    priceFrom: "18 500 000 ₸",
    priceTo: "17 900 000 ₸",
    saved: "600 000 ₸",
  },
  {
    image: "https://images.pexels.com/photos/16180485/pexels-photo-16180485.jpeg?auto=compress&cs=tinysrgb&h=400&w=700",
    model: "Lexus RX350, 2019 г.",
    task: "Подбор премиального кроссовера до 22 000 000 ₸.",
    result: "Нашли идеальный вариант за 5 дней.",
    priceFrom: "22 300 000 ₸",
    priceTo: "21 500 000 ₸",
    saved: "800 000 ₸",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#DC2626] font-medium uppercase mb-3">
            Наши результаты
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E4E4E7] tracking-tight mb-4">
            Выполненные кейсы
          </h2>
          <p className="text-[#A1A1AA] max-w-md mx-auto">
            Реальные истории подборов с цифрами сэкономленных денег.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.model}
              className="rounded-xl bg-[#0F0F11] border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-200 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-[#0F0F11]/20 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-[#DC2626]/90 text-white border-0 text-xs">
                  Сторговали {item.saved}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#E4E4E7] mb-3">{item.model}</h3>

                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Задача:</span>
                    <p className="text-sm text-[#E4E4E7]/80 mt-0.5">{item.task}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Результат:</span>
                    <p className="text-sm text-[#E4E4E7]/80 mt-0.5">{item.result}</p>
                  </div>
                </div>

                {/* Price comparison */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[#18181B] border border-white/[0.06]">
                  <span className="text-sm text-[#A1A1AA] line-through">{item.priceFrom}</span>
                  <ArrowRight className="size-3 text-[#DC2626] shrink-0" />
                  <span className="text-sm font-semibold text-[#E4E4E7]">{item.priceTo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
