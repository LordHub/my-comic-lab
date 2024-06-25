import {
  Button,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Link,
} from "@chakra-ui/react";
export default function ConctactCard({ title, text, btntext, cardlink, logo }) {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent={"center"}>
          {logo}
          <Text fontWeight={"bold"}>{title}</Text>
        </Flex>
      </CardHeader>
      <CardBody>{text}</CardBody>
      <CardFooter justifyContent={"center"}>
        <Button>
          <Link className="navbarlink" href={cardlink} isExternal>
            {btntext}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
