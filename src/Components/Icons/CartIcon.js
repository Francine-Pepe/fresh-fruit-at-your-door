import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

function CartIcon() {
  return (
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
  );
}

export default CartIcon;
