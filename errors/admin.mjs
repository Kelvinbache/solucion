class Admin extends Error {
  constructor() {
    super("not are you admin");

    (this.status = "401"), (this.name = "not are you admin");
  }

  responseTOJson() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    };
  }
}

export { Admin }