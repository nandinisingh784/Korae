import koreanWords from "../data/koreanWords"
import { useEffect, useState } from "react"
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore"

import { db, auth } from "../firebase/config"

function Vocabulary() {

  const [word, setWord] = useState("")
    const [words, setWords] = useState([])
  const [meaning, setMeaning] = useState("")
  const handleSave = async () => {
  const fetchWords = async () => {
  useEffect(() => {

    fetchWords()

  }, [])
        const q = query(
      collection(db, "vocabulary"),
      where("user", "==", auth.currentUser.email)
    )

    const querySnapshot = await getDocs(q)

    const vocabList = []

    querySnapshot.forEach((doc) => {

      vocabList.push({
        id: doc.id,
        ...doc.data()
      })

    })

    setWords(vocabList)

  }
    try {

      await addDoc(collection(db, "vocabulary"), {

        word,
        meaning,
        user: auth.currentUser.email,
        createdAt: new Date(),
favorite: false

      })

      alert("Word saved successfully 📖")

      setWord("")
      setMeaning("")
      fetchWords()
        const handleDelete = async (id) => {
  const toggleFavorite = async (id, currentValue) => {

    const wordRef = doc(db, "vocabulary", id)

    await updateDoc(wordRef, {
      favorite: !currentValue
    })

    fetchWords()

  }
    await deleteDoc(doc(db, "vocabulary", id))

    fetchWords()

  }

    } catch (error) {

      alert(error.message)

    }

  }
  return (
    <div className="min-h-screen bg-[#F8F5F1] p-8">

      <h1 className="text-5xl font-bold font-['Cormorant_Garamond'] text-[#4B3F35] mb-10">
        Vocabulary 📖
      </h1>

      <div
  onClick={() => navigate("/vocabulary")}
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Korean Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#EAE2D6] outline-none"
          />

          <input
            type="text"
            placeholder="Meaning"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#EAE2D6] outline-none"
          />

         <button
  onClick={handleSave}
  className="bg-[#A67B5B] text-white px-8 py-4 rounded-xl"
> 
            Save Word
          </button>
                {/* Built-in Korean Words */}
      <div className="mb-16">

        <h2 className="text-4xl font-bold font-['Cormorant_Garamond'] mb-8 text-[#4B3F35]">
          Korean Essentials 🇰🇷
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {koreanWords.map((item) => (

            <div
              key={item.id}
              className="bg-[#FFFDF9] p-6 rounded-3xl shadow-sm"
            >

              <h3 className="text-3xl font-bold text-[#4B3F35] mb-2">
                {item.word}
              </h3>

              <p className="text-lg text-[#6B5B4D]">
                {item.meaning}
              </p>

              <p className="mt-3 text-sm text-[#A67B5B]">
                📚 {item.category}
              </p>

            </div>

          ))}

        </div>

      </div>
      {/* Saved Words */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">

        {words.map((item) => (

          <div
            key={item.id}
            className="bg-[#FFFDF9] p-6 rounded-3xl shadow-sm"
          >

           <div className="flex gap-3">

  <button
    onClick={() =>
      toggleFavorite(item.id, item.favorite)
    }
    className="text-2xl"
  >
    {item.favorite ? "⭐" : "☆"}
  </button>

  <button
    onClick={() => handleDelete(item.id)}
    className="text-red-500 hover:opacity-70"
  >
    ✕
  </button>

</div>
          </div>

        ))}

      </div>
        </div>

      </div>

    </div>
  )
}

export default Vocabulary