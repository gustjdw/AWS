"use strict";

import express from "express";
import dotenv from "dotenv";

import { dbRouter } from "./routes/dbRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", (req, res) => {
  res.send("Hi Hello");
});
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use("/db", dbRouter);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
