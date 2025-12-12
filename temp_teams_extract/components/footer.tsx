"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EA4335]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#4285F4]" />
                <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
                <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                <div className="w-3 h-3 rounded-full bg-[#34A853]" />
              </div>
              <span className="font-bold text-xl">GDG</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Google Developer Groups - Building the future of technology, one community at a time.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Domains</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ML & Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>gdg@college.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Your College Campus</span>
              </li>
            </ul>

            <div className="pt-4">
              <button className="w-full px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Join Newsletter
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2025 Google Developer Groups. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
