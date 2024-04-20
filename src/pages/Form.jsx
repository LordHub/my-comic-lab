import {
  FormControl,
  FormLabel,
  Input,
  Box,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import ComicsService from "../services/ComicsService";
export default function Form() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [publisher, setPublisher] = useState("");
  const saveComic = async () => {
    let comicData = {
      title: title,
      url: url,
      condition: condition,
    };
    const success = await ComicsService.createComic(publisher, comicData);
    if (success) {
      alert('Comic added successfully!');
  
    } else {
      alert('Failed to add comic. Please try again.');
    }
  };

  return (
    <Box padding={40}>
      <FormControl>
        <FormLabel>Publisher</FormLabel>
        <RadioGroup onChange={setPublisher}>
          <HStack spacing="24px">
            <Radio value="dc">DC</Radio>
            <Radio value="marvel">Marvel</Radio>
            <Radio value="other">Other</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      </FormControl>
      <FormControl>
        <FormLabel>Img url</FormLabel>
        <Input onChange={(e) => setUrl(e.target.value)} value={url} />
      </FormControl>
      <FormControl>
        <FormLabel>Condition</FormLabel>
        <Input
          onChange={(e) => setCondition(e.target.value)}
          value={condition}
        />
      </FormControl>
      <Button onClick={saveComic}>Submit</Button>
    </Box>
  );
}
