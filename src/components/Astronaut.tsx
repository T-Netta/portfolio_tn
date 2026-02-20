"use client"

type AstronautProps = {
  size?: number
  className?: string
}

export default function Astronaut({ size = 70, className = "" }: AstronautProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Helmet */}
      <div className="absolute w-full h-full bg-white rounded-full border-4 border-gray-300 shadow-lg">
        {/* Visor */}
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[50%] bg-blue-200 rounded-full opacity-80"></div>
      </div>

      {/* Body */}
      <div className="absolute bottom-[-30%] left-[25%] w-[50%] h-[50%] bg-white rounded-xl border-2 border-gray-300"></div>

      {/* Arms */}
      <div className="absolute left-[-15%] top-[40%] w-[30%] h-[15%] bg-white rounded-full border border-gray-300 rotate-[-20deg]"></div>
      <div className="absolute right-[-15%] top-[40%] w-[30%] h-[15%] bg-white rounded-full border border-gray-300 rotate-[20deg]"></div>

      {/* Jetpack */}
      <div className="absolute bottom-[-30%] left-[10%] w-[20%] h-[40%] bg-gray-400 rounded-md"></div>
      <div className="absolute bottom-[-30%] right-[10%] w-[20%] h-[40%] bg-gray-400 rounded-md"></div>
    </div>
  )
}