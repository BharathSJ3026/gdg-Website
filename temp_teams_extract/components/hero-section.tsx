"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white">
      <motion.div style={{ opacity, scale, y }} className="flex flex-col items-center px-4 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 tracking-tight mb-16"
        >
          Team 25-26
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Organiser</h2>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100">
            {/* Photo Placeholder */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 ring-4 ring-[#4285F4]">
              <img
                src="/professional-portrait-organiser.jpg"
                alt="Organiser"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-lg text-[#4285F4] font-medium mb-4">GDG Organiser</p>
              <div className="space-y-2 text-gray-600 mb-4">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                  4th Year, Computer Science
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                  Full Stack Developer
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                  Google Developer Expert
                </p>
              </div>

              {/* LinkedIn and Email buttons */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Link
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white text-gray-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:johndoe@example.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#EA4335] hover:text-white text-gray-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Scroll to explore domains</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#4285F4]/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#EA4335]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#FBBC05]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-[#34A853]/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
