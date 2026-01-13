import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import { FetchResponse } from "../service/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//{ data: genres, isLoading: false, error: null }
const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
