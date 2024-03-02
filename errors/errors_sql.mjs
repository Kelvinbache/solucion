class Errors_sql extends Error {
  
  constructor(error) {
    super(error.message);

    this.name = "error in base data";
    this.code = error.code;
  }

  error() {
    return {
      name: this.name,
      code: this.code,
      massage: this.message,
    };
  }
}

export { Errors_sql };
