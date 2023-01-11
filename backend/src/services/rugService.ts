import axios from "axios";
import { Result } from "../interfaces/RugResponse";

interface RugResponse {
  results: Result[];
}

class rugService {
  static async getRandomUsers(results: number): Promise<RugResponse> {
    const URL = `http://randomuser.me/api/?results=${results}`;
    const response = await axios.get(URL);
    return response.data.results;
  }
}

export default rugService;
