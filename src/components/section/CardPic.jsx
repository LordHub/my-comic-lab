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
export default function CardPic({ title, imagen, texto = "", publisher }) {
  return (
    <Card align="center">
      <CardHeader>
        <Heading fontFamily={"Outfit"} size="md">
          {title}
        </Heading>
      </CardHeader>
      <CardBody align="center">
        <Image maxH={"350px"} src={imagen} />
        {texto && (<Text marginTop={"20px"}>{texto}</Text>)}
      </CardBody>
      <CardFooter pt={0}>
        <Link href={"/coleccion?publisher=" + publisher}>
          <Button>Ver más</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
