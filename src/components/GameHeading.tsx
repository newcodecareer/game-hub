import { Heading } from "@chakra-ui/react";
import useGenreFinder from "../hooks/useGenreFinder";
import usePlatformFinder from "../hooks/usePlatformFinder";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenreFinder(genreId);
  const platform = usePlatformFinder(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
    // <Heading>{gameQuery.platform?.name} {gameQuery.genre?.name} Games</Heading>
  );
};

export default GameHeading;
