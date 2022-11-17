import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "../Buttons/CartButton";
import styles from "./Cart.module.css";
import { Icon } from "@iconify/react";

function CartHeader(props) {
  return (
    <header className={styles.cart_header}>
      <div className={styles.cart_container}>
        <div>
          <NavLink to={"/"}>
            <h1>Shopping Cart</h1>
          </NavLink>
        </div>

        <div>
          <NavLink to={"/cart"}>
            <Icon
              icon="clarity:shopping-cart-line"
              color="#707070"
              width="33"
              height="33"
            />
          </NavLink>
        </div>
      </div>
      <div>{/* <NavLink to={"/signin"}>Sign In</NavLink> */}</div>
    </header>
  );
}

export default CartHeader;
