"use client"

import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const domains = [
  { id: "tech", name: "Tech", color: "#f8d8d8" },
  { id: "ml-android", name: "ML & Android", color: "#c3ecf6" },
  { id: "design", name: "Design", color: "#ccf6c5" },
  { id: "content", name: "Content", color: "#ffe7a5" },
  { id: "community", name: "Community", color: "#f0f0f0" },
]

export function DomainNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname, mounted])

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      // If on home page, just scroll directly
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If not on home page, navigate to home first then scroll
      router.push("/")
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }
  }

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2"
    >
      {domains.map((domain, index) => (
        <motion.button
          key={domain.id}
          onClick={() => handleNavigation(domain.id)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          className="px-4 py-2 text-xs font-medium rounded-full shadow-lg hover:scale-105 transition-all text-gray-800 border border-gray-200 cursor-pointer"
          style={{ backgroundColor: domain.color }}
          type="button"
        >
          {domain.name}
        </motion.button>
      ))}
    </motion.div>
  )
}
