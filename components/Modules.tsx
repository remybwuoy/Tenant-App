"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    title: "Automated Billing",
    description: "Recurring, one-off or pro-rata. Auto-reconcile via Paystack or bank import.",
  },
  {
    title: "Guest & Short-Term Manager",
    description: "Calendar view, dynamic nightly pricing, automated check-in codes",
  },
  {
    title: "Webhooks & API",
    description: "Plug TenantPulse into anything—Zapier, Zaplink, or raw REST.",
  },
  {
    title: "Notifications & Alerts",
    description:
      "Custom email/SMS reminders for rent due, lease renewals or maintenance updates, keeping everyone in the loop",
  },
  {
    title: "Smart-listing Website Builder",
    description: "Generate a public microsite for each landlord—publish units, take applications, embed support cha",
  },
  {
    title: "Document Vault",
    description:
      "Securely store and share leases, IDs, inspection reports, and more in one encrypted repository with audit trails.",
  },
]

export default function Modules() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".module-card",
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
    <section className="pt-24 snap-start scroll-mt-40" id="modules" ref={sectionRef} >
      <div className="px-4 bg-white dark:bg-dark-bg">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Rounded Container with Modules */}
            <div className="shadow-sm bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-b-green-300 dark:border-white/10 shadow-green-200 text-gray-900 dark:text-white rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {modules.map((module, index) => (
                  <div key={index} className="module-card">
                    <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-4">{module.title}</h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
