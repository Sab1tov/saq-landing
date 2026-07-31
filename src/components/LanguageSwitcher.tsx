import { useLanguage } from "@/context/LanguageContext"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`inline-flex items-center bg-[#18181B] border border-white/[0.1] rounded-full p-1 gap-0.5 ${className}`}>
      <Globe className="size-3.5 text-[#A1A1AA] ml-1.5 mr-0.5 shrink-0" />
      <button
        onClick={() => setLang("ru")}
        className={`px-2.5 py-1 text-xs rounded-full transition-all duration-200 cursor-pointer ${
          lang === "ru"
            ? "bg-[#DC2626] text-white font-medium shadow-xs"
            : "text-[#A1A1AA] hover:text-[#E4E4E7]"
        }`}
        aria-label="Переключить на русский язык"
      >
        RU
      </button>
      <button
        onClick={() => setLang("kk")}
        className={`px-2.5 py-1 text-xs rounded-full transition-all duration-200 cursor-pointer ${
          lang === "kk"
            ? "bg-[#DC2626] text-white font-medium shadow-xs"
            : "text-[#A1A1AA] hover:text-[#E4E4E7]"
        }`}
        aria-label="Қазақ тіліне ауыстыру"
      >
        ҚАЗ
      </button>
    </div>
  )
}
