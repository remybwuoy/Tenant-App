"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-stone-950 border-b border-border/50 backdrop-blur-lg bg-background/95 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#">
            <div className="flex items-center space-x-3 fade-in">
              <div className="flex items-center justify-center">
                <img
                  src="/images/icons/Tenant-Logo.png"
                  alt="TenantPulse Logo"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-lg font-bold text-white">TenantPulse</span>
                <span className="text-sm text-gray-400 -mt-1">Property Management</span>
              </div>
            </div>
          </Link>
          <div className="flex items-center space-x-4 fade-in">
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="https://tenantpulse.space/login" className="text-white font-medium hover:text-green-500 border-green-500">Sign In</Link>
              <Link href="https://tenantpulse.space/signup">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 font-medium rounded-md">
                  Sign Up
                </Button>
              </Link>
              <Link href="https://replit.com/oidc-login-consent/hT67-4dqvv5mhs9eZe5sM">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 font-medium rounded-md">
                  Continue with Replit
                </Button>
              </Link>
            </div>

            <ThemeSwitch />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-700">
            <nav className="flex flex-col text-center space-y-4">
              <Link href="https://tenantpulse.space/login" className="text-white font-medium hover:text-brand-green/90">Sign In</Link>
              <Link href="https://tenantpulse.space/signup"><Button className="bg-brand-green text-center justify-center hover:bg-brand-green/90 text-white w-full">Sign Up</Button></Link>
              <Link href="https://replit.com/oidc-login-consent/hT67-4dqvv5mhs9eZe5sM"><Button className="bg-brand-green justify-center hover:bg-brand-green/90 w-full text-white">
                Continue with Replit
              </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
