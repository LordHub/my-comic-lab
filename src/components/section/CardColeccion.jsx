import { Card, Heading, Image, Badge, Flex, Box } from "@chakra-ui/react";
export default function CardColeccion({ title, imagen, year, condition }) {
  const circleBadge = () => {
    let backgroundColor = "";
    if (year < 1956) {
      backgroundColor = "#FFD700";
    } else if (year >= 1956 && year <= 1970) {
      backgroundColor = "#C0C0C0";
    } else if (year > 1970 && year <= 1985) {
      backgroundColor = "#CD7F32";
    } else if (year > 1985) {
      backgroundColor = "#362c64";
    }
    return (
      <Box
        position={"absolute"}
        top="5px"
        right={"5px"}
        height={"20px"}
        width={"20px"}
        borderRadius={"70px"}
        backgroundColor={backgroundColor}
      ></Box>
    );
  };

  return (
    <Card className="container" align="center" position={"relative"}>
      {circleBadge()}
      <Image className="image" maxH={"350px"} src={imagen} />
      <Heading className="text" fontFamily={"Outfit"} size="md">
        {title}
        <br />
        {year} <br />
        {condition + " condition"}
      </Heading>
    </Card>
  );
}
