import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a5cedab69ded4e4091445ee09f9fc428",
  },
});
