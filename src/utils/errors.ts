export class BadRequest extends Error {
  constructor(
    message: string,
    public statusCode = 400,
    public result: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.result = result;
    this.name = "BadRequest";
  }
}

export class Unauthorized extends Error {
  constructor(
    message: string,
    public statusCode = 401,
    public result: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.result = result;
    this.name = "Unauthorized";
  }
}

export class Forbidden extends Error {
  constructor(
    message: string,
    public statusCode = 403,
    public result: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.result = result;
    this.name = "Forbidden";
  }
}

export class NotFound extends Error {
  constructor(
    message: string,
    public statusCode = 404,
    public result: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.result = result;
    this.name = "NotFound";
  }
}

export class InternalServerError extends Error {
  constructor(
    message: string,
    public statusCode = 500,
    public result: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.result = result;
    this.name = "InternalServerError";
  }
}
