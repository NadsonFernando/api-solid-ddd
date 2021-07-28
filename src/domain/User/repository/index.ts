import { User } from "../user.model";
import { UserDTO } from "../user.dto";

export interface IUserRepository {
  findOne(query: object): Promise<UserDTO>;
  create(user: User): void;
}
