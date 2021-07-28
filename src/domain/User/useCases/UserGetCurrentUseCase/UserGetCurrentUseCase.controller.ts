import { Request, Response } from "express";
import { UserGetCurrentUseCase } from "./UserGetCurrentUseCase";

export class UserGetCurrentUseCaseController {
  private useCase: UserGetCurrentUseCase;

  constructor(useCase: UserGetCurrentUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    return null;
  }
}
