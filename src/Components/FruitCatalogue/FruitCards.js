import { useState } from "react";
import styles from "./FruitCatalogue.module.css";
import { Container, Box, Flex, Tag, TagLabel } from "@chakra-ui/react";
import useFetch from "react-fetch-hook";
import FruitCatalogueInput from "./FruitCatalogueInput";
import YourCart from "../Cart/YourCart";
import Loading from "../Loading/Loading";

// import Badget from "./Badget";

function FruitCards() {
  const { isLoading, data, error } = useFetch(
    "https://fruits-api-project.herokuapp.com/fruits"
  );

  const [loading, setLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.fruit_cards_container}>
          {data &&
            data.map(
              ({
                image,
                name,
                season,
                price,
                origin,
                badget,
                color,
                index,
              }) => {
                return (
                  <Container
                    maxW="container.md"
                    // w="100vw"
                    bg="#ffff"
                    centerContent
                    boxShadow="0 0 2px 2px #cccc"
                    borderRadius="5px"
                    margin="1rem"
                    key={index}
                  >
                    <Flex>
                      <Box padding="4" color="black" w="100%">
                        <Flex
                          alignItems="center"
                          sx={{
                            "@media screen and (max-width: 958px)": {
                              display: "flex",
                              flexDirection: "column",
                            },
                          }}
                        >
                          <img
                            src={image}
                            alt="/"
                            className={styles.fruit_cards_image}
                          />

                          <Flex
                            w="60%"
                            flexDirection="column"
                            p="2rem"
                            gap="0.5rem"
                            sx={{
                              "@media screen and (max-width: 1023px)": {
                                padding: "0.5rem",
                                alignItems: "flex-start",
                              },
                              "@media screen and (max-width: 600px)": {
                                padding: "0",
                                alignItems: "flex-start",
                              },
                            }}
                          >
                            <strong>
                              <h1>{name}</h1>
                            </strong>
                            <h2>Season: {season}</h2>
                            <h2>Price: {price}</h2>
                            <h2>Origin: {origin}</h2>

                            <Flex gap="0.5rem" flexWrap="wrap">
                              {badget.map((badget, color, id) => {
                                return (
                                  <Tag
                                    size="md"
                                    borderRadius="full"
                                    w="fit-content"
                                    key={id}
                                    backgroundColor={badget.color}
                                    color="#ffff"
                                  >
                                    <TagLabel>{badget.name}</TagLabel>
                                  </Tag>
                                );
                              })}
                            </Flex>
                          </Flex>
                          <FruitCatalogueInput />
                        </Flex>
                      </Box>
                    </Flex>
                  </Container>
                );
              }
            )}
        </div>
      )}
    </>
  );
}

export default FruitCards;
