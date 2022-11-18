import React from "react";
import styles from "./Buttons.module.css";
import { Button } from "@chakra-ui/react";
import BasketIcon from "../Icons/BasketIcon";
import { NavLink } from "react-router-dom";

function BuyButton(props) {
  const { id } = props;
  return (
    <>
      <Button
        size="md"
        w="20rem"
        leftIcon={<BasketIcon />}
        maxW="container.md"
        // w="100vw"
        bg="#ffff"
        centerContent
        boxShadow="0 0 2px 2px #707070"
        borderRadius="5px"
      >
        <NavLink to={`/products/${id}`}>Buy now</NavLink>
      </Button>
    </>
  );
}

export default BuyButton;
