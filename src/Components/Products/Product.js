import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container, Flex, Box, Divider } from "@chakra-ui/react";
import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import {  useDispatch } from "react-redux";
import { addCart } from "../Redux/Action";
import { CartButtons } from "../../data";
import PlusIcon from "../Icons/PlusIcon";
 

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fruits-api-project.herokuapp.com/fruits/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <Container p="4rem 0" maxW="container.md">
          <Container
            maxW="container.md"
            bg="#ffff"
            centerContent
            boxShadow="0 0 2px 2px #cccc"
            borderRadius="5px"
            p="2rem"
          >
            <Flex
              justifyContent="space-around"
              alignItems="center"
              w="100%"
              sx={{
                "@media screen and (max-width: 480px)": {
                  flexWrap: "wrap"
                },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.fruit_cards_image_product}
              />
              <Flex
                flexDirection="column"
                justifyContent="center"
                gap="0.5rem"
                className={styles.product_information_page}
                sx={{
                  "@media screen and (max-width: 600px)": {
                    gap: 0,
                  },
                }}
              >
                <h1>{product.name}</h1>
                <h2>Season: {product.category}</h2>
                <h2>Origin: {product.origin}</h2>
                <h2>
                  Price: {product.price} € / {product.unit}
                </h2>
                <Box>
                  <button
                    className={styles.product_modal_button}
                    onClick={() =>
                      addProduct(
                        product,
                        alert(
                          `Your ${product.name} was sucessfully added to the cart`
                        )
                      )
                    }
                  >
                    <PlusIcon /> Add to cart
                  </button>
                  {CartButtons.map((data, index) => {
                    return (
                      <>
                        <button
                          className={styles.product_modal_button}
                          key={index}
                        >
                          {data.icon}
                          <NavLink to={data.link}>
                            <h6>{data.name}</h6>
                          </NavLink>
                        </button>
                      </>
                    );
                  })}
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Container>
      </>
    );
  };

  return (
    <Container
      maxW="100vw"
      centerContent
      pt="10rem"
      className={styles.show_products_container}
    >
      <Divider />
      <strong>
        <h1>{`${product.name}`}</h1>
      </strong>
      <Divider />
      <div>{loading ? <Loading /> : <ShowProduct />}</div>
    </Container>
  );
}

export default Product;
