import { User } from "../user.model";

export interface IUserRepository {
  findOne(query): Promise<User>;
  create(user: User): void;
  authenticate(email: string, password: string): void;
}
