import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
export default function CardPic({ title, imagen, texto, publisher }) {
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
        <Link href={"/coleccion?publisher=" + publisher}>
          <Button>Ver más</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
