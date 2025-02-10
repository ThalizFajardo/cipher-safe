import { useState } from "react";
import * as UseCases from "./../../../core/use-cases";
import { cipherApiFetcher } from "../../../config/cipher-api.adapter";

interface Props {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  pin: string;
}

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (userData: Props) => {
    setLoading(true);
    const userCreated = await UseCases.RegisterUserUseCases(
      userData,
      cipherApiFetcher
    );
    setLoading(false);
    return userCreated;
  };

  return {
    //properties
    loading,

    //methods
    registerUser,
  };
};
