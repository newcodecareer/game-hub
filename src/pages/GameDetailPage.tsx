import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import Screenshots from "../components/Screenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetail(slug!);

  // console.log(data)
  if (isLoading) return <Spinner />;
  // if (error) throw error;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data} />
      <GameTrailers gameId={data.id} />
      <Screenshots gameId={data.id} />
    </>
  );
};

export default GameDetailPage;
