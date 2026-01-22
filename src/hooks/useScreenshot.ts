import APIClient from "../service/api-client";
import { Screenshot } from "../entities/Screenshot";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshot;
