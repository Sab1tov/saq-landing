import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t("navServices"), href: "#services" },
    { label: t("navHow"), href: "#how" },
    { label: t("navPortfolio"), href: "#portfolio" },
    { label: t("navContacts"), href: "#contacts" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F11]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold tracking-wider text-[#E4E4E7]">
              SA<span className="text-[#DC2626]">Q</span>
            </span>
            <span className="text-xs tracking-[0.25em] text-[#A1A1AA] font-medium uppercase hidden sm:block">
              Auto Podbor
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-[#E4E4E7] transition-colors rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+77053084328"
              className="flex items-center gap-2 text-sm text-[#E4E4E7] font-medium hover:text-white transition-colors"
            >
              <Phone className="size-4 text-[#DC2626]" />
              +7 (705) 308-43-28
            </a>
            <a
              href="https://wa.me/77053084328"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-[#DC2626] hover:bg-[#b91c1c] text-white border-0">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile burger & switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-[#A1A1AA] hover:text-[#E4E4E7]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#18181B] border-t border-white/[0.06] px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-[#A1A1AA] hover:text-[#E4E4E7] rounded-md hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="tel:+77053084328" className="flex items-center gap-2 text-sm text-[#E4E4E7] font-medium px-3 py-2">
            <Phone className="size-4 text-[#DC2626]" />
            +7 (705) 308-43-28
          </a>
          <a href="https://wa.me/77053084328" target="_blank" rel="noopener noreferrer" className="block mt-2">
            <Button className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white">
              {t("writeWhatsapp")}
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
