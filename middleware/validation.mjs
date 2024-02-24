import { Validation } from "../errors/validation.mjs";

import { number, object, string } from "yup";

function data(value) {
  return (req, res, next) => {
    try {
      value(req.body);
      next();
    } catch (error) {
      next(new Validation(error));
    }
  };
}

function value(data) {
  const { name, password } = data;

  // if (typeof name !== "string") {
  //   throw new Error("this is not value string");
  // }


  // if ( name === " ") {
  //   throw new Error("this is putting values empty");
  // }


  // if (typeof password !== "number") {
  //   throw new Error("this is not value string");
  // }



  const schema = object({ name: string().default(), password: number() }); //---> No We know that passed
  schema.validateSync({ name: name, password: password });
}

export { data, value };
