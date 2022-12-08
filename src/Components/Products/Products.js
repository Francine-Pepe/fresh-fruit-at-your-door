import { Box, Container, Flex, TagLabel, Tag, Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";
import BasketIcon from "../Icons/BasketIcon";
import AllIcon from "../Icons/AllIcon";
import SpringIcon from "../Icons/SpringIcon";
import WinterIcon from "../Icons/WinterIcon";
import SummerIcon from "../Icons/SummerIcon";
import AutumnIcon from "../Icons/AutumnIcon";
import LoadMoreButton from "../Buttons/LoadMoreButton";

function Products(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      
      const response = await fetch(
        "https://fresh-fruit-apis-cmm2pvrju-francine-pepe.vercel.app/fruits", { mode: 'cors' }
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
  const [visible, setVisible] = useState(2);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = (props) => {
    return (
      <>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="3rem"
          flexWrap="wrap"
          w="100vw"
          className={styles.season_buttons}
        >
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("Winter")}>Winter</button>
          <button onClick={() => filterProduct("Spring")}>Spring</button>
          <button onClick={() => filterProduct("Summer")}>Summer</button>
          <button onClick={() => filterProduct("Autumn")}>Autumn</button>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          m="0 0.5rem"
          flexWrap="wrap"
          w="100vw"
          className={styles.season_buttons_mobile}
        >
          <button onClick={() => setFilter(data)}>
            <AllIcon />
          </button>
          <button onClick={() => filterProduct("Winter")}>
            <WinterIcon />
          </button>
          <button onClick={() => filterProduct("Spring")}>
            <SpringIcon />
          </button>
          <button onClick={() => filterProduct("Summer")}>
            <SummerIcon />
          </button>
          <button onClick={() => filterProduct("Autumn")}>
            <AutumnIcon />
          </button>
        </Flex>

        {filter
          .slice(0, visible)
          .map(
            ({
              product,
              id,
              image,
              name,
              category,
              price,
              unit,
              origin,
              badget,
              color,
              index,
            }) => {
              return (
                <>
                  <Container
                    maxW="container.lg"
                    bg="#ffff"
                    centerContent
                    boxShadow="0 0 2px 2px #cccc"
                    borderRadius="5px"
                    margin="2rem"
                    key={index}
                    sx={{
                      "@media screen and (max-width: 845px)": {
                        maxWidth: "container.xl",
                      },
                    }}
                    
                  >
                    <Box padding="4" color="black" w="100%">
                      <Flex
                        alignItems="center"
                        justifyContent="space-evenly"
                        flexWrap="wrap"
                        sx={{
                          "@media screen and (max-width: 480px)": {
                            flexDirection: "column",
                          },
                          "@media screen and (max-width: 379px)": {
                            alignContent: "center",
                          },
                        }}
                      >
                        <img
                          src={image}
                          alt="/"
                          className={styles.fruit_cards_image}
                        />
                        <Flex
                          w="30%"
                          flexDirection="column"
                          p="2rem"
                          gap="0.5rem"
                          sx={{
                            "@media screen and (max-width: 1023px)": {
                              padding: "1.5rem",
                              alignItems: "center",
                            },
                            "@media screen and (max-width: 845px)": {
                              width: "50%",
                            },
                            "@media screen and (max-width: 600px)": {
                              padding: "0",
                            },
                          }}
                        >
                          <div className={styles.product_information}>
                            <strong>
                              <h1>{name}</h1>
                            </strong>
                            <h2>Season: {category}</h2>
                            <h2>
                              Price: {price} € / {unit}
                            </h2>
                            <h2>Origin: {origin}</h2>

                            <Flex
                              gap="0.5rem"
                              flexWrap="wrap"
                              sx={{
                                "@media screen and (max-width: 480px)": {
                                  alignItems: "center",
                                  justifyContent: "center",
                                },
                              }}
                            >
                              {badget.map((badget, color, id) => {
                                return (
                                  <Tag
                                    size="md"
                                    borderRadius="full"
                                    w="fit-content"
                                    key={id}
                                    backgroundColor={badget.color}
                                    color="#ffff"
                                    p="0.5rem"
                                  >
                                    <TagLabel>{badget.name}</TagLabel>
                                  </Tag>
                                );
                              })}
                            </Flex>
                          </div>
                        </Flex>
                        <button className={styles.buy_now_button}>
                          <BasketIcon />
                          <NavLink to={`/products/${id}`}>Buy now</NavLink>
                        </button>
                      </Flex>
                    </Box>
                  </Container>
                </>
              );
            }
          )}
      </>
    );
  };

  return (
    <Container
      maxW="fullWidth"
      centerContent
      pt="10rem"
      mb="10rem"
      className={styles.show_products_container}
    >
      <Divider />
      <strong>
        <h1>Fruit Catalogue</h1>
      </strong>
      <Divider />

      <Flex w="100vw" justifyContent="center" alignItems="center">
        <Box
          w="80%"
          m="2rem"
          className={styles.show_products_container_content}
        >
          {loading ? <Loading /> : <ShowProducts />}
        </Box>
      </Flex>
      <LoadMoreButton onClick={showMoreItems} />
    </Container>
  );
}

export default Products;
