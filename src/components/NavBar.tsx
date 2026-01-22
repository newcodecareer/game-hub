import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Navigate, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      {/* video not right, can use the image address here, but for deploy, ? */}
      {/* TODO change image to pub when deploy */}
      <NavLink to="/">
        <Image src={logo} boxSize="60px" width="75px" />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
