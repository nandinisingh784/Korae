import ProtectedRoute from "./components/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vocabulary from "./pages/Vocabulary"
import Flashcards from "./pages/Flashcards"
import AITutor from "./pages/AITutor"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/ai" element={<AITutor />} />
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App