import FruitSeason from "../Footer/FruitSeason";
import styles from "./FruitCatalogue.module.css";
import { Icon } from '@iconify/react';
import NavbarPink from "../Navbar/NavbarPink";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import Home from '../Home/Home';


function FruitCatalogue(props) {

  const BackgroundColor = () => {
    const [backgroundColor, setbackgroundColor] = useState();
  
    if (<Home />) {
      return <NavbarPink />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <>
      <div className={styles.fruit_catalogue_container}>
        <div className={styles.fruit_catalogue_content}>
          <FruitSeason  />
          <Icon icon="bytesize:search" color="#707070" width="33" height="33" />
          <Icon icon="clarity:shopping-cart-line" color="#707070" width="33" height="33" />
        </div>
      </div>
    </>
  );
}

export default FruitCatalogue;
