import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function Dashboard() {
      const user = auth.currentUser
      const navigate = useNavigate()

  const handleLogout = async () => {

    await signOut(auth)

    navigate("/login")

  }
  return (
  <div className="flex min-h-screen bg-[#F8F5F1]">

    <Sidebar />

    <div className="flex-1 p-10">

      <h1 className="text-5xl font-bold text-[#4B3F35] mb-3">
        Welcome Back, {user?.email?.split("@")[0]} 🌸
      </h1>

      <p className="text-[#6B5B4D] mb-10">
        Continue your Korean learning journey.
      </p>

      <div className="bg-white p-6 rounded-3xl shadow-sm mb-8">

        <p className="text-[#A67B5B]">
          Logged in as
        </p>

        <h2 className="text-xl font-semibold mt-2">
          {user?.email}
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-[#A67B5B]">
            Vocabulary Learned
          </h3>

          <p className="text-4xl font-bold mt-2">
            128
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-[#A67B5B]">
            Daily Streak
          </h3>

          <p className="text-4xl font-bold mt-2">
            🔥 12
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-[#A67B5B]">
            TOPIK Progress
          </h3>

          <p className="text-4xl font-bold mt-2">
            72%
          </p>
        </div>

      </div>

    </div>

  </div>
)
}
export default Dashboard