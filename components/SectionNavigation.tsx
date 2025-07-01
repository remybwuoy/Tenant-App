"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ChevronUp } from "lucide-react"

const sections = [
  { id: "why-tenantpulse", label: "Why TenantPulse" },
  { id: "features", label: "Features" },
  { id: "modules", label: "Modules" },
  { id: "benefits", label: "Benefits" },
  { id: "pricing", label: "Pricing" },
  { id: "partners", label: "Partners" },
  { id: "faq", label: "FAQ" },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("why-tenantpulse")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const first = document.getElementById(sections[0].id)
      const last = document.getElementById(sections[sections.length - 1].id)

      if (first && last) {
        const top = first.getBoundingClientRect().top + window.scrollY
        const bottom = last.getBoundingClientRect().bottom + window.scrollY
        const scroll = window.scrollY

        setIsVisible(scroll >= top && scroll <= bottom)
      }

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const offsetTop = el.getBoundingClientRect().top
          if (offsetTop >= 0 && offsetTop < 200) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!isVisible) return null

  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <div className="py-4 font-bold w-full px-6 md:px-16 bg-white dark:bg-dark-bg mb-1 flex dark:border-b border-gray-600 text-md font-normal shadow-md">
          Tools for Landlords
        </div>
        <div className="noscrollbar" style={{ WebkitOverflowScrolling: 'touch', overflow: 'hidden' }}>
          <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', }} className={`bg-[#e8eaeb] dark:bg-white inline-flex overflow-x-auto max-w-full whitespace-nowrap rounded-full ml-4 md:ml-12 backdrop-blur-sm border border-gray-200 transition-opacity duration-500 ease-in-out ${ isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > 
            <div className="flex items-center space-x-1 px-2 py-1">
              <button
                onClick={scrollToTop}
                className="flex-shrink-0 w-8 h-8 pl-2 rounded-full hover:bg-gray-100 transition duration-200 hover:scale-110"
              >
                <ArrowUp className="w-4 h-4 text-gray-600" />
              </button>

              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                    activeSection === section.id
                      ? "bg-black text-white shadow-lg"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-green hover:bg-brand-green/90 text-white rounded-full shadow-lg flex items-center justify-center transition duration-200 hover:scale-110"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  )
}
