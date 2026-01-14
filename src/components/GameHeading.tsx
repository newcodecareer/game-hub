import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGenreFinder from "../hooks/useGenreFinder";
import usePlatformFinder from "../hooks/usePlatformFinder";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreFinder(gameQuery.genreId);
  const platform = usePlatformFinder(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
    // <Heading>{gameQuery.platform?.name} {gameQuery.genre?.name} Games</Heading>
  );
};

export default GameHeading;
