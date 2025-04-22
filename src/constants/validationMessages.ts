export const validationMessages = {
  required: (field: string) => `'${field}' is required`,
  string: {
    minLength: (field: string, minLength: number) =>
      `'${field}' must be at least ${minLength} characters`,
    maxLength: (field: string, maxLength: number) =>
      `'${field}' must be at most ${maxLength} characters`,
  },
  number: {
    positiveNumber: (field: string) => `'${field}' must be a positive number`,
    int: (field: string) => `'${field}' must be an integer`,
  },
  date: (field: string) => `'${field}' must be a valid date`,
  enums: {
    status: (field: string) => `'${field}' has an invalid task status`,
    priority: (field: string) => `'${field}' has an invalid task priority`,
  },
};
