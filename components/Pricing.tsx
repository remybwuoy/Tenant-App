"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Globe, ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// Currency configuration
const currencies = [
  { code: "GHS", country: "Ghana", flag: "🇬🇭", rate: 1 },
  { code: "NGN", country: "Nigeria", flag: "🇳🇬", rate: 1650 },
  { code: "KES", country: "Kenya", flag: "🇰🇪", rate: 129 },
  { code: "ZAR", country: "South Africa", flag: "🇿🇦", rate: 18 },
  { code: "USD", country: "United States", flag: "🇺🇸", rate: 0.062 },
  { code: "CAD", country: "Canada", flag: "🇨🇦", rate: 0.085 },
  { code: "GBP", country: "United Kingdom", flag: "🇬🇧", rate: 0.049 },
]

const basePlansMonthly = [
  {
    name: "Starter",
    basePrice: 50,
    period: "Per Month",
    description: "Up to 2 Residential properties or 5 Commercial units",
    features: ["Basic Tenant Management", "Maintenance tickets", "Email Support"],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    basePrice: 150,
    period: "Per Month",
    description: "Up to 10 Residential properties or 25 Commercial units",
    features: ["Advance Tenant Screening", "Automated invoicing", "Priority Support", "Basic Analytics"],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Business",
    basePrice: 300,
    period: "Per Month",
    description: "Up to 50 Residential properties or 100 Commercial units",
    features: ["Custom Lease Template", "Advanced Analytics", "API Access", "Dedicated Support"],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    basePrice: null,
    period: "",
    description: "Unlimited residential properties or commercial units",
    features: ["Custom Integrations", "White Label Solution", "SLA Guarantee", "24/7 Phone Support"],
    popular: false,
    buttonText: "Contact Sales",
  },
]

const basePlansAnnual = [
  {
    name: "Starter",
    basePrice: 500,
    period: "Per Year",
    description: "Up to 2 Residential properties or 5 Commercial units",
    features: ["Basic Tenant Management", "Maintenance tickets", "Email Support"],
    popular: false,
    buttonText: "Get Started",
    savings: "Save 2 months",
  },
  {
    name: "Pro",
    basePrice: 1500,
    period: "Per Year",
    description: "Up to 10 Residential properties or 25 Commercial units",
    features: ["Advance Tenant Screening", "Automated invoicing", "Priority Support", "Basic Analytics"],
    popular: true,
    buttonText: "Get Started",
    savings: "Save 2 months",
  },
  {
    name: "Business",
    basePrice: 3000,
    period: "Per Year",
    description: "Up to 50 Residential properties or 100 Commercial units",
    features: ["Custom Lease Template", "Advanced Analytics", "API Access", "Dedicated Support"],
    popular: false,
    buttonText: "Get Started",
    savings: "Save 2 months",
  },
  {
    name: "Enterprise",
    basePrice: null,
    period: "",
    description: "Unlimited residential properties or commercial units",
    features: ["Custom Integrations", "White Label Solution", "SLA Guarantee", "24/7 Phone Support"],
    popular: false,
    buttonText: "Contact Sales",
    savings: "Contact us",
  },
]

