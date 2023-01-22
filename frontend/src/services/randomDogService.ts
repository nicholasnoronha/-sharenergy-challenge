import axios, { AxiosError } from "axios";
import { API } from "./API";

export class randomDogService {
  static async getRandomImageOrGif(access_token: string) {
    try {
      return await axios.get(`${API}/dog`, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }
}
