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
export default function Form() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [type, setType] = useState("");
  const saveComic = () => {
    let comic = {
      title: title,
      url: url,
      condition: condition,
    };
  };

  return (
    <Box padding={40}>
      <FormControl>
        <FormLabel>Type</FormLabel>
        <RadioGroup onChange={(e) => setType(e.target.value)}>
          <HStack spacing="24px">
            <Radio value="DC">DC</Radio>
            <Radio value="Marvel">Marvel</Radio>
            <Radio value="Other">Other</Radio>
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
