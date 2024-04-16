import { Button, Center, Flex, Stack, Link } from "@chakra-ui/react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <Center minHeight={[150, 150, 200]} bg="#362c64">
      <Stack spacing={2} direction="column">
        <Link href="#">
          <Button>
            <IoMdArrowRoundUp />
            Volver a arriba
          </Button>
        </Link>
        <Flex justifyContent={"center"} gap={4}>
          <Link href="https://www.instagram.com/mycomiclab/" isExternal>
            <FaInstagram color="white" size={30} />
          </Link>

          <Link href="https://www.youtube.com/@mycomiclab1" isExternal>
            <FaYoutube color="white" size={30} />
          </Link>
        </Flex>
      </Stack>
    </Center>
  );
}
