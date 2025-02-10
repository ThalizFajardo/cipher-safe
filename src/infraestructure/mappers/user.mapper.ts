import { User } from "../../core/entities/user.entity";
import { LoginResponse } from "../interfaces/loginResponse";

export class UserMapper {
  static fromLoginResponseToEntity(loginData: LoginResponse): User {
    return new User(
      loginData.user.id,
      loginData.user.name,
      loginData.user.surname,
      loginData.user.email,
      loginData.user.cellphone,
      loginData.token
    );
  }
}
