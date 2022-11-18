import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import React from "react";
import { Flex } from "@chakra-ui/react";

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <Flex>
        <NavLink to={"/cart"}>
          <Icon
            icon="clarity:shopping-cart-line"
            color="#707070"
            width="33"
            height="33"
          />
        </NavLink>
        <span className={styles.cart_btn}>|</span>
        {state.length}
      </Flex>
    </>
  );
};

export default CartBtn;
