"use client"

import { useState } from "react"


interface FlashcardProps {
  question: string;
  answer: string;
  category: string;
}

export default function Flashcard({ question, answer, category }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className="h-72 w-full perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-8 
          bg-gradient-to-br from-violet-300 to-indigo-300 border-2 border-violet-100"
        >
          <div
            className="absolute top-4 left-4 px-2 py-1 
            bg-violet-100 rounded-full text-xs font-medium text-violet-700"
          >
            {category}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">{question}</h2>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 
          bg-gradient-to-br from-violet-300 to-indigo-300 border-2 border-indigo-100 shadow-lg"
        >
          <div className="text-center">
            <p className="text-xl font-medium text-gray-800 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
