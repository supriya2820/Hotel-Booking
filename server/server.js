import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";

// ✅ Connect to MongoDB
connectDB();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ✅ Routes
app.use("/api/clerk", clerkWebhooks);
app.use("/api/user", userRouter);

// ✅ Health check route
app.get("/", (req, res) => res.send("API is Working"));

// ✅ Export only — Vercel runs this, no need to listen manually
export default app;



