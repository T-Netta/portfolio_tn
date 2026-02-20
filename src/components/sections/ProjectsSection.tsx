"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Astronaut from "@/components/Astronaut"

const projects = [
  {
    title: "Responsive Web App",
    description:
      "Built with React and Tailwind, focusing on performance and responsive design.",
    github: "https://github.com/T-Netta",
    demo: null,
    screenshot: "/screenshots/portfolio.png",
  },
  {
    title: "Portfolio Website",
    description:
      "This site itself built with Next.js, Tailwind, and AI features.",
    github: "https://github.com/T-Netta/portfolio_tn",
    demo: null,
    screenshot: "/screenshots/portfolio.png",
  },
]

export default function ProjectsSection() {
  const [astronautIndex, setAstronautIndex] = useState<number | null>(null)

  // Pick a random card once
  useEffect(() => {
    const index = Math.floor(Math.random() * projects.length)
    setAstronautIndex(index)
  }, [])

  return (
    <section id="projects" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              {/* Astronaut head peeking from behind */}
              {index === astronautIndex && (
                <div className="absolute -top-6 left-6 w-10 h-10 overflow-hidden z-0 pointer-events-none animate-float">
                  <Astronaut size={40} />
                </div>
              )}

              {/* Card */}
              <div className="relative z-10 bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="rounded-lg mb-4 object-cover h-48 w-full hover:scale-105 transition-transform duration-300"
                  />
                )}

                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mt-auto flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:underline font-medium"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-500 hover:underline font-medium"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}