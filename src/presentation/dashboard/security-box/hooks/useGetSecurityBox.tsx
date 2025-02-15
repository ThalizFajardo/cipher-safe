import { useQuery } from "@tanstack/react-query";
import { cipherApiFetcher } from "../../../../config/cipher-api.adapter";
import * as UseCases from "./../../../../core/use-cases";

interface Props {
  favorite?: boolean;
}

const getSecurityBox = (props: Props) => {
  return UseCases.ListSecurityBoxUseCases(props, cipherApiFetcher);
};

export const useGetSecurityBox = (props: Props) => {
  return useQuery({
    queryKey: ["securityBox", props],
    queryFn: () => getSecurityBox(props),
    staleTime: 1000 * 60 * 5,
  });
};
