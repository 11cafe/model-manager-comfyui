import { useEffect, useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useDebounce } from "../customHooks/useDebaunce";

export default function InstallModelSearchBar({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  const [text, setText] = useState("");
  const debounceSearchValue = useDebounce(text, 400);
  useEffect(() => {
    if (debounceSearchValue !== "") {
      setSearchQuery(debounceSearchValue);
    }
  }, [debounceSearchValue]);
  return (
    <Flex gap={1} alignItems={"center"} grow={1}>
      <Input
        placeholder="Search models in CivitAI"
        width={"60%"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button size={"sm"} onClick={() => setSearchQuery(text)}>
        Search
      </Button>
    </Flex>
  );
}
