import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)

      alert("Login Successful 🎉")
      navigate("/dashboard")
    } catch (error) {
      console.error("Login Error:", error)
      alert("Login Failed ❌")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <button
        onClick={handleGoogleLogin}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
