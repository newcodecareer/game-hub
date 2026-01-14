import React from "react";
import usePlatforms from "./usePlatforms";

const usePlatformFinder = (id?: number) => {
  const { data: platformsData } = usePlatforms();
  return platformsData.results.find((item) => item.id === id);
};

export default usePlatformFinder;
