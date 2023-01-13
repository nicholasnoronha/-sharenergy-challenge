import axios from "axios";

class HttpCatService {
  static async getStatusImage(httpCode: number): Promise<string> {
    const URL = `http://http.cat/${httpCode}`;

    const response = await axios.get(URL, { responseType: "arraybuffer" });

    return Buffer.from(response.data, "binary").toString("base64");
  }
}

export default HttpCatService;
