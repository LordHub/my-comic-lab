import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
export default function CardPic({ title, imagen, texto }) {
  return (
    <Card align="center">
      <CardHeader>
        <Heading fontFamily={"Outfit"} size="md">
          {title}
        </Heading>
      </CardHeader>
      <CardBody align="center">
        <Image maxH={"350px"} src={imagen} />
        <Text>{texto}</Text>
      </CardBody>
      <CardFooter>
        <Button>Ver más</Button>
      </CardFooter>
    </Card>
  );
}
