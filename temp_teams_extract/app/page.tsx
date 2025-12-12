"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { DomainSections } from "@/components/domain-sections"
import { Footer } from "@/components/footer"
import { DomainNav } from "@/components/domain-nav"

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="relative">
      <DomainNav />
      <HeroSection />
      <DomainSections />
      <Footer />
    </main>
  )
}
