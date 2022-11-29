import { Box, Container, Divider} from "@chakra-ui/react";
import React from "react";
import Cart from "./Cart";
import styles from "./Cart.module.css";

function CartPage() {
  return (
    <Container
      maxW="fullWidth"
      centerContent
      pt="10rem"
      className={styles.cart_page}
    >
      <Divider />
      <strong>
        <h1>Your Cart</h1>
      </strong>
      <Divider />
      <Box pt="1rem" h="auto" mb="2rem" >
        <Cart />
      </Box>
    </Container>
  );
}

export default CartPage;
