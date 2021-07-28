import { User } from "./user.model";

export class UserDTO {
  public dataValues: User;

  constructor(dataValues: User) {
    this.dataValues = dataValues;
  }
}
