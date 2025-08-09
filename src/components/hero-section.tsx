"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { ChevronDown, Code, Palette, Gamepad2, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const words = ["Dhadkan KC", "Frontend Developer", "Unity Developer", "UI/UX Designer"]
  const fullText = words[currentWordIndex]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
    let timeout: NodeJS.Timeout

    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, fullText, currentWordIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow" style={{ top: "20%", left: "10%", transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow" style={{ top: "60%", right: "20%", transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)` }} />
        <div className="absolute w-32 h-32 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-slow" style={{ bottom: "30%", left: "30%", transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.3) 1px,transparent 1px)`, backgroundSize: "50px 50px" }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="relative">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse-slow scale-110" />
              <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full">
                <div className="bg-white dark:bg-slate-900 rounded-full p-3">
                  <Image
                    src="/image.jpg"
                    alt="Dhadkan KC"
                    width={200}
                    height={200}
                    className="rounded-full object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce border border-blue-200/50">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce border border-purple-200/50" style={{ animationDelay: "0.5s" }}>
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce border border-pink-200/50" style={{ animationDelay: "1s" }}>
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce border border-green-200/50" style={{ animationDelay: "1.5s" }}>
                <Gamepad2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Name Typing Animation */}
          <h1 className={`text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {typedText}<span className="animate-blink text-slate-900 dark:text-white">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            Passionate about creating <span className="text-blue-600 font-semibold">beautiful</span>,
            <span className="text-purple-600 font-semibold"> functional</span> web experiences with
            <span className="text-pink-600 font-semibold"> modern</span> technologies.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>

          {/* Social Media */}
          <div className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            {[
              { icon: Github, href: "https://github.com/dhadkan99", color: "hover:text-slate-600" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dhadkan-kc-421533287/", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:dhadkankc88@gmail.com", color: "hover:text-purple-600" },
              { icon: Sparkles, href: "https://www.instagram.com/dhadkan_k_c/", color: "hover:text-pink-600" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-200/50 dark:border-slate-700/50`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-slate-400 rounded-full mx-auto mt-2 animate-scroll-indicator" />
            </div>
            <ChevronDown className="w-6 h-6 mx-auto mt-2 text-slate-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
