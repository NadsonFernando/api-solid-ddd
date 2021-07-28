import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { IUserRepository } from "../../repository";

export class UserAuthUseCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(email: string, password: string) {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    const { id } = user.dataValues;

    const isValid = await bcrypt.compare(password, user.dataValues.password);

    if (!isValid) {
      throw new Error("Unauthorized.");
    }

    const token = jwt.sign(
      {
        id,
      },
      "secret",
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}
