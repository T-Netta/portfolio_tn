"use client"
import Astronaut from "@/components/Astronaut"

import { useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function MistralChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [...messages, userMessage],
      }),
    })

    const data = await response.json()
    const botReply: Message = data.choices[0].message

    setMessages((prev) => [...prev, botReply])
    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        <Astronaut
    className="pointer-events-none animate-float group-hover:animate-wiggle-hover"
    size={30} // adjust to fit the button
  />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-gray-900 text-white rounded-xl shadow-2xl z-50 flex flex-col">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="font-semibold"> Nebula</h2>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "text-blue-400"
                    : "text-green-400"
                }
              >
                <strong>
                  {msg.role === "user" ? "You: " : "Nebula: "}
                </strong>
                {msg.content}
              </div>
            ))}
            {loading && <p className="text-gray-400">Thinking...</p>}
          </div>

          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              className="flex-1 p-2 rounded bg-gray-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}