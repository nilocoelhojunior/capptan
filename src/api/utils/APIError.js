// @flow
class APIError extends Error {
  status: number = 0;
  statusText: string = '';
  message: string = '';

  constructor(status: number, statusText: string, message: string, ...params: any) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, APIError);
    }

    // Custom debugging information
    this.status = status;
    this.statusText = statusText;
    this.message = message;
  }
}

export default APIError;