const baseAddOns = [
  {
    title: "Extra Residential",
    description: "Add more residential properties",
    basePrice: 12,
    period: "month",
  },
  {
    title: "Extra Commercial",
    description: "Add more commercial properties",
    basePrice: 6,
    period: "month",
  },
  {
    title: "AI Lease Generator",
    description: "Generate legal documentation with AI",
    basePrice: 24,
    period: "document",
  },
  {
    title: "Tenant Vetting",
    description: "Comprehensive background Checks",
    basePrice: 600,
    period: "check",
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const formatPrice = (basePrice: number | null) => {
    if (basePrice === null) return "Custom pricing"
    const convertedPrice = Math.round(basePrice * selectedCurrency.rate)
    return convertedPrice.toLocaleString()
  }

  const getCurrentPlans = () => {
    const basePlans = isAnnual ? basePlansAnnual : basePlansMonthly
    return basePlans.map((plan) => ({
      ...plan,
      price: formatPrice(plan.basePrice),
    }))
  }

  const getCurrentAddOns = () => {
    return baseAddOns.map((addon) => ({
      ...addon,
      price: `${selectedCurrency.code} ${formatPrice(addon.basePrice)}/${addon.period}`,
    }))
  }

  const handleCurrencyChange = (currency: (typeof currencies)[0]) => {
    setSelectedCurrency(currency)
    setIsCountryOpen(false)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-content",
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

  const currentPlans = getCurrentPlans()
  const currentAddOns = getCurrentAddOns()

  return (
    <section id="pricing" ref={sectionRef} className="snap-start scroll-mt-40 py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* First Row - Header Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Title */}
            <div className="pricing-content">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Pricing That Scales With You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Flexible plans for every landlord, from part-time owners to large portfolios.
              </p>
            </div>

            {/* Right Column - Description & Location */}
            <div className="pricing-content space-y-8 z-50">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                No hidden fees. All features included. Just pick a tier based on the number of units—and customize it
                further with powerful add-ons.
              </p>

              {/* Pricing Location with Dropdown */}
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">Pricing for</span>
                <div className="relative z-50" style={{ zIndex: 9999 }}>
                  <button
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="flex items-center space-x-2 bg-transparent border-2 border-gray-400 rounded-xl px-6 py-3 hover:bg-gray-400 dark:hover:bg-brand-green/10 transition-colors z-50"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedCurrency.flag} {selectedCurrency.country}
                    </span>
                    <span className="text-xs bg-transparent border-2 border-gray-700 dark:border-gray-400 rounded-full text-gray-600 dark:text-gray-300 px-2 py-1">
                      {selectedCurrency.code}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {/* Dropdown Menu */}
                  {isCountryOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-brand-green/40 rounded-lg shadow-lg border border-gray-600 dark:border-gray-700" style={{ zIndex: 9999 }}>
                      <div className="py-2">
                        {currencies.map((currency) => (
                          <button
                            key={currency.code}
                            onClick={() => handleCurrencyChange(currency)}
                            className="w-full flex items-center justify-between px-4 py-3 hover:text-white hover:bg-black dark:hover:bg-gray-700 transition-colors z-50"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{currency.flag}</span>
                              <div className="text-left">
                                <div className="text-sm font-medium text-gray-400 hover:text-white dark:text-white">
                                  {currency.country}
                                </div>
                                <div className="text-xs hover:text-white text-gray-400 dark:text-white">{currency.code}</div>
                              </div>
                            </div>
                            {selectedCurrency.code === currency.code && <Check className="w-4 h-4 text-brand-green" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              
            </div>
          </div>

          {/* Second Row - Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Toggle & Pricing Cards */}
            <div className="pricing-content space-y-8">
              {/* Monthly/Annual Toggle */}
              <div className="flex items-center space-x-4">
                <span
                  className={`text-sm font-medium ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}
                >
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    isAnnual ? "bg-brand-green" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
                      isAnnual ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                  Annually
                </span>
                {isAnnual && (
                  <span className="text-sm text-brand-green font-medium bg-brand-green/10 px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>

              {/* Pricing Cards - First 3 */}
              <div className="space-y-4">
                {currentPlans.slice(0, 3).map((plan, index) => (
                  <div key={index} className="relative pt-4">
                    {/* Most Popular Badge - Only for middle card (index 1) */}
                    {index === 1 && (
                      <div className="absolute -top-0 left-6 z-10">
                        <div className="bg-brand-green text-white px-2 py-1 -mt-3 rounded-t-xl text-sm font-medium shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <Card className="relative group mb-6 border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/10 dark:bg-white/5 backdrop-blur-lg dark:border-white/10 text-gray-900 dark:text-white rounded-2xl overflow-hidden">
                      <CardContent className="p-6">
                        {/* Header with Plan Name and Description */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-transparent border-2 border-gray-400 dark:border-2 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg text-sm font-medium inline-block mb-4">
                              {plan.name}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">{plan.description}</p>
                          </div>
                        </div>

                        {/* Main Content - Two Column Layout */}
                        <div className="grid grid-cols-2 gap-8">
                          {/* Left Column - Pricing */}
                          <div className="space-y-6">
                            <div>
                              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                                {plan.price === "Custom pricing" ? (
                                  plan.price
                                ) : (
                                  <>
                                    {selectedCurrency.code} {plan.price}
                                  </>
                                )}
                                {isAnnual && plan.savings && plan.price !== "Custom pricing" && (
                                  <div className="text-sm text-brand-green font-medium mt-1">{plan.savings}</div>
                                )}
                              </div>
                              {plan.period && (
                                <div className="text-gray-500 dark:text-gray-400 text-sm">{plan.period}</div>
                              )}
                            </div>
                            <Link href="https://tenantpulse.space/signup">
                              <Button className="border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium mt-4">
                                {plan.buttonText}
                              </Button>
                            </Link>
                          </div>

                          {/* Right Column - Features */}
                          <div className="space-y-4">
                            {plan.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image & Enterprise Card */}
            <div className="pricing-content space-y-8 z-10">
              {/* Dashboard Preview Image */}
              <div className="z-10 bg-gradient-to-br from-brand-green/10 to-brand-border/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <img
                  src="/images/pricing-bg.png"
                  alt="TenantPulse Dashboard Preview"
                  className=" h-auto transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Enterprise Card */}
              <Card className="group hover:shadow-xl border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 bg-white/10 dark:bg-white/5 backdrop-blur-lg dark:border-white/10 text-gray-900 dark:text-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  {/* Header with Plan Name and Description */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="bg-gray-100 dark:bg-transparent border-2 border-gray-300 dark:border-2 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg text-sm font-medium inline-block mb-4">
                        {currentPlans[3].name}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                        {currentPlans[3].description}
                      </p>
                    </div>
                  </div>

                  {/* Main Content - Two Column Layout */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column - Pricing */}
                    <div className="space-y-2">
                      <div>
                        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                          {currentPlans[3].price}
                        </div>
                        {currentPlans[3].period && (
                          <div className="text-gray-500 dark:text-gray-400 text-sm">{currentPlans[3].period}</div>
                        )}
                      </div>
                      <Link href="mailto:sales@tenantpulse.com?subject=Enterprise Plan Inquiry">
                        <Button className="border-2 my-3 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium">
                          {currentPlans[3].buttonText}
                        </Button>
                      </Link>
                    </div>

                    {/* Right Column - Features */}
                    <div className="space-y-4">
                      {currentPlans[3].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Third Row - Premium Add-Ons */}
          <div className="pricing-content">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-start">
              Premium Add-Ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentAddOns.map((addon, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl shadow-brand-green/20 hover:shadow-brand-green/30 transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-dark-nav border-0 rounded-2xl p-6"
                >
                  <CardContent className="p-0">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{addon.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{addon.description}</p>
                    <div className="text-xl font-bold text-brand-green">{addon.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
