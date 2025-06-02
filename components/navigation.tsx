"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className={`capitalize transition-all duration-300 transform hover:scale-110 relative group ${
                  activeSection === item
                    ? "text-blue-600 dark:text-blue-400 scale-110"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 animate-spin" /> : <Menu className="w-6 h-6 animate-bounce" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-slate-200 dark:border-slate-700">
            {["home", "about", "skills", "projects", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className="block w-full text-left py-3 px-4 capitalize text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
