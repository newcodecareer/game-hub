import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  // console.log(gameDetail)
  if (isLoading) return <Spinner />;
  if (error) throw error;
  //if (error || !data) throw

  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
