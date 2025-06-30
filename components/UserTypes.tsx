"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const userTypes = [
  {
    title: "Ideal For Landlords",
    description:
      "See portfolio-wide cash flow and vacancy at a glance, so you can optimize rents and maximize returns effortlessly.",
    bgImage: "/images/tenant-card-image.png"
  },
  {
    title: "Perfect for Managers",
    description:
      "Auto-assign work orders, sync Paystack payouts, and export to Xero—streamline your day-to-day with zero fuss.",
    bgImage: "/images/managers-card-image.png"
  },
  {
    title: "Loved by Tenants",
    description:
      "Instant rent payments, simple maintenance requests, and downloadable agreements—no extra apps required.",
    bgImage: "/images/Tenant-card-image.png"
  },
]

export default function UserTypes() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".user-type-card",
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
    <section id="why-tenantpulse" ref={sectionRef} className="snap-start scroll-mt-40 py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Three Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {userTypes.map((type, index) => (
              <Card
                key={index}
                className="user-type-card group transition-all duration-500 hover:-translate-y-4 hover:rotate-2 bg-white dark:bg-dark-nav border-transparent hover:border-2 hover:border-brand-green hover:shadow-2xl hover:shadow-brand-green/20"
              >
                <CardContent className="p-0">
                  {/* Image/Icon Area as background image */}
                  <div
                    className="aspect-video flex items-center justify-center mb-6 rounded-t-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${type.bgImage})`, backgroundColor: "#f9fafb" }}
                  ></div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{type.description}</p>
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
