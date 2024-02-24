class Validation extends Error {
  constructor(error) {
    super(error.message);

    this.status = "400",
    this.name = 'validation error';
    this.path = error.path
  }

  responseTOJson() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      path: this.path,
    };
  }
}

export { Validation };
