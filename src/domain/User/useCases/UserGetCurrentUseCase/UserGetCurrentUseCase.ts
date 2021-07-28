import { Request } from "express";
import { IUserRepository } from "../../repository";

export class UserGetCurrentUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(request: Request) {
    const { user } = request.session;

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
