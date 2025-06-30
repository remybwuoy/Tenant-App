"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, MessageCircle, BarChart3, Lightbulb } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const aiFeatures = [
  {
    title: "Smart Rent Optimization",
    description: "AI analyzes market data to suggest optimal rent prices for maximum occupancy and revenue.",
    icon: BarChart3,
  },
  {
    title: "Intelligent Chatbot",
    description: "24/7 AI assistant handles tenant inquiries and maintenance requests automatically.",
    icon: MessageCircle,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast maintenance needs and tenant behavior to prevent issues before they occur.",
    icon: Brain,
  },
  {
    title: "Smart Recommendations",
    description: "Get personalized insights and recommendations to improve your property management.",
    icon: Lightbulb,
  },
]

export default function AI() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ai-content",
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

  return (
    <section id="ai" ref={sectionRef} className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ai-content text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Property Management
            </h2>
            <p className="ai-content text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to automate and optimize your property management operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - AI Features */}
            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="ai-content flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - AI Visualization */}
            <div className="ai-content">
              <Card className="bg-gradient-to-br from-brand-green/5 to-brand-border/5 border-2 border-brand-border">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-12 h-12 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Assistant</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your intelligent property management companion, available 24/7 to help optimize your operations.
                  </p>
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3">
                    Try AI Features
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
