export default function Hero() {
  return (
    <section
      id="hero"
       className="min-h-screen flex items-center justify-center ..."
>
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">Thomas</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
           Developer | Full-Stack Enthusiast | AI Integration Experimenter
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-gray-400 hover:bg-gray-800 transition px-6 py-3 rounded-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
