"use client"

import { useState } from "react"
import Astronaut from "@/components/Astronaut"

const hobbies = [
  {
    title: "AI & Emerging Tech",
    description:
      "I enjoy exploring new AI tools, experimenting with APIs, and building intelligent applications.",
  },
  {
    title: "Gaming",
    description:
      "I enjoy a variety of challenging activites, as a big fan of Rogue-likes and Strategy games.",
  },
  {
    title: "Continuous Learning",
    description:
      "I enjoy the very reward task of learning. No matter the topic if I can learn it from a passionate source I will thrive.",
  },
  {
    title: "Photography",
    description:
      "I am an avid photographer of subjects like: Nature meets Urban Society and Astronomy-related subjects.",
  },
]

export default function HobbiesSection() {
  const [bubbleVisible, setBubbleVisible] = useState(false)

  return (
    <section id="hobbies" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title with astronaut on top */}
        <div className="relative inline-block mx-auto mb-12">
          <h2 className="text-4xl font-bold text-center relative inline-block">
            <span className="relative inline-block">
              Beyond
              {/* Astronaut lying on top */}
              <div
                className="absolute -top-6 left-8 rotate-[-80deg] -translate-x-1/2 cursor-pointer"
                onClick={() => setBubbleVisible(!bubbleVisible)}
              >
                <Astronaut size={40} />

                {/* Speech bubble above astronaut */}
                {bubbleVisible && (
                  <div className="absolute top-[75] left-[-30] rotate-[80deg]  bg-white text-black text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap z-50">
                    "Sleeping is kind of a hobby."
                  </div>
                )}
              </div>
            </span>{" "}
            The Code
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hobby.title}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}