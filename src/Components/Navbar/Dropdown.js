import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Dropdown() {
  const navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "How it works?",
      link: "/howitworks",
    },
    {
      name: "Fruit Catalogue",
      link: "/fruitcatalogue",
    },
    {
      name: "About us",
      link: "/aboutus",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

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
        <MenuList 
        display='flex' mt='2' alignItems='center'
        >
          <nav className={styles.dropdown_nav}>
            <ul>
              {navbar.map((navbar, index) => (
                <li className={styles.dropdown_navbar} key={index}>
                  <MenuItem className={styles.nav_button} _focus={ { bg: "transparent" } }>
                    <NavLink to={navbar.link}>{navbar.name}</NavLink>
                  </MenuItem>
                </li>
              ))}
            </ul>
          </nav>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Dropdown;
