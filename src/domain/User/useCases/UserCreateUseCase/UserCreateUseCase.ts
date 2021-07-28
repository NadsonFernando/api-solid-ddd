import bcrypt from "bcrypt";

import { IUserRepository } from "../../repository";
import { User } from "../../user.model";

export class UserCreateUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(user: User) {
    const exists = await this.repository.findOne({
      id: user.id,
    });

    if (!!exists) {
      throw new Error("User already exists.");
    }

    const hash = await bcrypt.hash(user.password, 6);

    if (!hash) {
      throw new Error("Error generating hash.");
    }

    user.password = hash;
    this.repository.create(user);
  }
}
