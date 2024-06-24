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
  Tooltip,
} from "@chakra-ui/react";
export default function Coleccion({}) {
  const [comicList, setComicList] = useState([]);
  const [publisher, setPublisher] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const publisher = queryParams.get("publisher");
        setPublisher(publisher);

        const data = await ComicsService.getAllComics(publisher);
        setComicList(Object.values(data));
        setFilteredList(Object.values(data));
      } catch (error) {
        console.error(error);
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
  const filterAge = (age) => {
    switch (age) {
      case "golden":
        var result = comicList.filter((obj) => {
          return obj.year < 1956;
        });
        setFilteredList(result);
        return;
      case "silver":
        var result = comicList.filter((obj) => {
          return obj.year > 1956 && obj.year < 1971;
        });
        setFilteredList(result);
        return;
      case "bronze":
        var result = comicList.filter((obj) => {
          return obj.year > 1971 && obj.year < 1986;
        });
        setFilteredList(result);
        return;
      case "modern":
        var result = comicList.filter((obj) => {
          return obj.year > 1986;
        });
        setFilteredList(result);
        return;
    }
  };

  //const comicName = comicList.map((title) => <li>{title}</li>);
  return (
    <Box fontFamily={"outfit"} padding={"20px"}>
      <Box position={"relative"}>
        <Box height={"260px"} backgroundColor={"black"}>
          <Flex
            opacity={0.4}
            justify={"center"}
            background={backgroundImg()}
            height={"260px"}
            backgroundPosition={"50% 50%"}
            alignItems={"center"}
            backgroundSize={"cover"}
          ></Flex>
        </Box>

        <Heading
          textTransform={"uppercase"}
          size="3xl"
          color={"white"}
          fontFamily={"Luckiest Guy"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          {publisher}
        </Heading>
      </Box>
      <Flex
        padding={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex>
          <Tooltip label="previo a 1956">
            <Badge
              onClick={() => filterAge("golden")}
              cursor={"pointer"}
              margin={"5px"}
              padding={"5px"}
              borderRadius={"10px"}
              backgroundColor={"#FFD700"}
            >
              Golden Age
            </Badge>
          </Tooltip>
          <Tooltip label="1956-1970">
            <Badge
              onClick={() => filterAge("silver")}
              cursor={"pointer"}
              margin={"5px"}
              padding={"5px"}
              borderRadius={"10px"}
              backgroundColor={"#C0C0C0"}
            >
              Silver Age
            </Badge>
          </Tooltip>
          <Tooltip label="1970-1985">
            <Badge
              onClick={() => filterAge("bronze")}
              cursor={"pointer"}
              margin={"5px"}
              padding={"5px"}
              borderRadius={"10px"}
              backgroundColor={"#CD7F32"}
            >
              Bronze Age
            </Badge>
          </Tooltip>
          <Tooltip label="1985 en adelante">
            <Badge
              onClick={() => filterAge("modern")}
              cursor={"pointer"}
              margin={"5px"}
              padding={"5px"}
              borderRadius={"10px"}
              backgroundColor={"#3BD53B"}
            >
              Modern Age
            </Badge>
          </Tooltip>
          <Badge
            onClick={() => setFilteredList(comicList)}
            cursor={"pointer"}
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
          >
            Clear filters
          </Badge>
        </Flex>

        <Text fontSize="lg" fontWeight={"bold"}>
          Total comics {filteredList.length}
        </Text>
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
        {filteredList.map((comic) => (
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
