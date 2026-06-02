import { useState } from "react"
import koreanWords from "../data/koreanWords"

function Flashcards() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  const currentWord = koreanWords[currentIndex]

  const nextCard = () => {

    setShowMeaning(false)

    setCurrentIndex((prev) =>
      prev === koreanWords.length - 1 ? 0 : prev + 1
    )
  }

  return (
  <div
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>
      <h1 className="text-5xl font-bold font-['Cormorant_Garamond'] text-[#4B3F35] mb-12">
        Korean Flashcards 🧠
      </h1>

      {/* Flashcard */}
      <div
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>

        <h2 className="text-6xl font-bold text-[#4B3F35] mb-6">
          {currentWord.word}
        </h2>

        {showMeaning && (
          <p className="text-2xl text-[#6B5B4D]">
            {currentWord.meaning}
          </p>
        )}

      </div>

      {/* Buttons */}
      <div className="flex gap-5 mt-10">

        <button
          onClick={() => setShowMeaning(true)}
          className="bg-[#A67B5B] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          Reveal Meaning
        </button>

        <button
          onClick={nextCard}
          className="border border-[#A67B5B] px-8 py-4 rounded-full hover:bg-[#EAE2D6] transition"
        >
          Next Card
        </button>

      </div>

    </div>
  )
}

export default Flashcards