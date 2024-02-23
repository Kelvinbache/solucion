/**
 * 3) recover of the data
 * 4) drive the errors
 */
//----------------------------------------------------
import express from "express";
//-----------------------------------------------------
import { delete_users, url, write } from "../sql/base_data.mjs";
//-----------------------------------------------------
import { data, value } from "./validation.mjs";

const app = express();

app.disable("x-powered-by");

app.use(express.urlencoded());

app.use(express.json());

// app.use(express.static("public"));

// app.get("/api/users/v1", (req, res, next) => {
//   res.status(200).render("index.html");
// });

app.post("/api/users/v1", data(value), (req, res) => {
  url(req.body);
  res.status(201).json({ status: "ok", response: write() });
});

app.delete("/api/users/v1/:id", (req, res) => {
  res.status(200).json({
    status: "ok",
    response: "delete exit",
    action: delete_users(req.params.id),
  });
});

app.use((error, req, res, next) => {
  res.status(404).json({
    status: "error",
    message: error.message,
  });
});

app.listen(3000, () => console.log("http://localhost:3000"));
