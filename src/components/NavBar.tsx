import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      {/* video not right, can use the image address here, but for deploy, ? */}
      {/* TODO change image to pub when deploy */}
      <Link to="/">
        <Box display="block" w="60px" h="60px">
          <Image src={logo} w="100%" h="100%" />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
