import axios, { AxiosError } from "axios";
import { API } from "./API";

export class httpCatService {
  static async getHttpStatus(access_token: string, httpStatus: string) {
    try {
      return await axios.get(`${API}/cat/${httpStatus}`, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error) return undefined;
    }
  }
}
