import { formatDate } from "../../config/format-date.adapter";
import { SecurityBox } from "../../core/entities/security-box.entity";
import { ListSecurityBoxResponse } from "../interfaces/listSecurityBoxResponse";

export class SecurityBoxMapper {
  static fromSecurityBoxResponseToEntity(
    response: ListSecurityBoxResponse
  ): SecurityBox {
    return new SecurityBox(
      response.id,
      response.name,
      response.favorite,
      response.icon,
      response.status,
      formatDate(response.createdAt, "YYYY-MM-DD")
    );
  }
}
