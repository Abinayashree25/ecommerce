import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Log from './Login.module.css';

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://ecommerce-backend-2946.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);

      setIsLoggedIn(true);

      // 🔥 IMPORTANT FIX
      navigate("/");   // ← HOME PAGE PATH

    } catch (err) {
      console.error(err);
      setError("Server error. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Log.loginContainer}>
      <form className={Log.loginBox} onSubmit={handleLogin}>

        <p>Login to AS Beauty Store 💖</p>

        {error && <p className={Log.error}>{error}</p>}

        <input
          type="email"
          placeholder="📧 Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="🔒 Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
}

export default Login;