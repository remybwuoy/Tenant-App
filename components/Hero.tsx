"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { gsap } from "gsap"
import { Building, Phone, Star } from "lucide-react"
import { SectionHeader }  from "@/components/SectionHeader"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out", delay: 0.3 },
      )

      gsap.fromTo(
        dashboardRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.1 },
      )

      gsap.to(dashboardRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <><SectionHeader title="Tools for Landlords" />
    <section ref={heroRef} className="pt-0 mt-0 pb-4 px-6 min-h-screen flex items-center bg-white dark:bg-dark-bg">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Dashboard Preview */}
            <div ref={dashboardRef} className="lg:col-span-6">
              <div className="relative group">
                {/* Main Dashboard Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                  <img
                    src="/hero-dashboard-image.png"
                    alt="TenantPulse Dashboard Preview"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />

                  {/* Floating overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 via-transparent to-brand-border/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating elements with hover effects */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:-rotate-6 transition-all duration-300 cursor-pointer">
                  <span className="text-white text-xl font-bold">+</span>
                </div>
              </div>
            </div>

            {/* Text Content - Right Side (5 columns) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Brand Label */}
              <p className="hero-text text-gray-700 dark:text-gray-300 text-sm">TenantPulse Pro</p>

              {/* Main Headline */}
              <h1 className="hero-text text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Your all-in-one dashboard for <span className="text-brand-green">landlords</span>,{" "}
                <span className="text-brand-green">property managers</span> &{" "}
                <span className="">renters</span>
              </h1>

              {/* Description */}
              <p className="hero-text text-md md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Run every building from one sleek, dark-mode workspace: collect rent, track jobs, sign leases and chat
                with residents in minutes.
              </p>

              {/* Features List */}
              <div className="hero-text space-y-4">
                {/* Start Free */}
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-brand-white hover:text-brand-green flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-normal">
                    Start free → 14-day trial. No credit card.
                  </span>
                </div>

                {/* Phone Demo */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-white hover:text-brand-green flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-normal">Call <Link className="hover:text-green-brand" href="tel:0557447933">0557447933</Link> to book a demo</span>
                </div>

                {/* CTA Button */}
                <div className="hero-text">
                  <Link href="https://tenantpulse.space/signup">
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                    Get Started for Free
                  </Button>
                  </Link>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-green-600 flex items-center justify-center">
                        <Star className="w-4 h-4 fill-white text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    5.0 out of 5.0 stars based on 1100 reviews.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
