import {
  FormControl,
  FormLabel,
  Input,
  Box,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Alert,
  CloseButton,
  AlertIcon,
  Text,
  Flex,
  GridItem,
  Grid,
  Card,
  Heading,
  Image,
} from "@chakra-ui/react";
import CardColeccion from "../components/section/CardColeccion";
import { useState } from "react";
import ComicsService from "../services/ComicsService";
export default function Form() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [publisher, setPublisher] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const saveComic = async () => {
    let comicData = {
      title: title,
      year: year,
      url: url,
      condition: condition,
    };
    setTitle("");
    setYear("");
    setUrl("");
    setCondition("");
    setPublisher("");
    const success = await ComicsService.createComic(publisher, comicData);
    if (success) {
      setShowSuccess(true);
    } else {
      alert("Failed to add comic. Please try again.");
    }
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Box padding={10}>
          {showSuccess && (
            <Alert status="success" justifyContent={"space-between"}>
              <HStack>
                <AlertIcon />

                <Text>¡Cómic añadido correctamente!</Text>
              </HStack>
              <CloseButton
                alignSelf="flex-end"
                position="relative"
                onClick={() => setShowSuccess(false)}
              />
            </Alert>
          )}
          <Box>
            <FormControl padding={2}>
              <FormLabel>Publisher</FormLabel>
              <RadioGroup onChange={setPublisher} value={publisher}>
                <HStack spacing="24px">
                  <Radio value="dc">DC</Radio>
                  <Radio value="marvel">Marvel</Radio>
                  <Radio value="other">Other</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl padding={2}>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.target.value)} value={title} />
            </FormControl>
            <FormControl padding={2}>
              <FormLabel>Year</FormLabel>
              <Input onChange={(e) => setYear(e.target.value)} value={year} />
            </FormControl>
            <FormControl padding={2}>
              <FormLabel>Img url</FormLabel>
              <Input onChange={(e) => setUrl(e.target.value)} value={url} />
            </FormControl>
            <FormControl padding={2}>
              <FormLabel>Condition</FormLabel>
              <Input
                onChange={(e) => setCondition(e.target.value)}
                value={condition}
              />
            </FormControl>
            <Flex justifyContent={"center"}>
              <Button
                _hover={{
                  background: "#1b1530",
                }}
                id="submitbtn"
                background={"#362c64"}
                color={"white"}
                // isDisabled={!title || !year || !condition || !publisher}
                isDisabled={
                  title !== "" &&
                  year !== "" &&
                  condition !== "" &&
                  publisher !== ""
                    ? false
                    : true
                }
                onClick={saveComic}
              >
                Submit
              </Button>
            </Flex>
          </Box>
        </Box>
      </GridItem>
      <GridItem padding={10}>
        <Card align="center" position={"relative"}>
          <Heading fontFamily={"Outfit"} size="md">
            {title}
          </Heading>
          <Image maxH={"350px"} src={url} />
          <Text fontFamily={"Outfit"} size="md">
            {year}
          </Text>
          <Text>{condition} condition</Text>
        </Card>
      </GridItem>
    </Grid>
  );
}
