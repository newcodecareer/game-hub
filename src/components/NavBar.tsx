import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      {/* video not right, can use the image address here, but for deploy, ? */}
      {/* TODO change image to pub when deploy */}
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
