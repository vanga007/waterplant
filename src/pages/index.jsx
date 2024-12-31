import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Perform any localStorage logic here if needed
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (typeof window === "undefined") return;



    const credentials = {
      "shrasshine123@gmail.com": { password: "shrasshine@123S", path: "/dashboard", credential: "shrasshine" },
      "militarydashborad123@gmail.com": { password: "military@123M", path: "/militarydashborad", credential: "Military" },
      "KVTdashborad123@gmail.com": { password: "kvt@123K", path: "/Kvtdashborad", credential: "KVT" },
      "jcomaplinedashborad123@gmail.com": { password: "jcomapline@123J", path: "/jcomaplinedashborad", credential: "JCO MAP LINE" },
      "gunrock1dashborad@gmail.com": { password: "gunrock1@G", path: "/gunrock1dashborad", credential: "GUNROCKTANK1" },
      "gunrock2dashborad@gmail.com": { password: "gunrock2@G", path: "/gunrock2dashborad", credential: "GUNROCKTANK2" },
      "goughlinedashborad@gmail.com": { password: "goughline1@G", path: "/goughlinedashborad", credential: "GOUGHLINETANK" },
      "bmhmilitarydashborad123@gmail.com": { password: "bmhilitary@B", path: "/bhmilitarydashborad", credential: "bmh" },

    };

    const user = credentials[username];

    if (user && user.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("activeCredential", user.credential);
      router.push(user.path);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mb-8">Please log in to access your dashboard</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-teal-500 hover:underline hover:text-teal-600 text-sm">
              Forgot Username?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
