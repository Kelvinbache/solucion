import { number, object, string } from "yup";

function data(value) {
  return (req, res, next) => {
    try {
      
     value(req.body);
      next();

    } catch (error) {
      next(error);
    }
  };
}

function value(data) {
  const { name, password } = data;

  const schema = object({ name: string(), password: number()});
  schema.validateSync({ name: name, password: password });
}

export { data, value };
