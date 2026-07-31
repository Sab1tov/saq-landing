import { Phone, Clock, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacts" className="bg-[#18181B] border-t border-white/[0.08]">
      {/* Contact bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-wider text-[#E4E4E7]">
                SA<span className="text-[#DC2626]">Q</span>
              </span>
              <span className="text-sm tracking-[0.2em] text-[#A1A1AA] font-medium uppercase">
                Auto Podbor
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
              {t("footerDesc")}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/77053084328"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="size-4 text-[#25D366]" />
              </a>
              <a
                href="https://www.instagram.com/stanbekovv_a/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center hover:bg-[#E1306C]/20 transition-colors"
                title="Instagram"
              >
                <svg className="size-4 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-[#E4E4E7] uppercase tracking-wider mb-5">
              {t("footerContacts")}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+77053084328"
                className="flex items-center gap-3 text-sm text-[#A1A1AA] hover:text-[#E4E4E7] transition-colors"
              >
                <Phone className="size-4 text-[#DC2626]" />
                +7 (705) 308-43-28
              </a>
              <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                <MapPin className="size-4 text-[#DC2626]" />
                {t("footerLocation")}
              </div>
              <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                <Clock className="size-4 text-[#DC2626]" />
                {t("footerSchedule")}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-[#E4E4E7] uppercase tracking-wider mb-5">
              {t("footerCtaHeader")}
            </h4>
            <p className="text-sm text-[#A1A1AA] mb-5">
              {t("footerCtaDesc")}
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/77053084328" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white border-0">
                  {t("writeWhatsapp")}
                </Button>
              </a>
              <a href="https://www.instagram.com/stanbekovv_a/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-[#E4E4E7] hover:bg-white/[0.06] bg-transparent"
                >
                  {t("footerOpenInstagram")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#A1A1AA]/60">
            {t("footerCopyright")}
          </p>
          <p className="text-xs text-[#A1A1AA]/40">
            ИП «SAQ Auto» | БИН: 123456789012
          </p>
        </div>
      </div>
    </footer>
  )
}
