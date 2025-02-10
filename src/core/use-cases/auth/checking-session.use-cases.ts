import { HttpAdater } from "../../../config/http/http.adapter";
import { RegisterResponse } from "../../../infraestructure/interfaces/registerResponse";
import { RegisterMapper } from "../../../infraestructure/mappers/register.mapper";
import { User } from "../../entities/user.entity";
import { handleError } from "../../errors/handleError";

export const CheckingSession = async (fetcher: HttpAdater): Promise<User> => {
  try {
    const response = await fetcher.get<RegisterResponse>(
      "/v1/user/checking-session"
    );

    return RegisterMapper.fromRegisterResponseToEntity(response);
  } catch (error) {
    const processedError = handleError(error);
    console.error("Error procesado: ", processedError);
    throw new Error(`${processedError.message} ${processedError.status}`);
  }
};
