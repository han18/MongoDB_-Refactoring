import "./loadEnv.js";
import express from "express";
import morgan from "morgan";
import { conn } from "./db/conn.js";
conn();

import gradeRoute from "./routes/grades.js";

// logging to see if the .env is connecting
console.log(process.env.ATLAS_URI);

// creating the app route and port
const app = express();
// process.env for external deployment route and 3009 internal for local environment
const PORT = process.env.PORT || 3011;

// Convert received data into json body
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/grades", gradeRoute);

// root router
app.get("/", (req, res) => {
  res.send("Welcome to The Copied MongoDB Drive to Mongoose.");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// this is th ne installation for the new application of mongoose
// npm i express mongoose dotenv morgan cors
