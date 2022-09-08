import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import { navData } from "../../data";
import { NavLink } from "react-router-dom";

function Dropdown() {
  return (
    <div className={styles.dropdown_menu}>
      <Menu bg="tomato">
        <MenuButton
          w={8}
          h={8}
          color="white"
          as={HamburgerIcon}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          cursor="pointer"
        />
        
          <MenuList display="flex" mt="2" alignItems="center">
            <nav className={styles.dropdown_nav}>
              <ul>
                {navData.map((data, index) => {
                  return (
                    <li className={styles.dropdown_navbar} key={index}>
                      <MenuItem
                        className={styles.nav_button}
                        _focus={{ bg: "transparent" }}
                      >
                        <NavLink to={data.link}>{data.name}</NavLink>
                      </MenuItem>
                    </li>
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
