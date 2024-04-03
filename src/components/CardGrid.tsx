import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Heading, Img, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const CardGrid = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Img src={game.background_image} />
      <Heading size="xl">{game.name}</Heading>
      <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
    </Card>
  );
};

export default CardGrid;
