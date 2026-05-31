import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Login successful 🎉")

      navigate("/dashboard")

    } catch (error) {

      alert(error.message)

    }

  }

  return (
    <div className="min-h-screen bg-[#F8F5F1] flex items-center justify-center px-6">

      <div className="bg-[#FFFDF9] p-10 rounded-[2rem] shadow-md w-full max-w-md">

        <h1 className="text-5xl font-bold font-['Cormorant_Garamond'] text-center mb-3 text-[#4B3F35]">
          Welcome Back
        </h1>

        <p className="text-center text-[#6B5B4D] mb-8">
          Continue your Korean learning journey 🇰🇷
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#EAE2D6] outline-none focus:border-[#A67B5B]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#EAE2D6] outline-none focus:border-[#A67B5B]"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#A67B5B] text-white py-4 rounded-xl hover:opacity-90 transition"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login