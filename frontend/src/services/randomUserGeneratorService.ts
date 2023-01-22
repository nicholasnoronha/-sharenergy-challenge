import axios, { AxiosError } from "axios";
import { API } from "./API";

export class randomUserGeneratorService {
  static async getRandomUsers(access_token: string, limit = 100) {
    try {
      return await axios.get(
        `${API}/random-user-generator/users?limit=${limit}`,
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
