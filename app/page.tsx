"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import SectionNavigation from "@/components/SectionNavigation"
import UserTypes from "@/components/UserTypes"
import Features from "@/components/Features"
import Modules from "@/components/Modules"
// import Tools from "@/components/Tools"
import Benefits from "@/components/Benefits"
// import AI from "@/components/AI"
import Pricing from "@/components/Pricing"
import Partner from "@/components/Partner"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
    )

    gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
        <Header />
        <SectionNavigation />
        <main className="">
          {" "}
          {/* Add padding to account for sticky navigation */}
          <Hero />
          <UserTypes />
          <Features />
          <Modules />
          {/* <Tools /> */}
          <Benefits />
          {/* <AI /> */}
          <Pricing />
          <Partner />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
