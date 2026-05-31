import { useNavigate } from "react-router-dom"
function Home() {
      const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#4B3F35] relative overflow-hidden">
      {/* Floating Korean Text */}
      <div className="absolute top-32 left-10 text-[#E0D6C8] text-6xl font-bold rotate-[-12deg] select-none hidden lg:block">
        한글
      </div>

      <div className="absolute bottom-40 right-16 text-[#E0D6C8] text-5xl font-bold rotate-12 select-none hidden lg:block">
        공부
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-semibold tracking-wide">
          Korae
        </h1>

        <div className="flex gap-4">

          <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 rounded-full border border-[#A67B5B] hover:bg-[#EAE2D6] transition">
            Login
          </button>

          <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 rounded-full bg-[#A67B5B] text-white hover:opacity-90 transition">
            Get Started
          </button>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28">

        <p className="uppercase tracking-[0.3em] text-sm text-[#A67B5B] mb-4">
          Learn Korean Peacefully
        </p>

       <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl font-['Cormorant_Garamond']">Your cozy AI-powered Korean learning space.</h2>

        <p className="mt-8 text-lg text-[#6B5B4D] max-w-2xl leading-relaxed">
          Learn vocabulary, practice daily, track your growth,
          and prepare for your Korean journey one peaceful step at a time.
        </p>

        <div className="mt-10 flex gap-5">

          <button
          onClick={() => navigate("/dashboard")}
          className="px-8 py-4 rounded-full bg-[#A67B5B] text-white text-lg hover:opacity-90 transition">
            Start Learning
          </button>

          <button
          onClick={() => navigate("/flashcards")}
          className="px-8 py-4 rounded-full border border-[#A67B5B] text-lg hover:bg-[#EAE2D6] transition">
            Explore Features
          </button>

        </div>

      </section>
      {/* Features Section */}
      <section className="px-8 py-28">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#A67B5B] mb-4">
            Features
          </p>

          <h3 className="text-4xl font-bold font-['Cormorant_Garamond']">
            Everything you need to learn Korean.
          </h3>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div
  onClick={() => navigate("/vocabulary")}
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>
            <div className="text-4xl mb-5">
              📖
            </div>

            <h4 className="text-2xl font-semibold mb-3">
              Vocabulary
            </h4>

            <p className="text-[#6B5B4D] leading-relaxed">
              Learn useful Korean words with meanings,
              pronunciation, and examples.
            </p>

          </div>

          {/* Card 2 */}
         <div
  onClick={() => navigate("/flashcards")}
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>

            <div className="text-4xl mb-5">
              🧠
            </div>

            <h4 className="text-2xl font-semibold mb-3">
              Smart Flashcards
            </h4>

            <p className="text-[#6B5B4D] leading-relaxed">
              Practice daily using interactive flashcards
              and memory tracking.
            </p>

          </div>

          {/* Card 3 */}
          <div
  onClick={() => navigate("/dashboard")}
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>
            <div className="text-4xl mb-5">
              📈
            </div>

            <h4 className="text-2xl font-semibold mb-3">
              Progress Tracking
            </h4>

            <p className="text-[#6B5B4D] leading-relaxed">
              Track your learning streaks and study growth
              in one peaceful dashboard.
            </p>

          </div>

         {/* Card 4 */}
<div
  onClick={() => navigate("/ai")}
  className="bg-[#FFFDF9] p-8 rounded-3xl shadow-sm hover:shadow-md transition cursor-pointer"
>

  <div className="text-4xl mb-5">
    🤖
  </div>

  <h4 className="text-2xl font-semibold mb-3">
    AI Support
  </h4>

  <p className="text-[#6B5B4D] leading-relaxed">
    Get smart study help, explanations,
    and personalized recommendations.
  </p>

</div>

        </div>

      </section>
            {/* Dashboard Preview */}
      <section className="px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#A67B5B] mb-4">
              Smart Learning
            </p>

            <h3 className="text-5xl font-bold leading-tight mb-8">
              Study Korean with calm structure and daily progress.
            </h3>

            <p className="text-[#6B5B4D] text-lg leading-relaxed mb-8">
              Korae helps learners stay consistent with organized lessons,
              progress tracking, smart revision, and AI-assisted learning tools.
            </p>

           <button
  onClick={() => navigate("/dashboard")}
  className="px-8 py-4 rounded-full bg-[#A67B5B] text-white text-lg hover:opacity-90 transition"
>
  View Dashboard
</button>

          </div>

          {/* Right Dashboard Card */}
          <div className="bg-[#FFFDF9] rounded-[2rem] p-8 shadow-md">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-sm text-[#A67B5B]">
                  Daily Progress
                </p>

                <h4 className="text-3xl font-bold">
                  78%
                </h4>
              </div>

              <div className="bg-[#F8F5F1] px-4 py-2 rounded-full">
                🔥 12 Day Streak
              </div>

            </div>

            {/* Fake Progress Bars */}
            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Vocabulary</span>
                  <span>85%</span>
                </div>

                <div className="w-full h-3 bg-[#EAE2D6] rounded-full">
                  <div className="w-[85%] h-3 bg-[#A67B5B] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Grammar</span>
                  <span>62%</span>
                </div>

                <div className="w-full h-3 bg-[#EAE2D6] rounded-full">
                  <div className="w-[62%] h-3 bg-[#D8B4A0] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Listening</span>
                  <span>71%</span>
                </div>

                <div className="w-full h-3 bg-[#EAE2D6] rounded-full">
                  <div className="w-[71%] h-3 bg-[#4B3F35] rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Footer */}
      <footer className="px-8 py-10 border-t border-[#EAE2D6] mt-20">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <h4 className="text-2xl font-semibold">
            Korae
          </h4>

          <p className="text-[#6B5B4D] text-sm">
            Built for peaceful Korean learning 🇰🇷
          </p>

        </div>

      </footer>
    </div>
  )
}

export default Home