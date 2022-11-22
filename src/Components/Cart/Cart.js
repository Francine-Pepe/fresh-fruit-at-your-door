import { Box, Container, Flex, Divider } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import MinusIcon from "../Icons/MinusIcon";
import PlusIconProduct from "../Icons/PlusIconProduct";
import { addCart, delCart } from "../Redux/Action";
import styles from "./Cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <Container maxW="container.md" h="auto" pt="10rem">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <h3>Your Cart is Empty</h3>
          </Box>
        </Flex>
      </Container>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className={styles.main_container_cart}>
          <Flex h="auto" justifyContent="center" alignItems="center">
            <Container className={styles.cart_container} >
              <Flex justifyContent="space-around" w="50vw" alignItems="center">
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.fruit_cards_cart}
                />

                <Box>
                  <h1>{product.name}</h1>
                  <h2>Season: {product.category}</h2>
                  <h2>Origin: {product.origin}</h2>
                  <p>
                    Price : {product.price} € / {product.unit} <br />
                    Qty : {product.qty} {product.unit} <br />
                    <strong>Total : {product.qty * product.price} €</strong>
                  </p>
                  <Flex gap="2rem">
                    <button onClick={() => handleDel(product)}>
                      <MinusIcon />
                    </button>
                    <button onClick={() => handleAdd(product)}>
                      <PlusIconProduct />
                    </button>
                  </Flex>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className={styles.checkout_button_container}>
          <button className={styles.checkout_button}>
            <NavLink to="/checkout">Proceed to Checkout</NavLink>
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
