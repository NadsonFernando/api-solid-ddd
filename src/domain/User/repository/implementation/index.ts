import bcrypt from "bcrypt";

import { IUserRepository } from "..";

import { User } from "../../user.model";
import { UserSchema } from "../../user.schema";

export class UserRepository implements IUserRepository {
  async findOne(query: object): Promise<User> {
    return await UserSchema.findOne(query);
  }

  async create(user: User) {
    try {
      bcrypt.hash(
        user.password,
        6,
        async (err: object | undefined, hash: string) => {
          if (err) {
            return { err };
          }

          user.password = hash;
          await UserSchema.create(user);
        }
      );
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  authenticate(email: string, password: string): void {
    console.log({ email, password });
  }
}
