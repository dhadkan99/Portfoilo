"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Code, Palette, Gamepad2, Github, Award, Users, Coffee } from "lucide-react"

export default function AboutSection() {
  // Feature cards data
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      desc: "React, JavaScript, TypeScript",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Figma, Design Systems",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      desc: "Unity Engine, C#",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Github,
      title: "Version Control",
      desc: "Git, GitHub, Collaboration",
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-500/10",
    },
  ]

  // Stats data
  const stats = [
    { icon: Award, label: "Projects Completed", value: "10+", color: "text-blue-600" },
    { icon: Users, label: "Years Learning", value: "2+", color: "text-purple-600" },
    { icon: Coffee, label: "Technologies", value: "10+", color: "text-pink-600" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-slate-800 dark:via-blue-900/10 dark:to-purple-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content and stats */}
          <div>
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Student & Frontend Developer
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I am passionate and precise and I am studying for a BSc (Hons) in Computer Science while gaining
                practical experience with both front-end and back-end systems. I am interested in designing
                creative digital options and supporting cybersecurity groups. Recent work exploring the skills of
                programming, UI/UX design and fixing real-world problems
              </p>

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className={`w-8 h-8 ${stat.color} group-hover:animate-bounce transition-transform`} strokeWidth={1.5} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Resume download link */}
              <a
                href="/Dhadkankc_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg"
              >
                {/* Card background hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-200/50 dark:border-slate-700/50`}
                  >
                    <item.icon className="w-8 h-8 text-blue-600 dark:text-white group-hover:animate-bounce" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Optional hover border effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
