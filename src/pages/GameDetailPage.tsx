import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(gameDetail)
  if (isLoading) return <Spinner />;
  if (error) throw error;
  //if (error || !data) throw

  if (!data?.description_raw) return null;
  const showDes = data?.description_raw.slice(0, isOpen ? undefined : 300);

  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>
        {showDes}
        {data.description_raw.length > 300 && (
          <Button
            colorScheme="green"
            onClick={() => setIsOpen(!isOpen)}
            paddingY={2}
            marginX={2}>
            {isOpen ? "Less" : "More..."}
          </Button>
        )}
      </Text>
    </>
  );
};

export default GameDetailPage;
