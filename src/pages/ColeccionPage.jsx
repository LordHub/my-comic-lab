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
  Alert,
  AlertIcon,
  Grid,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
export default function Coleccion({}) {
  const [comicList, setComicList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const publisher = searchParams.get("publisher");
  const [filteredList, setFilteredList] = useState([]);
  const [ageFilter, setAgeFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ComicsService.getAllComics(publisher);
        setComicList(Object.values(data));
        setFilteredList(Object.values(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [publisher]);
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
    setAgeFilter(age);
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
  const cleanFilters = () => {
    setFilteredList(comicList);
    setAgeFilter("");
  };
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
      <Grid
        templateColumns={["repeat(4, 2fr)", "repeat(4, 2fr)", "repeat(8, 1fr)"]}
        padding={"10px"}
        alignItems={"center"}
        gap={1}
      >
        <Tooltip label="Previo a 1956">
          <Badge
            textAlign={"center"}
            onClick={() => filterAge("golden")}
            cursor={"pointer"}
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#FFD700"}
            border={ageFilter == "golden" ? "2px" : "0px"}
            borderColor={ageFilter == "golden" ? "#black" : ""}
          >
            Golden Age
          </Badge>
        </Tooltip>
        <Tooltip label="1956-1970">
          <Badge
            textAlign={"center"}
            onClick={() => filterAge("silver")}
            cursor={"pointer"}
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#C0C0C0"}
            border={ageFilter == "silver" ? "2px" : "0px"}
            borderColor={ageFilter == "silver" ? "#black" : ""}
          >
            Silver Age
          </Badge>
        </Tooltip>
        <Tooltip label="1970-1985">
          <Badge
            textAlign={"center"}
            onClick={() => filterAge("bronze")}
            cursor={"pointer"}
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#CD7F32"}
            border={ageFilter == "bronze" ? "2px" : "0px"}
            borderColor={ageFilter == "bronze" ? "#black" : ""}
          >
            Bronze Age
          </Badge>
        </Tooltip>
        <Tooltip label="1985 en adelante">
          <Badge
            textAlign={"center"}
            onClick={() => filterAge("modern")}
            cursor={"pointer"}
            margin={"5px"}
            padding={"5px"}
            borderRadius={"10px"}
            backgroundColor={"#3BD53B"}
            border={ageFilter == "modern" ? "2px" : "0px"}
            borderColor={ageFilter == "modern" ? "#black" : ""}
          >
            Modern Age
          </Badge>
        </Tooltip>
        <Badge
          textAlign={"center"}
          onClick={() => cleanFilters()}
          cursor={"pointer"}
          margin={"5px"}
          padding={"5px"}
          borderRadius={"10px"}
        >
          Clear filters
        </Badge>
        <Badge
          textAlign={"center"}
          cursor={"pointer"}
          margin={"5px"}
          padding={"5px"}
          borderRadius={"10px"}
        >
          Sort
        </Badge>
        <Badge />

        <Text
          textAlign={"right"}
          margin={"5px"}
          padding={"5px"}
          fontSize="md"
          fontWeight={"bold"}
        >
          Total {filteredList.length}
        </Text>
      </Grid>

      {filteredList.length == 0 ? (
        <Alert status="info">
          <AlertIcon />
          Upss!!! No hay cómics de esta época
        </Alert>
      ) : (
        <></>
      )}
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
            key={comic.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
