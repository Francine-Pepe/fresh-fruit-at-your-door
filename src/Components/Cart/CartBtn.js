import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

import React from "react";

const CartBtn = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <div>
        <NavLink to={"/cart"}>
          <Icon
            icon="clarity:shopping-cart-line"
            color="#707070"
            width="33"
            height="33"
          />
          Cart 
          {/* ({state.length}) */}
        </NavLink>
      </div>
    </>
  );
}

export default CartBtn;
