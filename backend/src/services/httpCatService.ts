import axios from "axios";

class HttpCatService {
  static async getStatus(httpCode: number): Promise<any> {
    const URL = `http://http.cat/${httpCode}`;

    return axios
      .get(URL, {
        responseType: "arraybuffer",
      })
      .then((response) =>
        Buffer.from(response.data, "binary").toString("base64")
      );
  }
}

export default HttpCatService;
