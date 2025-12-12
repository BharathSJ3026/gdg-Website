"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Brain, Palette, FileText, Users } from "lucide-react"

const domains = [
  {
    id: "tech",
    title: "Tech",
    subtitle: "Web & Cloud Development",
    description:
      "Explore cutting-edge web technologies, cloud computing, and software engineering. From frontend frameworks to backend architectures, we build the future.",
    color: "#f8d8d8",
    darkColor: "#e5a3a3",
    icon: Code,
    stats: ["50+ Projects", "Weekly Sessions"],
    features: ["React & Next.js", "Cloud Platforms", "DevOps & CI/CD", "Open Source"],
    teamUrl: "/team/tech",
  },
  {
    id: "ml-android",
    title: "ML & Android",
    subtitle: "AI & Mobile Innovation",
    description:
      "Dive into machine learning, artificial intelligence, and Android development. Build smart apps that learn and adapt.",
    color: "#c3ecf6",
    darkColor: "#7dd3e8",
    icon: Brain,
    stats: ["30+ ML Models", "Bi-weekly Workshops"],
    features: ["TensorFlow & PyTorch", "Android Studio", "Kotlin & Jetpack", "Edge AI"],
    teamUrl: "/team/ml-android",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "UI/UX & Creative Vision",
    description:
      "Craft beautiful, intuitive experiences. From wireframes to polished interfaces, design that users love.",
    color: "#ccf6c5",
    darkColor: "#8fe880",
    icon: Palette,
    stats: ["40+ Designs", "Monthly Critiques"],
    features: ["Figma & Adobe XD", "Design Systems", "User Research", "Prototyping"],
    teamUrl: "/team/design",
  },
  {
    id: "content",
    title: "Content",
    subtitle: "Stories & Documentation",
    description:
      "Tell compelling stories through blogs, videos, and documentation. Share knowledge and inspire the community.",
    color: "#ffe7a5",
    darkColor: "#ffd54f",
    icon: FileText,
    stats: ["200+ Articles", "Weekly Blogs"],
    features: ["Technical Writing", "Video Production", "Social Media", "Podcasting"],
    teamUrl: "/team/content",
  },
  {
    id: "community",
    title: "Community",
    subtitle: "Connect & Grow Together",
    description:
      "Build lasting connections, organize events, and foster an inclusive environment where everyone belongs.",
    color: "#f0f0f0",
    darkColor: "#c0c0c0",
    icon: Users,
    stats: ["500+ Members", "Year-round"],
    features: ["Hackathons", "Meetups", "Mentorship", "Networking"],
    teamUrl: "/team/community",
  },
]

function DomainSection({
  domain,
  index,
}: {
  domain: (typeof domains)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const Icon = domain.icon
  const isEven = index % 2 === 0

  return (
    <section
      id={domain.id}
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: domain.color, zIndex: index + 1 }}
    >
      <motion.div style={{ y, opacity, scale }} className="container mx-auto px-6 py-20">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
        >
          {/* Content Side */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: domain.darkColor + "40" }}
              >
                <Icon className="w-4 h-4" />
                <span>{domain.subtitle}</span>
              </div>

              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
                {domain.title}
              </h2>

              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">{domain.description}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {domain.stats.map((stat, i) => (
                <div key={i} className="px-5 py-3 bg-white/60 backdrop-blur-sm rounded-2xl font-medium text-gray-800">
                  {stat}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-20"
            >
              <Link
                href={domain.teamUrl}
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: domain.darkColor }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">What we do</h3>

                <div className="grid grid-cols-2 gap-4">
                  {domain.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ backgroundColor: domain.color }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: domain.darkColor }} />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl shadow-lg flex items-center justify-center"
                style={{ backgroundColor: domain.darkColor }}
              >
                <Icon className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: domain.color }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          style={{
            background: `radial-gradient(circle, ${domain.darkColor}20 0%, transparent 70%)`,
          }}
        />
      </div>
    </section>
  )
}

export function DomainSections() {
  return (
    <div className="relative">
      {domains.map((domain, index) => (
        <DomainSection key={domain.id} domain={domain} index={index} />
      ))}
    </div>
  )
}
