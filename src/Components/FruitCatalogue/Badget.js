import React from "react";
import { Tag, TagLabel } from "@chakra-ui/react";
import useFetch from "react-fetch-hook";
import { fruitSeason } from "../../data";

function Badget() {
  const { isLoading, data, badget, error } = useFetch(
    "https://fruits-api-project.herokuapp.com/fruits"
  );

  return (
    <>
      <Tag size="md" colorScheme="red" borderRadius="full" w="auto">
        {badget &&
          badget.map((badget) => {
            return (
              <>
                <TagLabel>{badget.badget}</TagLabel>
              </>
            );
          })}
      </Tag>
    </>
  );
}

export default Badget;
