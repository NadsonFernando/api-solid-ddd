declare namespace Express {
  interface Request {
    session: {
      user: object;
    };
  }
}
