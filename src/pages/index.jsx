import { useState } from "react"
import { useRouter } from "next/router"

const LoginComponent = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const org1Credentials = {
    username: "shrasshine123@gmail.com",
    password: "shrasshine@123S",
    credential: 'military'
  }
  const org2Credentials = {
    username: "militarydashborad123@gmail.com",
    password: "military@123M",
    credential: 'Military'
  }
  const org3Credentials = {
    username: "KVTdashborad123@gmail.com",
    password: "kvt@123K",
    credential: 'KVT'
  }
  const org4Credentials = {
    username: "jcomaplinedashborad123@gmail.com",
    password: "jcomapline@123J",
    credential: 'JCO MAP LINE'
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (
      username === org1Credentials.username &&
      password === org1Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('activeCredential', org1Credentials.credential)
      router.push('/dashboard')
    }
    else if (
      username === org2Credentials.username &&
      password === org2Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('activeCredential', org2Credentials.credential)
      router.push('/militarydashborad')
    }
    else if (
      username === org3Credentials.username &&
      password === org3Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('activeCredential', org3Credentials.credential)
      router.push('/Kvtdashborad')
    }
    else if (
      username === org4Credentials.username &&
      password === org4Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('activeCredential', org4Credentials.credential)
      router.push('/jcomaplinedashborad')
    }
    // Invalid credentials
    else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="flex justify-center text-2xl font-semibold text-gray-800 mb-6">
          Welcome!
        </h2>
        <h2 className="flex justify-center text-2xl font-semibold text-gray-800 mb-6">
          Login to your account
        </h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-2 border-b border-gray-300 focus:outline-none text-black focus:border-gray-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-2 border-b border-gray-300 focus:outline-none text-black focus:border-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-[#30aab3] text-white py-2 rounded hover:bg-[#54b1b8] focus:outline-none"
          >
            Login
          </button>
          <a
            className="text-[#30aab3] text-sm mt-4 inline-block hover:text-[#54b1b8]"
            href="#"
          >
            Forgot Username?
          </a>
        </form>
      </div>
    </div>
  )
}

export default LoginComponent
