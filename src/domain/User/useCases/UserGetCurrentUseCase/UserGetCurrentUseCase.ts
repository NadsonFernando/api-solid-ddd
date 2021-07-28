import { IUserRepository } from "../../repository";
import { User } from "../../user.model";

export class UserGetCurrentUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(user: User) {}
}
