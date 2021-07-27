import { Request, Response } from "express";
import { User } from "../../user.model";
import { UserCreateUseCase } from "./UserCreateUseCase";

export class UserCreateUseCaseController {
  private useCase: UserCreateUseCase;

  constructor(useCase: UserCreateUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.body;

    try {
      await this.useCase.execute(new User(user));

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
