import {
  Flex,
  Spacer,
  Box,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [display, setDisplay] = useState("none");

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      bg="#362c64"
      w="100%"
      p={4}
      height={100}
    >
      <Box boxSize="100px" p="2">
        <Link to={"/"}>
          <Image src="mycomiclablogo.png" alt="logo" />
        </Link>
      </Box>
      <Spacer />
      {/* Desktop */}
      <Flex
        color="white"
        display={["none", "none", "flex", "flex"]}
        fontFamily={"Outfit"}
        gap="4"
        cursor="pointer"
      >
        <Link to={"/about"} className="navbarlink">
          Sobre MyComicLab
        </Link>
        {/*<Box className="navbarlink">Venta</Box> */}
        <Menu>
          <MenuButton backgroundColor={"#362c64"} as={Text}>
            Colección
          </MenuButton>
          <MenuList borderColor={"#362c64"} backgroundColor={"#362c64"}>
            <MenuItem
              as={Link}
              to={"/coleccion?publisher=marvel"}
              backgroundColor={"#362c64"}
            >
              Marvel
            </MenuItem>
            <MenuItem
              as={Link}
              to={"/coleccion?publisher=dc"}
              backgroundColor={"#362c64"}
            >
              DC
            </MenuItem>
            <MenuItem
              as={Link}
              to={"/coleccion?publisher=other"}
              backgroundColor={"#362c64"}
            >
              Otros
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to={"/contacto"} className="navbarlink">
          Contacto
        </Link>
      </Flex>

      {/* Mobile button */}
      <Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => setDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link to={"/about"} className="navbarlink">
            Sobre MyComicLab
          </Link>
          <Menu>
            <MenuButton className="navbarlink" as={Text}>
              Colección
            </MenuButton>
            <MenuList borderColor={"#362c64"}>
              <MenuItem as={Link} to={"/coleccion?publisher=marvel"}>
                Marvel
              </MenuItem>
              <MenuItem as={Link} to={"/coleccion?publisher=dc"}>
                DC
              </MenuItem>
              <MenuItem as={Link} to={"/coleccion?publisher=other"}>
                Otros
              </MenuItem>
            </MenuList>
          </Menu>

          <Link to={"/contacto"} className="navbarlink">
            Contacto
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
