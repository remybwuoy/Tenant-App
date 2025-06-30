"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const benefitOptions = [
  {
    id: "advanced-ai-crm",
    title: "Advanced AI CRM",
    image: "/images/benefits-bg-1.png",
    description: "Intelligent email marketing with personalized customer engagement and automated workflows",
  },
  {
    id: "security-audits",
    title: "Security audits",
    image: "/images/benefits-bg-1.png",
    description: "Comprehensive security monitoring and audit trails for your property data with real-time alerts",
  },
  {
    id: "role-based-access",
    title: "Role-based access",
    image: "/images/benefits-bg-1.png",
    description: "Granular permission controls for different user types and responsibilities across your platform",
  },
  {
    id: "automated-performance",
    title: "Automated performance",
    image: "/images/benefits-bg-1.png",
    description: "Real-time performance tracking and automated reporting systems with detailed analytics",
  },
]

export default function Benefits() {
  const [activeOption, setActiveOption] = useState("advanced-ai-crm")
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".benefit-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate image change on both hover and click
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      )
    }
  }, [activeOption, hoveredOption])

  const handleOptionClick = (optionId: string) => {
    setActiveOption(optionId)
  }

  const handleOptionHover = (optionId: string | null) => {
    setHoveredOption(optionId)
  }

  // Show hovered option if hovering, otherwise show active option
  const displayOption = hoveredOption
    ? benefitOptions.find((option) => option.id === hoveredOption)
    : benefitOptions.find((option) => option.id === activeOption)

  const currentDisplayOption = displayOption || benefitOptions[0]

  return (
    <section id="benefits" ref={sectionRef} className="snap-start scroll-mt-40 mt-20 lg:mt-40 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Interactive Benefits Section */}
          <div className="benefit-content space-y-8">
            {/* Main Image Container */}
            <div className="relative">
              <div
                ref={imageRef}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-green/10 to-brand-border/10 p-8"
              >
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-border/20 backdrop-blur-sm rounded-3xl"></div>

                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={currentDisplayOption.image || "/placeholder.svg"}
                    alt={currentDisplayOption.title}
                    className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500"
                  />
                </div>

                {/* Image Overlay Info */}
                <div className="absolute top-12 left-12 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 max-w-md transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentDisplayOption.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {currentDisplayOption.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefitOptions.map((option) => {
                const isActive = activeOption === option.id
                const isHovered = hoveredOption === option.id
                const shouldHighlight = isActive || isHovered

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    onMouseEnter={() => handleOptionHover(option.id)}
                    onMouseLeave={() => handleOptionHover(null)}
                    className={`group relative p-6 text-left transition-all duration-300 rounded-2xl ${
                      shouldHighlight ? "transform -translate-y-1 shadow-lg" : "hover:transform hover:-translate-y-1"
                    }`}
                    style={{
                      backgroundColor: shouldHighlight ? "#D9D9D91A" : "transparent",
                    }}
                  >
                    {/* Background highlight */}
                    <div
                      className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                        shouldHighlight ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ backgroundColor: "#D9D9D91A" }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <h4
                        className={`text-lg font-bold transition-colors duration-300 ${
                          shouldHighlight
                            ? "text-brand-green"
                            : "text-gray-900 dark:text-white group-hover:text-brand-green"
                        }`}
                      >
                        {option.title}
                      </h4>
                    </div>

                    {/* Hover effect border */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                        shouldHighlight
                          ? "border-brand-green/30"
                          : "border-transparent group-hover:border-brand-green/20"
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
