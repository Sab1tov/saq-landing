import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { WhatWeCheck } from "@/components/sections/WhatWeCheck"
import { MarketingTrigger } from "@/components/sections/MarketingTrigger"
import { Portfolio } from "@/components/sections/Portfolio"
import { Footer } from "@/components/sections/Footer"
import { MessageCircle } from "lucide-react"

export function App() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-[#E4E4E7]">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhatWeCheck />
        <MarketingTrigger />
        <Portfolio />
      </main>
      <Footer />

      {/* Floating WhatsApp button — mobile priority */}
      <a
        href="https://wa.me/77053084328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-105 md:hidden"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle className="size-5" />
        WhatsApp
      </a>

      {/* Desktop floating button */}
      <a
        href="https://wa.me/77053084328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:flex size-14 items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  )
}

export default App
