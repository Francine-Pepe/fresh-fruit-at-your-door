import { Box, Button, Container, Flex, TagLabel, Tag } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";
import LoadMoreButton from "../Buttons/LoadMoreButton";
import Skeleton from "react-loading-skeleton";

function Products(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://fruits-api-project.herokuapp.com/fruits"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  // Load more button function:
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const Loading = () => {
    return (
      <>
        <div>
          <Skeleton height={"350px"} />
        </div>
        <div>
          <Skeleton height={"350px"} />
        </div>
        <div>
          <Skeleton height={"350px"} />
        </div>
        <div>
          <Skeleton height={"350px"} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="4rem"
          flexWrap="wrap"
        >
          <Button onClick={() => setFilter(data)}>All</Button>
          <Button onClick={() => filterProduct("Winter")}>Winter</Button>
          <Button onClick={() => filterProduct("Spring")}>Spring</Button>
          <Button onClick={() => filterProduct("Summer")}>Summer</Button>
          <Button onClick={() => filterProduct("Autumn")}>Autumn</Button>
        </Flex>
        {/* data && data.slice(0, visible) */}
        {filter.map(
          ({
            product,
            id,
            image,
            name,
            category,
            price,
            origin,
            badget,
            color,
            index,
          }) => {
            return (
              <>
                <Container
                  maxW="container.md"
                  // w="100vw"
                  bg="#ffff"
                  centerContent
                  boxShadow="0 0 2px 2px #cccc"
                  borderRadius="5px"
                  margin="1rem"
                  key={id}
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
                          <h2>Season: {category}</h2>
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
                          <NavLink to={`/products/${id}`}>Buy now</NavLink>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                </Container>
              </>
            );
          }
        )}
      </>
    );
  };

  return (
    <Container maxW="fullWidth" centerContent pt="10rem">
      <h1>Fruit Catalogue</h1>

      <Flex>
        <Box w="100vw">{loading ? <Loading /> : <ShowProducts />}</Box>
      </Flex>
      <LoadMoreButton onClick={showMoreItems} />
    </Container>
  );
}

export default Products;
