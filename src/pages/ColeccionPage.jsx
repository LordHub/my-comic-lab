import CardColeccion from "../components/section/CardColeccion";
import { useEffect, useState } from "react";
import ComicsService from "../services/ComicsService";
import {
  Heading,
  Box,
  SimpleGrid,
  Flex,
  Text,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
export default function Coleccion({}) {
  const [comicList, setComicList] = useState([]);
  const [publisher, setPublisher] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const publisher = queryParams.get("publisher");
        console.log(publisher);
        setPublisher(publisher);

        const data = await ComicsService.getAllComics(publisher);
        setComicList(Object.values(data));
        console.log(data);
        console.log(Object.values(data));
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, []);
  const backgroundImg = () => {
    switch (publisher) {
      case "marvel":
        return "url(https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/master/w_1600,c_limit/marvel-characters.jpg)";
      case "dc":
        return "url(https://soipondered.wordpress.com/wp-content/uploads/2013/12/dc-comics-character-image.jpg)";
      case "other":
        return "url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Golden-Age-Featue-Image.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5)";
    }
  };

  //const comicName = comicList.map((title) => <li>{title}</li>);
  return (
    <Box fontFamily={"outfit"} padding={"20px"}>
      <Flex
        justify={"center"}
        background={backgroundImg()}
        height={"260px"}
        backgroundPosition={"50%"}
        alignItems={"center"}
      >
        <Heading
          textTransform={"uppercase"}
          size="3xl"
          color={"white"}
          fontFamily={"Luckiest Guy"}
        >
          {publisher}
        </Heading>
      </Flex>
      <Flex
        padding={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex>
          <Badge
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#FFD700"}
          >
            Golden Age
          </Badge>
          <Badge
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#C0C0C0"}
          >
            Silver Age
          </Badge>
          <Badge
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#CD7F32"}
          >
            Bronze Age
          </Badge>
          <Badge
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#3BD53B"}
          >
            Modern Age
          </Badge>
        </Flex>

        <Text>Total comics {comicList.length}</Text>
      </Flex>

      <SimpleGrid
        fontFamily={"Outfit"}
        spacing={6}
        gridTemplateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        padding={"20px"}
      >
        {comicList.map((comic) => (
          <CardColeccion
            title={comic.title}
            imagen={comic.url}
            year={comic.year}
            condition={comic.condition}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
