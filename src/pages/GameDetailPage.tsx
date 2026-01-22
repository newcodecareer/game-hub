import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetail(slug!);

  // console.log(gameDetail)
  if (isLoading) return <Spinner />;
  // if (error) throw error;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data} />
    </>
  );
};

export default GameDetailPage;
