"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap } from "lucide-react"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { motion, AnimatePresence } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "React.js", category: "Frontend", icon: "⚛️", level: 90, color: "#3b82f6" },
    { name: "JavaScript", category: "Programming", icon: "🟨", level: 85, color: "#facc15" },
    { name: "TypeScript", category: "Programming", icon: "🔷", level: 80, color: "#2563eb" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨", level: 95, color: "#06b6d4" },
    { name: "HTML", category: "Markup", icon: "🌐", level: 95, color: "#f97316" },
    { name: "CSS3", category: "Styling", icon: "🎨", level: 90, color: "#8b5cf6" },
    { name: "Figma", category: "Design", icon: "🎨", level: 85, color: "#ec4899" },
    { name: "Unity Engine", category: "Game Dev", icon: "🎮", level: 75, color: "#10b981" },
    { name: "Git", category: "Version Control", icon: "📝", level: 80, color: "#64748b" },
    { name: "Node.js", category: "Backend", icon: "🟢", level: 70, color: "#22c55e" },
    { name: "MongoDB", category: "Database", icon: "🟢", level: 70, color: "#22c55e" },
    { name: "MySQL", category: "Database", icon: "🟢", level: 60, color: "#22c55e" },
    { name: "Postman", category: "API", icon: "🟢", level: 70, color: "#22c55e" },
    { name: "AWS", category: "Cloud", icon: "☁️", level: 75, color: "#ff9900" },
    { name: "Amplify", category: "Cloud", icon: "📶", level: 65, color: "#ff9900" },
    { name: "Azure", category: "Cloud", icon: "🌀", level: 65, color: "#007FFF" },
    { name: "C", category: "Programming", icon: "💻", level: 80, color: "#a0aec0" },
    { name: "C++", category: "Programming", icon: "💻", level: 75, color: "#4a5568" },
    { name: "C#", category: "Programming", icon: "💻", level: 75, color: "#6b46c1" },
    { name: "PHP", category: "Backend", icon: "🐘", level: 60, color: "#8892be" },
    { name: "Python", category: "Programming", icon: "🐍", level: 80, color: "#306998" },
    { name: "Java", category: "Programming", icon: "☕", level: 80, color: "#f97316" },
    { name: "Linux", category: "OS", icon: "🐧", level: 70, color: "#000000" },
    { name: "Express.js", category: "Backend", icon: "🚂", level: 65, color: "#333" },
    { name: "Next.js", category: "Frontend", icon: "⏭️", level: 75, color: "#000000" },
  ]

  const categories = ["All", "Frontend", "Programming", "Styling", "Design", "Game Dev", "Version Control", "Backend", "Database", "API", "Cloud", "OS"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAllLanguages, setShowAllLanguages] = useState(false)

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)
  const visibleSkills = showAllLanguages ? filteredSkills : filteredSkills.slice(0, 4)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Skills & Expertise</span>
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              onClick={() => {
                setActiveCategory(category);
                setShowAllLanguages(false);
              }}
              variant="outline"
              className={`px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence initial={false}>
            {visibleSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-slate-200/50 dark:border-slate-700/50 shadow-md">
                          <span className="text-2xl group-hover:animate-bounce">{skill.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-lg">{skill.name}</h3>
                          <Badge
                            variant="secondary"
                            className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          >
                            {skill.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-20 h-20">
                        <CircularProgressbarWithChildren
                          value={skill.level}
                          styles={buildStyles({
                            pathColor: skill.color,
                            trailColor: "#e5e7eb",
                            pathTransitionDuration: 1.4,
                          })}
                        >
                          <div className="text-sm font-bold text-black dark:text-white">{skill.level}%</div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllLanguages((prev) => !prev)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:opacity-90 transition"
            >
              {showAllLanguages ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Constantly Learning & Growing</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My skill set is constantly evolving as I explore new frameworks, tools, and methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}