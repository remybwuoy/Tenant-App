"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          {/* Main CTA Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Property Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of property managers who trust TenantPulse to streamline their operations and maximize their
              investment returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://tenantpulse.space/signup">  
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-200 hover:scale-105">
                  Get Started for Today
                </Button>
              </Link>
              <Link href="https://tenantpulse.space/signup">  
                <Button
                  
                  className="border-2 border-gray-600 text-white bg-transparent hover:bg-brand-green/90 hover:border-gray-500 px-8 py-4 text-lg font-medium rounded-md transition-all duration-200 hover:scale-105"
                >
                  Schedule a Demo
                </Button>
              </Link>  
            </div>
          </div>

          {/* Built by Section */}
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
              <img
                src="/images/icons/Teamalfy-logo.png"
                alt="TenantPulse Logo"
                className="transition-transform duration-700 group-hover:scale-105"
              />         
            </div>
            <span className="text-lg">
              Built by <Link href="https://projectgiantshub.com" className="text-white font-medium hover:text-brand-green">PGH</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
