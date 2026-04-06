import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Load env variables
dotenv.config();

// Connect DB
connectDB();

const app = express();

/* ========================
   MIDDLEWARE
======================== */
app.use(cors());
app.use(express.json()); // ✅ JSON body parse
app.use(express.urlencoded({ extended: true })); // ✅ form data support

/* ========================
   TEST ROUTE
======================== */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* ========================
   🔐 AUTH LOGIN API
======================== */
app.post("/api/auth/login", (req, res) => {
  console.log("🔥 LOGIN HIT:", req.body);

  // ✅ safety check (IMPORTANT)
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body missing ❌"
    });
  }

  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required ❌"
    });
  }

  // Dummy login check
  if (email === "test@gmail.com" && password === "1234") {
    return res.json({
      success: true,
      message: "Login successful ✅",
      token: "dummy-token"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password ❌"
  });
});

/* ========================
   SERVER START
======================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});