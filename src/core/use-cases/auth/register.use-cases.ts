import { HttpAdater } from "../../../config/http/http.adapter";
import { RegisterResponse } from "../../../infraestructure/interfaces/registerResponse";
import { RegisterMapper } from "../../../infraestructure/mappers/register.mapper";
import { User } from "../../entities/user.entity";
import { handleError } from "../../errors/handleError";

interface Props {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  pin: string;
}

export const RegisterUserUseCases = async (
  userData: Props,
  fetcher: HttpAdater
): Promise<User> => {
  try {
    const { name, surname, email, password, phone, pin } = userData;

    const response = await fetcher.post<RegisterResponse>("/v1/user/register", {
      name: name,
      surname: surname,
      email: email,
      password: password,
      cellphone: phone,
      pin: pin,
    });

    return RegisterMapper.fromRegisterResponseToEntity(response);
  } catch (error) {
    const processedError = handleError(error);
    console.error("Error procesado: ", processedError);
    throw new Error(`${processedError.message} ${processedError.status}`);
  }
};
