import React from "react";
import styles from "./FruitCatalogue.module.css";
import { Container, Box, Flex } from "@chakra-ui/react";
import useFetch from "react-fetch-hook";
import FruitCatalogueInput from "./FruitCatalogueInput";

function FruitCards() {
  const { isLoading, data, error } = useFetch(
    "https://fruits-api-project.herokuapp.com/fruits"
  );

  return (
    <>
      {data &&
        data.map(({ image, name, price, origin }) => (
          <Container
            w="80vw"
            bg="#ffff"
            // centerContent
            boxShadow="0 0 2px 2px #cccc"
            borderRadius="5px"
            margin="1rem"
          >
            <Flex>
              <Box padding="4" color="black" w="100vw">
                <Flex alignItems="center">
                  <img
                    src={image}
                    alt="/"
                    className={styles.fruit_cards_image}
                  />
                  <Flex flexDirection="column" p="2rem" gap="1rem">
                    <strong>
                      <h1>{name}</h1>
                    </strong>
                    <h2>{price}</h2>
                    <h2>{origin}</h2>
                    {/* {data.badget.map((bio) => {
                      return (
                        <>
                          <h2>{bio}</h2>
                        </>
                      );
                    })} */}
                    <FruitCatalogueInput />
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Container>
        ))}
    </>
  );
}

export default FruitCards;
