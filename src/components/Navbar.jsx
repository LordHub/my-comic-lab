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
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
        <Link
          href="https://www.wallapop.com/app/user/andresp-08z8px8d4863/published"
          isExternal
        >
          <Image
            width={"25px"}
            borderRadius={"10px"}
            src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/brand-motion.png?fit=690%2C690&ssl=1"
          />
        </Link>
        <Link href="https://www.vinted.nl/member/200542763" isExternal>
          <Image
            width={"25px"}
            borderRadius={"10px"}
            src="https://i.pinimg.com/originals/3a/0c/46/3a0c461f51acc10090409241e6f34051.jpg"
          />
        </Link>
        <Link
          href="https://www.todocoleccion.net/usuario/huescacity"
          isExternal
        >
          <Image
            width={"25px"}
            borderRadius={"10px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SDygNOv5mtZgRc8Xu-WD6-TZ24h8GUmsAA&s"
          />
        </Link>
        <Link to={"/about"} className="navbarlink">
          Sobre MyComicLab
        </Link>
        {/*<Box className="navbarlink">Venta</Box> */}
        <Menu>
          <MenuButton
            className="navbarlink"
            backgroundColor={"#362c64"}
            as={Text}
          >
            Colección
            <ChevronDownIcon />
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
        {/*Button with cross to close the menu*/}
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
        {/*menu to be changed*/}
        {/*
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
        */}
        <Flex flexDir="column" align="center">
          <Link
            onClick={() => setDisplay("none")}
            to={"/about"}
            className="mobileNavbarLink"
          >
            Sobre MyComicLab
          </Link>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Coleccion
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                onClick={() => setDisplay("none")}
                as={Link}
                to={"/coleccion?publisher=marvel"}
                className="mobileNavbarLink"
              >
                Marvel
              </AccordionPanel>
              <AccordionPanel
                onClick={() => setDisplay("none")}
                as={Link}
                to={"/coleccion?publisher=dc"}
                className="mobileNavbarLink"
              >
                DC
              </AccordionPanel>

              <AccordionPanel
                onClick={() => setDisplay("none")}
                as={Link}
                to={"/coleccion?publisher=other"}
                className="mobileNavbarLink"
              >
                Other
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Link
            onClick={() => setDisplay("none")}
            to={"/contacto"}
            className="mobileNavbarLink"
          >
            Contacto
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
