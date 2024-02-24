const errorsGlobal = (error, req, res, next) => {
  let errorObjet;

  if (typeof error.responseTOJson === "function") {
    
    errorObjet = error.responseTOJson();

  } else {
      errorObjet = {
      status: 500,
      message: "error for part of server",
      name: "error of server",
    };
  }
  res.status(errorObjet.status).json(errorObjet)
};

export { errorsGlobal };
