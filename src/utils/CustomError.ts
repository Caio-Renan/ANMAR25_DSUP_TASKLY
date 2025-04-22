class CustomError extends Error {
  status: number;
  errors: string[];

  constructor(status: number, errors: string[] = []) {
    super(errors.join(', '));
    this.status = status;
    this.errors = errors;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
