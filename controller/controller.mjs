import { Admin } from "../errors/admin.mjs";
import { delete_users, url, write } from "../sql/base_data.mjs";

// Doing tha function admin 
const admin = (req, res, next) => {

  const { name, password } = req.body;
  //const authorization = req.headers["authorization"];

  if (name === "rey" && password === "123") { 
    res.status(200).json("welcome admin");
  } else {
    next(new Admin());
  }
};

// this crete a user
const post = (req, res) => {
  url(req.body); // Put as middleware
  res.status(201).json({ status: "ok", response: write() });
};

//this delete user for param id
const remover = (req, res) => {
  res.status(200).json({
    status: "ok",
    response: "delete exit",
    action: delete_users(req.params.id),
  });
};

export { post, remover, admin };
