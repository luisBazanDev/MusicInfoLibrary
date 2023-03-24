import axios from "axios";
import config from "../config.json";

export async function requestSongs() {
  const data = await axios.get("/api/list", {
    method: "get",
    baseURL: config.api,
  });
  if (data.status != 200)
    return {
      size: 0,
      date: Date.UTC(),
      songs: [],
    };
  return data.data;
}
