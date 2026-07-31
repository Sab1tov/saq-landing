import { Button } from "@/components/ui/button"
import { ChevronRight, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/15489246/pexels-photo-15489246.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Car inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F0F11]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/60 to-transparent" />
      </div>

      {/* Decorative red glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 mb-6">
            <Shield className="size-3.5 text-[#DC2626]" />
            <span className="text-xs text-[#DC2626] font-medium tracking-wider uppercase">
              Независимая автоэкспертиза
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E4E4E7] leading-tight tracking-tight mb-6">
            Профессиональный подбор и{" "}
            <span className="text-[#DC2626]">независимая</span> экспертиза авто
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10 max-w-xl">
            Защитим от покупки восстановленного хлама, скрученного пробега
            и юридических проблем. Сэкономим ваше время и деньги.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: "500+", label: "Подборов выполнено" },
              { value: "97%", label: "Довольных клиентов" },
              { value: "от 100 000 ₸", label: "Средняя экономия" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#E4E4E7]">{stat.value}</div>
                <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#b91c1c] text-white border-0 px-8 h-12 text-base font-semibold"
              >
                Получить консультацию
                <ChevronRight className="size-5" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-[#E4E4E7] hover:bg-white/[0.06] h-12 text-base"
              >
                Рассчитать стоимость
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#A1A1AA]/40" />
        <span className="text-xs text-[#A1A1AA]/60 tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
