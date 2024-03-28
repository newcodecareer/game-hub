import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Heading, Img } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const CardGrid = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Img src={game.background_image} />
      <Heading size="xl">{game.name}</Heading>
    </Card>
  );
};

export default CardGrid;
