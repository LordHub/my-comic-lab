import { Flex, Image, Text } from "@chakra-ui/react";
export default function CardVenta({ imagen, name }) {
  return (
    <Flex className="container" justifyContent={"center"}>
      <Image className="image" width="150px" height="200px" src={imagen} />
      <Text className="text">{name}</Text>
    </Flex>
  );
}
