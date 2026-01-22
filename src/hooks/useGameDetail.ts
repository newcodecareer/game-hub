import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import ms from "ms";
import  FetchDetailResponse  from "../entities/FetchDetailResponse";

const apiClient = new APIClient("/games");

const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get<FetchDetailResponse>(slug),
    staleTime: ms("24h"),
  });

export default useGameDetail;
