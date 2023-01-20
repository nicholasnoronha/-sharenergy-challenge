import axios, { AxiosError } from "axios";
const URL = "http://localhost:3000";

export class userService {
  static async login(user: string, password: string) {
    try {
      return await axios.post(`${URL}/login`, { username: user, password });
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error.message === "Network Error") {
        alert("Não foi possível conectar com servidor.");
        return;
      }
      alert(error.response?.data);
    }
  }
}
