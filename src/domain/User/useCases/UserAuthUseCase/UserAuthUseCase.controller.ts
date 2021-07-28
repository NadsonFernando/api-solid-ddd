import { Request, Response } from "express";
import { UserAuthUseCase } from "./UserAuthUseCase";

export class UserAuthUseCaseController {
  private useCase: UserAuthUseCase;

  constructor(useCase: UserAuthUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const token = await this.useCase.execute(email, password);

      return response.status(200).send({ token });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
