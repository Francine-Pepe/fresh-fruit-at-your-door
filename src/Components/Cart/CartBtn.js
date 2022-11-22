import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import React from "react";
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import Cart from "./Cart";

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart);

  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  />
          <DrawerHeader>
            <div className={styles.cart_page}>
              <Divider />
              <strong>
                <h1>Your Cart</h1>
              </strong>
              <Divider />
            </div>
          </DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex>
        <button to={"/cartpage"} ref={btnRef} onClick={onOpen}>
          <Icon
            icon="clarity:shopping-cart-line"
            color="#707070"
            width="33"
            height="33"
          />
        </button>
        <span className={styles.cart_btn}>|</span>
        {state.length}
      </Flex>
    </>
  );
};

export default CartBtn;
