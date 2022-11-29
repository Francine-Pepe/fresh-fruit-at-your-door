import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import { navData } from "../../data";
import { NavLink } from "react-router-dom";
import CartBtn from "../Cart/CartBtn";

function Dropdown() {
  return (
    <div className={styles.dropdown_menu}>
      <Menu>
        <Flex
          className={styles.cart_btn_mobile}
          justifyContent="space-between"
        >
          <CartBtn />
          <MenuButton
            w={8}
            h={8}
            color="#f23d91"
            as={HamburgerIcon}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            cursor="pointer"
          />
        </Flex>
        <MenuList display="flex" mt="2" textAlign="center">
          <nav className={styles.dropdown_nav}>
            <ul>
              {navData.map((data, index) => {
                return (
                  <>
                    <li className={styles.dropdown_navbar} key={index}>
                      <MenuItem
                        className={styles.nav_button}
                        _focus={{ bg: "transparent" }}
                      >
                        <NavLink to={data.link}>{data.name}</NavLink>
                      </MenuItem>
                      <Divider w="50vw" />
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Dropdown;
