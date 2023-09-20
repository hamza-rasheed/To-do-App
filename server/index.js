import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import todoRoute from "./routes/todo.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Setting up Routes
app.use("/todo", todoRoute);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is Now Connected"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, function () {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});
