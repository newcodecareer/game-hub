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
      <Heading fontSize="2xl">{game.name}</Heading>
      <PlatformIconList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />
      {/* <PlatformIconList platforms={game.parent_platforms}/> 这样也可以，传过去的参数不一样*/}
    </Card>
  );
};

export default CardGrid;
