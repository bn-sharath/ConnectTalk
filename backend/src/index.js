import express from "express";
import connect_DB from "./lib/db.js";

// dotenv is used for access the environment variable store in the .env file
import dotenv from "dotenv";

const app = express();
dotenv.config();


app.get("/", (req, res) => {
res.send("<h1>Hello world, Sharath here</h1>")
});



app.listen(process.env.PORT, () => {
  connect_DB();
  console.log(`server started:- ${ process.env.PORT }` );
});
