import { AxiosAdapter } from "./http/axios.adapter";

export const cipherApiFetcher = new AxiosAdapter({
  baseURL: import.meta.env.VITE_CIPHER_API_URL as string,
});
