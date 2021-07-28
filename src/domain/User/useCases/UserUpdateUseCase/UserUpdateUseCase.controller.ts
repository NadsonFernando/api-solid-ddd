import { Request, Response } from "express";
import { UserUpdateUseCase } from "./UserUpdateUseCase";

export class UserUpdateUseCaseController {
  private useCase: UserUpdateUseCase;

  constructor(useCase: UserUpdateUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.useCase.execute(request);

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
