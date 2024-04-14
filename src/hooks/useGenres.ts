import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenreRes {
  count: number;
  results: Genres[];
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
