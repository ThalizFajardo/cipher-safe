import { User } from "../../core/entities/user.entity";
import { RegisterResponse } from "../interfaces/registerResponse";

export class RegisterMapper {
  static fromRegisterResponseToEntity(
    registerResponse: RegisterResponse
  ): User {
    return new User(
      registerResponse.id,
      registerResponse.name,
      registerResponse.surname,
      registerResponse.email,
      registerResponse.cellphone
    );
  }
}
