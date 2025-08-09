"use client"

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <FiMail className="w-8 h-8 text-blue-600 group-hover:animate-bounce" />,
      title: "Email",
      desc: "dhadkankc88@gmail.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FiPhone className="w-8 h-8 text-purple-600 group-hover:animate-bounce" />,
      title: "Phone",
      desc: "+977 9808172868",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-pink-600 group-hover:animate-bounce" />,
      title: "Location",
      desc: "Manamaiju, Kathmandu",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* === Background Layer === */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === Section Header === */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <FiSend className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Contact Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto animate-expand" />
          <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-3xl mx-auto">
            I'm Dhadkan KC — always open to new opportunities and exciting projects. Let's build something great together!
          </p>
        </div>

        {/* === Contact Info Cards === */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((contact, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group animate-on-scroll opacity-0 translate-y-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${contact.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-200/50 dark:border-slate-700/50`}
                >
                  {contact.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">{contact.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg">{contact.desc}</p>
              </div>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
              />
            </Card>
          ))}
        </div>

        {/* === Final CTA Box with Socials === */}
        <div className="max-w-2xl mx-auto text-center animate-on-scroll opacity-0 translate-y-10">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ready to Start a Project?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
              Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>

            {/* Buttons and Social Links */}
            {/* === Buttons and Social Links === */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Send Message Button opens email */}
  <a
    href="mailto:dhadkankc88@gmail.com"
    className="group relative overflow-hidden"
  >
    <Button size="lg" type="button">
      <FiMail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
      <span className="relative z-10">Send Message</span>
    </Button>
  </a>

 
  

  {/* Social Icons */}
  <div className="flex gap-4 justify-center mt-4 sm:mt-0">
    {[
      { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/dhadkan99" },
      { icon: <FiLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhadkan-kc-421533287/" },
      { icon: <FiInstagram className="w-5 h-5" />, href: "https://www.instagram.com/dhadkan_k_c/" },
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>

</div>

          </div>
        </div>
      
    </section>
  )
}
