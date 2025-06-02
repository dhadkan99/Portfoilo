"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "ToDo Application",
      description:
        "A minimal and modern To-Do application built using React for managing daily tasks with local storage.",
      image: "https://images.unsplash.com/photo-1690439440176-ba5dc3114dd1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpZ2h0JTIwdGhlYW0lMjBjb2RlaW5nfGVufDB8fDB8fHww",
      technologies: ["React", "Tailwind CSS", "Local Storage"],
      github: "https://github.com/dhadkan99/ToDO-application.git",
      featured: true,
    },
    {
      title: "Weather Application",
      description:
        "A weather forecast application showing real-time temperature and conditions fetched from public APIs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
      technologies: ["JavaScript", "OpenWeather API", "CSS","html","php","mysql"],
      github: "https://github.com/dhadkan99/WeatherAppliacion.git",
      featured: true,
    },
    {
      title: "FPS Unity Game",
      description:
        "A first-person shooter game built in Unity with C# scripts, 3D environments, and smooth gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      technologies: ["Unity Engine ", "C#"],
      github: "https://github.com/dhadkan99/FPSGame.git",
      featured: false,
    },
    {
      title: "NoPixel Voting System",
      description:
        "A full-stack voting system built with React and Node.js that includes authentication, elections, and results.",
      image: "https://images.unsplash.com/photo-1704717700476-af979f54baf1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGUlMjAlMjBkYXJrJTIwdGhlYW18ZW58MHx8MHx8fDA%3D",
      technologies: ["React", "Node.js", "MongoDB","figma" ," CSS","postman"],
      github: "https://github.com/dhadkan99/Nopixel_Voting_system.git",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-slate-800 dark:via-blue-900/10 dark:to-purple-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-500" />
            <span className="text-blue-600 font-semibold text-lg">Featured Projects</span>
            <Rocket className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            My Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto animate-expand" />
          <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-3xl mx-auto">
            Showcasing my passion for creating innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group animate-on-scroll opacity-0 translate-y-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-slate-200/50 dark:border-slate-700/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={project.github} target="_blank">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 backdrop-blur-sm border-white/50 text-slate-900 hover:bg-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="hover:scale-110 transition-transform cursor-pointer bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-10">
          <Link href="https://github.com/dhadkan99" target="_blank">
            <Button variant="outline" size="lg" className="group relative overflow-hidden">
              <Github className="w-5 h-5 mr-2 group-hover:animate-spin" />
              <span className="relative z-10">View All Projects on GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
