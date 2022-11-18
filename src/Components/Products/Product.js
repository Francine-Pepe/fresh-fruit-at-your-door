import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../Redux/Action"

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }


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

//   const Loading = () => {
//     return (
//         <>
//         <Loading />
//         </>
//         )
    
    
//   };

  const ShowProduct = () => {
    return (
      <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container pt="10rem" pb="10rem" maxW="container.md">
          <Flex gap="5rem">
            <img
              src={product.image}
              alt={product.name}
              className={styles.fruit_cards_image_product}
            />
            <Flex flexDirection="column" justifyContent="center" gap="2rem">
              <h1>{product.name}</h1>
              <h2>{product.category}</h2>
              <h2>€ {product.price}</h2>
              <Flex gap="2rem">
                <Button onClick={() => addProduct(product)}>Add to cart</Button>
                <Button>
                  <NavLink to={"/cart"}>Go to cart</NavLink>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        )}
      </>
    );
  };

  return (
    <Container>
      <div>{loading ? <Loading /> : <ShowProduct />}</div>
    </Container>
  );
}

export default Product;
