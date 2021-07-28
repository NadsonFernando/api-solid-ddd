import { Request } from "express";
import { IUserRepository } from "../../repository";

export class UserUpdateUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(request: Request) {}
}
