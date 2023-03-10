import axios from "axios";
import { Result } from "../interfaces/RandomUserGeneratorResponse";

class RandomUserGeneratorService {
  static async getRandomUsers(results: number): Promise<Result[]> {
    const URL = `http://randomuser.me/api/?results=${results}`;
    const response = await axios.get(URL);
    return response.data.results;
  }
}

export default RandomUserGeneratorService;
