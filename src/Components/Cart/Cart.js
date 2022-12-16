import {
  Box,
  Container,
  Flex,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import MinusIcon from "../Icons/MinusIcon";
import PlusIconProduct from "../Icons/PlusIconProduct";
import { addCart, delCart } from "../Redux/Action";
import styles from "./Cart.module.css";
import { CheckoutButtons } from "../../data";
// import swal from "sweetalert";

const Cart = (props) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const emptyCart = () => {
    return (
      <Container maxW="container.md" h="auto" p="2rem">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <h3>Your Cart is Empty</h3>
          </Box>
          <button className={styles.go_to_products_button}>
            <NavLink to={"/products"}>
              <h6>Go to: Products</h6>
            </NavLink>
          </button>
        </Flex>
      </Container>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className={styles.main_container_cart}>
          <Flex h="auto" justifyContent="center" alignItems="center">
            <Container
              className={styles.cart_container}
              maxW="container.sm"
              m="0 2rem"
              centerContent
              boxShadow="0 0 2px 2px #cccc"
              borderRadius="5px"
              sx={{
                "@media screen and (max-width: 480px)": {
                  margin: "0 0.2rem",
                },
              }}
            >
              <Flex justifyContent="space-around" alignItems="center">
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.fruit_cards_cart}
                />

                <Box>
                  <h1>{product.name}</h1>
                  <h2>Season: {product.category}</h2>
                  <h2>Origin: {product.origin}</h2>
                  <h2>
                    Price : {product.price} € / {product.unit} <br />
                    Qty : {product.qty} {product.unit} <br />
                    <strong>Total : {product.qty * product.price} €</strong>
                  </h2>
                  <Flex
                    gap="2rem"
                    sx={{
                      "@media screen and (max-width: 250px)": {
                        justifyContent: "center",
                      },
                    }}
                  >
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
        <Flex
          className={styles.checkout_button_container}
          justifyContent="space-around"
          flexWrap="wrap"
          gap="1rem"
          sx={{
            "@media screen and (max-width: 252px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {CheckoutButtons.map((data, index) => {
            return (
              <>
                <button
                  className={styles.checkout_button}
                  key={index}
                  // onClick={() =>
                  //   swal({
                  //     text: `You didn´t go directly to the ${data.name} Page 😞 ? Please close Your Cart window. Sorry for the inconvenience`,
                  //     button: "Ok",
                  //   })
                  // }
                >
                  {data.icon}

                  <NavLink to={data.link} onClose={onClose}>
                    <h6>{data.name}</h6>
                  </NavLink>
                </button>
              </>
            );
          })}
        </Flex>
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
