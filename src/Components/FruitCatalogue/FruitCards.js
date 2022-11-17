import styles from "./FruitCatalogue.module.css";
import { Container, Box, Flex, Tag, TagLabel } from "@chakra-ui/react";
import FruitCatalogueInput from "./FruitCatalogueInput";
import Loading from "../Loading/Loading";
import LoadMoreButton from "../Buttons/LoadMoreButton";
import { useEffect, useState } from "react";

function FruitCards(props) {
  const { product, onAdd } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load more button function:
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const [category, setCategory] = useState();

  useEffect(() => {
    console.log("The Component is Ready!");

    fetch("https://fruits-api-project.herokuapp.com/fruits")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.fruit_cards_container}>
          {data &&
            data
              .slice(0, visible)
              .map(
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

                            {/* <FruitCatalogueInput /> */}

                            <button
                              className="product-button"
                              onClick={() => onAdd(product)}
                            >
                              Add to cart
                            </button>
                          </Flex>
                        </Box>
                      </Flex>
                    </Container>
                  );
                }
              )}
          <LoadMoreButton onClick={showMoreItems} />
        </div>
      )}
    </>
  );
}

export default FruitCards;
