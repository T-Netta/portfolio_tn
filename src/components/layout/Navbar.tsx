"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  {id: "hobbies", label: "Hobbies"},
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  // Detect scroll for shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "py-3 bg-black/70 backdrop-blur-lg shadow-lg" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold">Thomas</div>

        <div className="space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                if (active === section.id) e.preventDefault()
              }}
              className={`transition 
                ${
                  active === section.id
                    ? "text-blue-400 cursor-default"
                    : "hover:text-blue-400"
                }
              `}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

