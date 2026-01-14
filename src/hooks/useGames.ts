import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery, GameQueryParams } from "../App";
import APIClient, { FetchResponse } from "../service/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQueryParams: GameQueryParams) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQueryParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQueryParams.genreId,
          parent_platforms: gameQueryParams.platformId,
          ordering: gameQueryParams.orderValue,
          search: gameQueryParams.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGames;
