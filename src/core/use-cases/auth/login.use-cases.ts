import { HttpAdater } from "../../../config/http/http.adapter";
import { LoginResponse } from "../../../infraestructure/interfaces/loginResponse";
import { UserMapper } from "../../../infraestructure/mappers/user.mapper";
import { User } from "../../entities/user.entity";
import { handleError } from "../../errors/handleError";

interface Props {
  email: string;
  password: string;
}

export const LoginUserUseCases = async (
  credentials: Props,
  fetcher: HttpAdater
): Promise<User> => {
  try {
    const { email, password } = credentials;

    const response = await fetcher.post<LoginResponse>("/v1/user/login", {
      email: email,
      password: password,
    });

    return UserMapper.fromLoginResponseToEntity(response);
  } catch (error) {
    const processedError = handleError(error);
    console.error("Error procesado: ", processedError);
    throw new Error(`${processedError.message} ${processedError.status}`);
  }
};
