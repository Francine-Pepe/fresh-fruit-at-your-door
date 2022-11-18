import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../Redux/Action";

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
      <Container pt="10rem" pb="10rem" maxW="container.md" h="auto">
        <Flex flexDirection="column">
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
        <Container
          maxW="container.md"
          // w="100vw"
          bg="#ffff"
          centerContent
          boxShadow="0 0 2px 2px #cccc"
          borderRadius="5px"
          mt="3.5rem"
        >
          <Flex flexDirection="column">
            <Box>
              <img
                src={product.image}
                alt={product.name}
                height="200px"
                width="180px"
              />
            </Box>
            <div className="col-md-4">
              <h3>{product.name}</h3>
              <p className="lead fw-bold">
                {product.qty} X ${product.price} = €
                {product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleDel(product)}
              >
                -
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                +
              </button>
            </div>
          </Flex>
        </Container>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
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
