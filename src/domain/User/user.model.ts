import { uuid } from "uuidv4";

export class User {
  public readonly id: string;

  public username: string;
  public email: string;
  public password: string;

  constructor(user: Omit<User, "id">, id?: string) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;

    if (!id) {
      this.id = uuid();
    }
  }
}
