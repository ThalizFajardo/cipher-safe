import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cipherApiFetcher } from "../../../config/cipher-api.adapter";
import * as UseCases from "../../../core/use-cases";
import { onLogin, onLogout, RootState } from "../../store";

interface LoginProps {
  email: string;
  password: string;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuthStore = () => {
  const { status, user, errorMessage } = useTypedSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const startLogin = async (credentials: LoginProps) => {
    try {
      const response = await UseCases.LoginUserUseCases(
        credentials,
        cipherApiFetcher
      );

      localStorage.setItem("token", response.token!);

      delete response.token;

      dispatch(onLogin(response));

      return response;
    } catch (error: any) {
      startLogout(error.message);
    }
  };

  const checkAuthSession = async () => {
    try {
      const response = await UseCases.CheckingSession(cipherApiFetcher);

      dispatch(onLogin(response));
    } catch (error: any) {
      startLogout(error.message);
    }
  };

  const startLogout = (message?: string) => {
    localStorage.clear();
    dispatch(onLogout(message));
  };

  return {
    //propierties
    status,
    user,
    errorMessage,

    //methods
    startLogin,
    checkAuthSession,
    startLogout,
  };
};
