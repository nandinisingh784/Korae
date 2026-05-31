import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-[#FFFDF9] border-r border-[#EAE2D6] p-6">

            <h1 className="text-3xl font-bold text-[#4B3F35] mb-10">
                Korae 🇰🇷
            </h1>

            <div className="flex flex-col gap-4">

                <Link
                    to="/dashboard"
                    className="p-3 rounded-xl hover:bg-[#F8F5F1]"
                >
                    🏠 Dashboard
                </Link>

                <Link
                    to="/vocabulary"
                    className="p-3 rounded-xl hover:bg-[#F8F5F1]"
                >
                    📖 Vocabulary
                </Link>

                <Link
                    to="/flashcards"
                    className="p-3 rounded-xl hover:bg-[#F8F5F1]"
                >
                    🧠 Flashcards
                </Link>

                <Link
                    to="/ai"
                    className="p-3 rounded-xl hover:bg-[#F8F5F1]"
                >
                    🤖 AI Tutor
                </Link>
                
                <button className="mt-6 bg-[#A67B5B] text-white px-4 py-3 rounded-xl">
                    Logout
                </button>

            </div>

        </div>
    )
}

export default Sidebar

