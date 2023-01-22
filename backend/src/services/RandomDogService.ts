import axios from "axios";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

enum ElementTypes {
  VIDEO = "VIDEO",
  IMAGE = "IMG",
}

class RandomDogService {
  static getElement(jsDom: jsdom.JSDOM) {
    return jsDom.window.document.getElementById("dog-img");
  }

  static getImage(element: HTMLElement) {
    const imageURL = element.getAttribute("src");

    return imageURL;
  }

  static getVideo(element: HTMLElement) {
    const elementFirstChild = element.children[0];

    if (!elementFirstChild) throw new Error("Internal server error");

    const videoURL = elementFirstChild.getAttribute("src");
    return videoURL;
  }

  static async getUrl(): Promise<string> {
    const URL = `https://random.dog/`;

    const { data } = await axios.get(URL);

    const jsDom = new JSDOM(data);

    const element = RandomDogService.getElement(jsDom);

    if (!element) throw new Error("Element not found");

    const tagName = element.tagName;

    if (tagName === ElementTypes.IMAGE) {
      const src = RandomDogService.getImage(element);

      return `${URL}${src}`;
    }

    if (tagName === ElementTypes.VIDEO) {
      const src = RandomDogService.getVideo(element);

      return `${URL}${src}`;
    }

    throw new Error("URL not found");
  }
}

export default RandomDogService;
