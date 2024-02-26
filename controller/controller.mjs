import { Admin } from "../errors/admin.mjs";
import { delete_users, url, write } from "../sql/base_data.mjs";

// 
const admin = (req, res) => {
  res.status(200).render('pages/index.ejs')
};

//this is validation of data, admin 
const validation_admin = (req,res,next) => {
  const { name, password } = req.body;

//Condition for get in to thr page of admin
  if (name === "rey" && password === '123') { 
    res.status(200).render("pages/form_users.ejs");
  } else {
    next(new Admin());
  }
}
 
// this crete a user
const post = (req, res) => {
  url(req.body); // Put as middleware --> debemos cambiar esto
  res.status(201).json({ status: "ok", response: write() });
};

//this delete user for param id
const remover = (req, res) => {
  res.status(200).json({
    status: "ok",
    response: "delete exit",
    action: delete_users(req.params.id), // debemo cambiar esto 
  });
};

export { post, remover, admin, validation_admin};
