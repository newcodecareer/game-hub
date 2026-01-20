import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(gameDetail)
  if (isLoading) return <Spinner />;
  // if (error) throw error;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
