import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleDemo } from "./routes/demo";
import { handleAIChat, handleAIHint } from "./routes/ai-chat";

dotenv.config();

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });
  app.get("/api/demo", handleDemo);
  app.post("/api/ai-chat", handleAIChat);
  app.post("/api/ai-hint", handleAIHint);

  return app;
}
