import bcrypt from "bcrypt";

import { IUserRepository } from "..";
import { UserDTO } from "../../user.dto";

import { User } from "../../user.model";
import { UserSchema } from "../../user.schema";

export class UserRepository implements IUserRepository {
  async findOne(query: object): Promise<UserDTO> {
    return await UserSchema.findOne(query);
  }

  async create(user: User) {
    return UserSchema.create(user);
  }
}
