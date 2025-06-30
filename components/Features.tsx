"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const featuresCards = [
  {
    title: "Smart Collections",
    description:
      "Organize work orders on a Kanban board, schedule bookings with the calendar view, and share progress via photo chat for faster turnarounds.",
    image: "/images/smart-card-image.png",
  },
  {
    title: "Resident App",
    description:
      "Give tenants a seamless web & WhatsApp portal in eight languages—so they can pay, request help, and view documents without installing anything.",
    image: "/images/resident-card-image.png",
  },
  {
    title: "Maintenance Hub",
    description:
      "Organize work orders on a Kanban board, schedule bookings with the calendar view, and share progress via photo chat for faster turnarounds.",
    image: "/images/maintenance-card-image.png",
  },
  {
    title: "Paperless Leasing",
    description:
      "Build custom leases with AI assistance, collect e-signatures instantly, and get alerted before any expiry to keep everyone on track.",
    image: "/images/paperless-card-image.png",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
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
    <section id="features" ref={sectionRef} className="snap-start scroll-mt-40 py-0 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Section Title */}
              <div className="feature-card">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Tools that help grow your rental business
                </h2>
                <p className="py-4">Whether you are a Landlord, Manager or Tenant, we have got you covered. Access the dashboard of The Tenant app and get started.</p>
              </div>

              {/* First Card */}
              <Card className="feature-card border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-6">
                  {/* Image with Blur Background */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-[#EEE8E380] hover:shadow-md dark:from-brand-green/20 to-brand-border/20"></div>
                    <img
                      src={featuresCards[0].image || "/placeholder.svg"}
                      alt={featuresCards[0].title}
                      className="w-full h-auto object-cover hover:shadow-md border-brand-green/10 rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{featuresCards[0].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuresCards[0].description}</p>
                    <Link href="https://tenantpulse.space/signup"> 
                      <Button
                        variant="outline"
                        className="rounded-lg mt-8 border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3"
                      >
                        Get Started
                      </Button>
                    </Link>  
                  </div>
                </CardContent>
              </Card>

              {/* Second Card */}
              <Card className="feature-card border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-6">
                  {/* Image with Blur Background */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-[#EEE8E380] hover:shadow-2xl hover:shadow-brand-green/20 dark:from-brand-green/20 to-brand-border/20 "></div>
                    <img
                      src={featuresCards[1].image || "/placeholder.svg"}
                      alt={featuresCards[1].title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{featuresCards[1].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuresCards[1].description}</p>
                    <Link href="https://tenantpulse.space/signup"> 
                      <Button
                        variant="outline"
                        className="rounded-lg mt-8 border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* First Card */}
              <Card className="feature-card border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-6">
                  {/* Image with Blur Background */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-[#EEE8E380] hover:shadow-md dark:from-brand-green/20 to-brand-border/20 "></div>
                    <img
                      src={featuresCards[2].image || "/placeholder.svg"}
                      alt={featuresCards[2].title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{featuresCards[2].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuresCards[2].description}</p>
                    <Link href="https://tenantpulse.space/signup"> 
                      <Button
                        variant="outline"
                        className="rounded-lg mt-8 border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3py-2"
                      >
                        Get Started
                      </Button>
                    </Link>  
                  </div>
                </CardContent>
              </Card>

              {/* Second Card */}
              <Card className="feature-card border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-6">
                  {/* Image with Blur Background */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-[#EEE8E380] hover:shadow-md dark:from-brand-green/20 to-brand-border/20 "></div>
                    <img
                      src={featuresCards[3].image || "/placeholder.svg"}
                      alt={featuresCards[3].title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{featuresCards[3].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuresCards[3].description}</p>
                    <Link href="https://tenantpulse.space/signup"> 
                      <Button
                        variant="outline"
                        className="rounded-lg mt-8 border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3py-2"
                      >
                        Get Started
                      </Button>
                    </Link>  
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
