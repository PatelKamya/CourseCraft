import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import courseRoutes from "./routes/course-route.js";
import enrollmentRoutes from "./routes/enrollment-route.js";
import skillRoutes from "./routes/skill.route.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/skill", skillRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.send("Server is running ");
});

// Global Error Handler (VERY IMPORTANT)
app.use((err, req, res, next) => {
  console.error(err.stack);

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Connect DB + Start Server (BEST PRACTICE)
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_STG);
    console.log("MongoDB Connected ");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Startup error ", error.message);
    process.exit(1);
  }
};

startServer();