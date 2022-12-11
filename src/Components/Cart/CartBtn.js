import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
// import { Icon } from "@iconify/react";
// import { NavLink } from "react-router-dom";
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
  Badge,
} from "@chakra-ui/react";
import Cart from "./Cart";
import ShoppingCart from "../Icons/ShoppingCart";

const CartBtn = (props) => {
  const state = useSelector((state) => state.handleCart);

  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        size="sm"
        heigh="auto"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        backgroundColor="rgba(250,250,250, 0.5)"
        sx={{
          "@media screen and (max-width: 480px)": {
            width: "40vw",
          },
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <div className={styles.cart_page}>
              <Divider />
              <strong>
                <h1>Your Cart</h1>
              </strong>

              <Divider />
            </div>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex>
        <button to={"/cartpage"} ref={btnRef} onClick={onOpen}>
          <ShoppingCart width={"1.5rem"} />
        </button>
        <span className={styles.cart_btn}>
          <Badge
            colorScheme="gray"
            variant="outline"
            p="0.5rem"
            borderRadius="50"
          >
            {state.length}
          </Badge>
        </span>
      </Flex>
    </>
  );
};

export default CartBtn;
