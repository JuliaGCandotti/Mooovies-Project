"use client"
import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../_utils/firebase"
import styles from "./login.module.css"
import Banner from "components/Banner"
import LoadingPage from "../Loading"
import Favorites from "pages/Favorites"

export default function Login() {
  const provider = new GoogleAuthProvider()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [googleUser, setGoogleUser] = useState(null)

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const handleLoginWithPopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      setGoogleUser(result.user)
      setLoggedIn(true)
    } catch (error) {
      console.error("Google login error:", error.message)
    }
  }

  const handleLoginWithEmail = () => {
    signInWithEmailAndPassword(email, password)
  }

  // 🌀 Show loading page
  if (loading) return <LoadingPage />

  // ✅ Redirect or show something on success
  if (loggedIn || user) {
    return <Favorites /> // or redirect to another page if using router
  }

  return (
    <div>
      <Banner image="home" />
      <div className={styles.div}>
        <h1>LOGIN TO MOOOVIES</h1>

        <input
          type="email"
          placeholder="type your email..."
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="type your password..."
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error.message}</p>}

        <div>
          <button onClick={handleLoginWithPopup}>Login with Google</button>
          <button onClick={handleLoginWithEmail}>Login with Email</button>
        </div>
      </div>
    </div>
  )
}
