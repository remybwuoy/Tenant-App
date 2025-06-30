"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const partnerFeatures = [
  {
    subTitle:"TenantPulse Resell",
    title: "Set your own pricing, control the client experience.",
    description: "Offer our powerful platform under your brand. Perfect for consultants, agencies, or proptech firms looking to expand their service stack and deliver a turnkey property management solution.",
  },
  {
    subTitle:"Embed Us",
    title: "Use only what you need—from billing to leasing",
    description: "Seamlessly integrate our API-first widgets or modules into your own platform. Enhance your product offering without the development overhead. While keeping your existing workflows intact",
  },
  {
    subTitle:"TenantPulse Refer & Earn",
    title: "Ideal for influencers, community leads, and real estate professionals",
    description: "Share your unique referral link and earn 10% recurring commission on every paying customer—no caps, no expiration, just steady income to monetize their networks.",
  },
]

export default function Partner() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partner-content",
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
    <section id="partners" ref={sectionRef} className="snap-start scroll-mt-40 py-10 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="partner-content text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partner with Us
            </h2>
            <p className="text-center">Grow your business while helping others simplify property management.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerFeatures.map((feature, index) => (
              <Card
                key={index}
                className="partner-content group border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-dark-nav hover:border-2 hover:border-brand-green"
              >
                <CardContent className="p-6 text-center lg:text-start">
                  <small>{feature.subTitle}</small>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white my-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
