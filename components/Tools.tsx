"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const tools = [
  {
    title: "Maintenance Hub",
    description: "Streamline maintenance requests from submission to completion with automated workflows.",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "Smart Collections",
    description: "Automated rent collection with late fee calculations and payment reminders.",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "Expense Tracking",
    description: "Track all property-related expenses and generate detailed financial reports.",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "Automated Leasing",
    description: "Streamline the leasing process with digital applications and e-signatures.",
    image: "/placeholder.svg?height=250&width=350",
  },
]

export default function Tools() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".tool-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools that help grow your rental business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="tool-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-dark-nav border-2 border-brand-border"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{tool.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                      <Button
                        variant="ghost"
                        className="self-start text-brand-green hover:text-brand-green/80 p-0 font-medium group-hover:translate-x-2 transition-transform duration-200"
                      >
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    <div className="md:w-1/2 p-4">
                      <div className="bg-gradient-to-br from-brand-green/10 to-brand-border/10 rounded-lg h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-gray-400 dark:text-gray-600 font-medium">{tool.title}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
