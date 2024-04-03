import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    // TODO need <> here, cause map() will return more than 1 <Text></Text>
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
