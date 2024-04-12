import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
} from "@chakra-ui/react";
export default function YTVideos() {
  return (
    <Box padding={"60px"}>
      <Heading
        color={"#362C64"}
        padding={5}
        fontFamily={"Luckiest Guy"}
        align={"center"}
      >
        Últimos videos
      </Heading>
      <Grid gap={8} gridTemplateColumns={"1fr 1fr 1fr"}>
        <AspectRatio maxW="400" ratio={16 / 9}>
          <iframe
            title="video1"
            src="https://www.youtube.com/embed/ctHnb2SlLWo?si=xs_br90xhZXPS5Rn"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="400" ratio={16 / 9}>
          <iframe
            title="video2"
            src="https://www.youtube.com/embed/L1Blk563b3w?si=lvk9r-1DJL-E4sQW"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="400" ratio={16 / 9}>
          <iframe
            title="video3"
            src="https://www.youtube.com/embed/SB4yRlRPyS0?si=glvpkOD6ZbGyv2MD"
            allowFullScreen
          />
        </AspectRatio>
      </Grid>
      <Flex padding={"10px"} justifyContent={"right"}>
        <Link href="https://www.youtube.com/@mycomiclab1/videos" isExternal>
          <Button id="vermasbtn" backgroundColor={"red"} color={"white"}>
            Ver más
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
