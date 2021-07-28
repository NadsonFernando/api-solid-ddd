import { Request, Response } from "express";
import { UserGetCurrentUseCase } from "./UserGetCurrentUseCase";

export class UserGetCurrentUseCaseController {
  private useCase: UserGetCurrentUseCase;

  constructor(useCase: UserGetCurrentUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.useCase.execute(request);

      return response.status(200).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
