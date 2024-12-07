import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.js";
import createHttpError, { isHttpError } from "http-errors";
import taskRoutes from "./routes/task.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json()); //parse reponse in json body
app.use(morgan("tiny")); //logging api requests

app.get("/", (req, res) => {
  res.send("Hello express");
});

//api routes
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.use((req, res, next) => {
  next(createHttpError(400, "Endpoint not found"));
});

app.use((error, req, res) => {
  console.log(error);
  let errorMessage = "An  unknown error has occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.statusCode;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});
export default app;
