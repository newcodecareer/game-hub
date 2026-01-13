import APIClient, { FetchResponse } from "../service/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const apiClient= new APIClient("/platforms/lists/parents")
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
