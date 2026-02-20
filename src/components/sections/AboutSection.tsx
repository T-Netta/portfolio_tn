import Astronaut from "@/components/Astronaut"

export default function AboutSection() {
  return (
    <section
      id="about"
        className="py-24 bg-transparent text-white px-6"
      >
      <div className="max-w-5xl mx-auto text-center">
                <Astronaut className="absolute bottom-15 left-150 animate-float" size={40} />

        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I'm a programming student at Kean University with a strong interest in
          full-stack web development and AI-Integrated applications. I enjoy building
          responsive, scalable applications using modern tools like React, Next.js, and Tailwind CSS.
        </p>

      </div>
    
    </section>
  )
}
