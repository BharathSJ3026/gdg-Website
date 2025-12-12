"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Code, Brain, Palette, FileText, Users, Linkedin, Mail } from "lucide-react"
import { DomainNav } from "./domain-nav"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tech: Code,
  "ml-android": Brain,
  design: Palette,
  content: FileText,
  community: Users,
}

interface TeamPageProps {
  domain: string
  title: string
  color: string
  darkColor: string
}

export function TeamPage({ domain, title, color, darkColor }: TeamPageProps) {
  const Icon = iconMap[domain] || Code

  // 8 team members (4 per row, 2 rows)
  const teamMembers = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    linkedin: "#",
    email: `member${i + 1}@gdg.com`,
  }))

  const MemberCard = ({
    name,
    linkedin,
    email,
    index,
    isLead = false,
  }: {
    name: string
    linkedin: string
    email: string
    index: number
    isLead?: boolean
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isLead ? 0.2 : 0.4 + index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {/* Circular photo with colored ring border */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1" style={{ backgroundColor: darkColor }}>
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
          <img
            src={`/.jpg?height=200&width=200&query=${title} ${isLead ? "team lead" : "team member"} professional portrait`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>

      {/* LinkedIn and Email buttons */}
      <div className="flex gap-3 mt-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-gray-600" />
        </a>
        <a
          href={`mailto:${email}`}
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <Mail className="w-4 h-4 text-gray-600" />
        </a>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-white">
      <DomainNav />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: darkColor }}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">{title} Team</span>
          </div>
          <div className="w-24" /> {/* Spacer to maintain layout balance */}
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Team Lead Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Team Lead</h1>

          <div className="flex justify-center">
            <MemberCard name="Lead Name" linkedin="#" email="lead@gdg.com" index={0} isLead={true} />
          </div>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Team Members</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <MemberCard
                key={member.id}
                name={member.name}
                linkedin={member.linkedin}
                email={member.email}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Back to domains */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore Other Domains
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Google Developer Groups - Team 25-26</p>
        </div>
      </footer>
    </div>
  )
}
