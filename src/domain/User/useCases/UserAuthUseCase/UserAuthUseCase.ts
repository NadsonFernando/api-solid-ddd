import { IUserRepository } from "../../repository";

export class UserAuthUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(email: string, password: string) {
    this.repository.authenticate(email, password);
  }
}
