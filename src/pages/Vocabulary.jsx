import koreanWords from "../data/KoreanWords"

function Vocabulary() {
  return (
    <div className="min-h-screen bg-[#F8F5F1] p-8">

      <h1 className="text-5xl font-bold font-['Cormorant_Garamond'] text-[#4B3F35] mb-10">
        Vocabulary 📖
      </h1>

      <p className="text-[#6B5B4D] mb-10">
        Learn useful Korean words and build your vocabulary.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        { koreanWords.map((item) => (

          <div
            key={item.id}
            className="bg-[#FFFDF9] p-6 rounded-3xl shadow-sm hover:shadow-md transition"
          >

            <h2 className="text-3xl font-bold text-[#4B3F35] mb-3">
              {item.word}
            </h2>

            <p className="text-lg text-[#6B5B4D] mb-3">
              {item.meaning}
            </p>

            <span className="text-sm text-[#A67B5B]">
              📚 {item.category}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Vocabulary