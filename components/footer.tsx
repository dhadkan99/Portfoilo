"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/dhadkan99", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhadkan-kc-421533287/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dhadkankc88@gmail.com", label: "Email" },
  ]

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-gradient">
              Portfolio
            </div>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed max-w-md">
              Passionate frontend developer and AI student creating beautiful, functional web experiences with modern
              technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <address className="not-italic text-slate-400 space-y-3">
              <p className="hover:text-white transition-colors duration-300">Manamaiju, Kathmandu</p>
              <p>
                <a href="mailto:dhadkankc88@gmail.com" className="hover:text-white transition-colors duration-300">
                  dhadkankc88@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+9779808172868" className="hover:text-white transition-colors duration-300">
                  +977 9808172868
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dhadkan KC. All rights reserved.
            </p>
            <p className="text-slate-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
