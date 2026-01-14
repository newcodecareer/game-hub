import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data:genresData}=useGenres()
  const {data:platformsData}= usePlatforms()
  const genre= genresData.results.find(item=>item.id===gameQuery.genreId)
  const platform = platformsData.results.find(item=>item.id===gameQuery.platformId)
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
    // <Heading>{gameQuery.platform?.name} {gameQuery.genre?.name} Games</Heading>
  );
};

export default GameHeading;
