// import express from "express"
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import { clerkMiddleware } from '@clerk/express'
// import clerkWebhooks from "./controllers/clerkWebhooks.js";
// import userRouter from "./routes/userRoutes.js";

// connectDB()

// const app = express()
// app.use(cors()) //ENABLE CROSS-ORIGIN RESOURCE SHARING

// //MIDDLEWARE
// app.use(express.json())
// app.use(clerkMiddleware())

// //API TO LISTEN TO CLERK WEBHOOKS
// app.use("/api/clerk",clerkWebhooks);

// app.get('/',(req,res)=> res.send('API is Working'))
// app.use('/api/user', userRouter)

// const PORT = process.env.PORT || 3000;

// // app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
// export default app; // Don't start server manually; let Vercel handle it



import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is Working"));

export default app;
