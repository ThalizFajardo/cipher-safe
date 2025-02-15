import { HttpAdater } from "../../../config/http/http.adapter";
import { ListSecurityBoxResponse } from "../../../infraestructure/interfaces/listSecurityBoxResponse";
import { SecurityBoxMapper } from "../../../infraestructure/mappers/security-box.mapper";
import { SecurityBox } from "../../entities/security-box.entity";
import { handleError } from "../../errors/handleError";

interface Props {
  favorite?: boolean;
}

export const ListSecurityBoxUseCases = async (
  params: Props,
  fetcher: HttpAdater
): Promise<SecurityBox[]> => {
  try {
    const { favorite } = params;

    let endpoint = "/v1/security-box";

    if (favorite) {
      endpoint = "/v1/security-box?favorite=true";
    }

    const response = await fetcher.get<ListSecurityBoxResponse[]>(endpoint);
    /*return response.map((securityBox) => {
        return SecurityBoxMapper.fromSecurityBoxResponseToEntity(securityBox)
    })*/
    //return response.map((securityBox) => SecurityBoxMapper.fromSecurityBoxResponseToEntity(securityBox))
    return response.map(SecurityBoxMapper.fromSecurityBoxResponseToEntity);
  } catch (error) {
    const processedError = handleError(error);
    console.error("Error procesado: ", processedError);
    throw new Error(`${processedError.message} ${processedError.status}`);
  }
};
