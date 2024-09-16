import { useState } from "react";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials for two organizations
  const org1Credentials = {
    username: "shrasshine123@gmail.com",
    password: "shrasshine@123S",
  };
  const org2Credentials = {
    username: "militarydashborad123@gmail.com",
    password: "military@123M",
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Check credentials for Organization 1
    if (
      username === org1Credentials.username &&
      password === org1Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    }
    // Check credentials for Organization 2
    else if (
      username === org2Credentials.username &&
      password === org2Credentials.password
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/militarydashborad');
    }
    // Invalid credentials
    else {
      alert('Invalid credentials');
    }
  };
  
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
  );
};

export default LoginComponent;
