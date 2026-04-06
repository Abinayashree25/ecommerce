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
    e.preventDefault(); // ✅ prevent page reload

    // Validation
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }) // ✅ correct
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ SAVE TOKEN
      localStorage.setItem("token", data.token);

      // ✅ UPDATE STATE
      setIsLoggedIn(true);

      // ✅ REDIRECT
      navigate("/home");

    } catch (err) {
      console.error(err);
      setError("Server error. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Log.loginContainer}>
      <form className={Log.loginBox} onSubmit={handleLogin}> {/* ✅ form */}

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