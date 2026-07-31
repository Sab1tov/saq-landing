import { TrendingDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MarketingTrigger() {
  return (
    <section className="py-20 bg-[#0F0F11] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/5 via-transparent to-[#DC2626]/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center size-12 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 mb-6">
          <TrendingDown className="size-6 text-[#DC2626]" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#E4E4E7] mb-6 tracking-tight">
          В 90% случаев наши услуги{" "}
          <span className="text-[#DC2626]">обходятся вам бесплатно</span>
        </h2>

        <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-10">
          Находя скрытые дефекты, мы аргументированно сбиваем цену у продавца.
          В среднем наш торг экономит клиенту от{" "}
          <span className="text-[#E4E4E7] font-semibold">100 000 до 500 000 ₸</span>.
        </p>

        {/* Highlight numbers */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {[
            { stat: "90%", label: "Случаев со скидкой на авто" },
            { stat: "300 000 ₸", label: "Средняя экономия клиента" },
            { stat: "7 лет", label: "Опыт работы на рынке Казахстана" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-[#18181B] border border-white/[0.08] px-6 py-5"
            >
              <div className="text-2xl font-bold text-[#DC2626] mb-1">{item.stat}</div>
              <div className="text-sm text-[#A1A1AA]">{item.label}</div>
            </div>
          ))}
        </div>

        <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#DC2626] hover:bg-[#b91c1c] text-white border-0 h-12 px-8 text-base font-semibold"
          >
            Сэкономить на покупке авто
            <ChevronRight className="size-5" />
          </Button>
        </a>
      </div>
    </section>
  )
}
