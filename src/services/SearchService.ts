import requestToAPI from "utils/requestToAPI";
import { APIUrls } from "utils/APIUrls";

export default class SearchService {
  public static async Search(query: string, offset: number): Promise<any> {
    return requestToAPI({
      url: `${APIUrls.SEARCH}?query=${query}&offset=${offset}`,
      method: "GET"
    });
  }
}
