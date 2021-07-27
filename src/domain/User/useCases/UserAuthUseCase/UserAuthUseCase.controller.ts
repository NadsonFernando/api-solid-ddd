import { Request, Response } from "express";
import { UserAuthUseCase } from "./UserAuthUseCase";

export class UserAuthUseCaseController {
  private useCase: UserAuthUseCase;

  constructor(useCase: UserAuthUseCase) {
    this.useCase = useCase;
  }

  handle(request: Request, response: Response): void {
    const { email, password } = request.body;

    this.useCase.execute(email, password);
  }
}
