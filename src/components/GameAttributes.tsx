import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { FetchDetailResponse } from "../entities/FetchDetailResponse";

interface Props {
  data: FetchDetailResponse;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem term="Platforms">
        {data.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={data.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {data.genres.map((genre) => (
          <Text>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {data.publishers.map((publisher) => (
          <Text>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
