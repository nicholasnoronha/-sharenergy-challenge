import axios, { AxiosError } from "axios";
import { API } from "./API";

export class randomUserGeneratorService {
  static async getRandomUsers(access_token: string, page = 1, limit = 8) {
    try {
      return await axios.get(
        `${API}/random-user-generator/users?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: access_token,
          },
        }
      );
    } catch (err: unknown) {
      const error = err as AxiosError;
      const data = error.response!.data as { message: string };
      alert(data.message);
    }
  }
}
