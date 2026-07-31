import { ShieldCheck, Cpu, Wrench, FileSearch } from "lucide-react"

const checks = [
  {
    icon: ShieldCheck,
    title: "Кузов и силовая структура",
    description:
      "Проверка толщиномером, поиск шпаклевки, проверка геометрии, следов съема деталей и подушек безопасности.",
  },
  {
    icon: Cpu,
    title: "Компьютерная диагностика",
    description:
      "Сканирование всех электронных блоков на скрытые ошибки и поиск реального пробега в дублирующих блоках.",
  },
  {
    icon: Wrench,
    title: "Техническая часть",
    description:
      "Оценка состояния двигателя, КПП, подвески, тормозной системы, поиск течей технических жидкостей.",
  },
  {
    icon: FileSearch,
    title: "Юридическая чистота",
    description:
      "Проверка базы залогов, арестов, штрафов, совпадения VIN-кодов и документов.",
  },
]

export function WhatWeCheck() {
  return (
    <section id="how" className="py-24 bg-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#DC2626] font-medium uppercase mb-3">
            Что входит в проверку
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E4E4E7] tracking-tight mb-4">
            Что именно мы проверяем
          </h2>
          <p className="text-[#A1A1AA] max-w-md mx-auto">
            Полная проверка по 4 ключевым направлениям. Скрыть от нас ничего не получится.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {checks.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative rounded-xl bg-[#0F0F11] border border-white/[0.08] p-6 hover:border-[#DC2626]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 size-10 rounded-lg bg-[#DC2626]/10 flex items-center justify-center border border-[#DC2626]/10 group-hover:bg-[#DC2626]/20 transition-colors">
                  <Icon className="size-5 text-[#DC2626]" />
                </div>

                <h3 className="text-base font-semibold text-[#E4E4E7] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
