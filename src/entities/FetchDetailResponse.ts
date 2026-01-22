import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { publisher } from "./Publisher";

export interface FetchDetailResponse {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: publisher[];
}
