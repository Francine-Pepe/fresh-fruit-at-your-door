import React from "react";
import { Icon } from "@iconify/react";

function ShoppingCart(props) {

  const { width } = props;
  const {height } = props;
  const { border } = props;
  return (
    <div>
      <Icon icon="noto:shopping-cart" width={width} height={height} border={border} />
    </div>
  );
}

export default ShoppingCart;
