import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors"
import userRoute from "./route/user.route.js";

const app = express()
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

app.use(cors())
app.use(express.json())

try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));
} catch (error) {
  console.error("Unexpected error during MongoDB connection:", error);
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

const gracefulShutdown = async () => {
  console.log("Shutting down server...");
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
  process.exit(0);
};

process.on('SIGINT', gracefulShutdown);

process.on('SIGTERM', gracefulShutdown);