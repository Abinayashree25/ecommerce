import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Log from "./Login.module.css";

function Login({ setIsLoggedIn }) {  // ✅ ADD THIS
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  console.log("🔥 Login button clicked");

  try {
    setLoading(true);
    setError("");

    console.log("👉 Sending request...");

    const res = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    console.log("👉 Status:", res.status);

    const data = await res.json();
    console.log("👉 Data:", data);

    localStorage.setItem("token", data.token);

    setIsLoggedIn(true);
    navigate("/");
    

  } catch (err) {
    console.error("❌ FULL ERROR:", err);
    setError("Backend not responding!");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className={Log.loginContainer}>
      <form className={Log.loginBox} onSubmit={handleLogin}>
        <p className={Log.title}>Login to AS Beauty Store 💖</p>

        {error && <p className={Log.error}>{error}</p>}

        <input
          type="email"
          className={Log.input}
          placeholder="📧 Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className={Log.input}
          placeholder="🔒 Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={Log.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;