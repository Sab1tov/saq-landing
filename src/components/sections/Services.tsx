import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      id: "single",
      title: t("serviceSingleTitle"),
      price: t("serviceSinglePrice"),
      description: t("serviceSingleDesc"),
      features: [
        t("serviceSingleF1"),
        t("serviceSingleF2"),
        t("serviceSingleF3"),
        t("serviceSingleF4"),
        t("serviceSingleF5"),
      ],
      cta: t("serviceSingleCta"),
      featured: false,
    },
    {
      id: "day",
      title: t("serviceDayTitle"),
      price: t("serviceDayPrice"),
      description: t("serviceDayDesc"),
      features: [
        t("serviceDayF1"),
        t("serviceDayF2"),
        t("serviceDayF3"),
        t("serviceDayF4"),
      ],
      cta: t("serviceDayCta"),
      featured: false,
    },
    {
      id: "fullkey",
      title: t("serviceFullTitle"),
      price: t("serviceFullPrice"),
      description: t("serviceFullDesc"),
      features: [
        t("serviceFullF1"),
        t("serviceFullF2"),
        t("serviceFullF3"),
        t("serviceFullF4"),
      ],
      cta: t("serviceFullCta"),
      featured: true,
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#0F0F11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#DC2626] font-medium uppercase mb-3">
            {t("servicesTag")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E4E4E7] tracking-tight mb-4">
            {t("servicesHeading")}
          </h2>
          <p className="text-[#A1A1AA] max-w-md mx-auto">
            {t("servicesSubheading")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                relative flex flex-col rounded-xl border p-6 transition-all duration-200
                ${service.featured
                  ? "border-[#DC2626]/60 bg-[#18181B] shadow-[0_0_40px_rgba(220,38,38,0.12)]"
                  : "border-white/[0.08] bg-[#18181B] hover:border-white/[0.16]"
                }
              `}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#DC2626] text-white border-0 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                    <Star className="size-3 mr-1" />
                    {t("servicesBadgeChoice")}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#E4E4E7] mb-1">{service.title}</h3>
                <div className={`text-2xl font-bold mb-3 ${service.featured ? "text-[#DC2626]" : "text-[#E4E4E7]"}`}>
                  {service.price}
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{service.description}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-0.5 size-4 rounded-full flex items-center justify-center shrink-0 ${
                        service.featured ? "bg-[#DC2626]/20" : "bg-white/[0.06]"
                      }`}>
                        <Check className={`size-2.5 ${service.featured ? "text-[#DC2626]" : "text-[#A1A1AA]"}`} />
                      </div>
                      <span className="text-sm text-[#A1A1AA]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://wa.me/77053084328" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full ${
                    service.featured
                      ? "bg-[#DC2626] hover:bg-[#b91c1c] text-white border-0"
                      : "border-white/20 text-[#E4E4E7] hover:bg-white/[0.06] bg-transparent"
                  }`}
                  variant={service.featured ? "default" : "outline"}
                >
                  {service.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
