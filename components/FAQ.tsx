"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "What is TenantPulse?",
    answer:
      "TenantPulse is an all-in-one property management dashboard that helps landlords, property managers, and agencies manage tenants, collect payments, generate lease agreements, and track bookings. Whether you're renting short-term or long-term, it's built to handle it all.",
  },
  {
    question: "Who is TenantPulse For?",
    answer:
      "It's perfect for: Landlords managing 1 or 100+ units, Airbnb or short-term rental hosts, Real estate agencies and property managers, and Commercial space managers.",
  },
  {
    question: "Do I need technical skills to use TenantPulse?",
    answer: "Not at all. The platform is user-friendly and designed so anyone can manage properties, send invoices, and receive payments without needing to code or hire a developer.",
  },
  {
    question: "What kind of payments does TenantPulse support?",
    answer:
      "We support payments in all major currencies using Stripe and Paystack. You can choose your preferred gateway, connect your account, and collect rent or service fees directly into your own account.",
  },
  {
    question: "Can I use my own Stripe or Paystack account?",
    answer: "Yes. Each user can integrate their own Stripe or Paystack API keys. TenantPulse gives you full control—your money goes straight to your account.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. New users can get started with a Starter Plan that includes all features and support for up to 2 residential properties or 5 commercial units.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is based on the number of properties or units you manage. All features are included in every plan. See our Pricing section for full details.",
  },
  {
    question: "Can I manage both short-term and long-term rentals?",
    answer:
      "Absolutely. TenantPulse is built to handle residential, commercial, short-term, and long-term rental scenarios—seamlessly.",
  },
  {
    question: "Does TenantPulse generate tenancy agreements?",
    answer:
      "Yes. You can use our AI-powered document tool to generate lease and tenancy agreements based on your country. You can also edit and customize them before sending.",
  },
  {
    question: "Is there support for background checks?",
    answer:
      "Yes. We integrate with Checkr to help landlords run advanced background and credit checks on tenants. You simply send a link to the tenant, and a detailed report is generated and shared securely.",
  },
  {
    question: "Can I connect to my accounting software?",
    answer:
      "Yes. TenantPulse integrates directly with QuickBooks. You can sync your income, invoices, and expenses to keep your financials in one place—automatically.",
  },
  {
    question: "Can I manage multiple properties or landlords under one account?",
    answer:
      "Yes. As a property manager or agency, you can manage multiple landlords and properties within your dashboard. Each landlord gets a custom portal and public profile.",
  },
  {
    question: "What happens if I go over my plan's limit?",
    answer:
      "You'll be notified when you're close to your limit and can easily upgrade or purchase add-ons for extra units or properties.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-title",
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
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="snap-start scroll-mt-40 py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="faq-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tenant Pulse FAQ
          </h2>
          <p className="text-center">Get answers to common questions about TenantPulse features, pricing, and integrations.</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="faq-item rounded-none bg-transparent border-x-0 border border-t-gray-400 border-b-0 hover:shadow-lg transition-all duration-200"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50 dark:hover:bg-green-800/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-black dark:text-brand-green transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center space-y-4 mt-12">
          <p className="mb-4">Have more questions?</p>
	      <Link href="mailto:support@tenantpulse.com">	
            <Button className="partner-content bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105">
              Contact Support
            </Button>
        </Link>
          </div>
      </div>
    </section>
  )
}
