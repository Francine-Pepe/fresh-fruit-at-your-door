import FruitSeason from "../FruitSeason/FruitSeason";
import styles from "./FruitCatalogue.module.css";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import FruitCards from "./FruitCards";
import FruitBoughtDisplay from "./FruitBoughtDisplay";
import Filter from "../Filter/Filter";

function FruitCatalogue(props) {
  return (
    <>
      <div className={styles.fruit_catalogue_container}>
        <div className={styles.fruit_catalogue_content}>
          <FruitSeason />
          {/* <Filter /> */}
          <Icon icon="bytesize:search" color="#707070" width="33" height="33" />
          <Icon
            icon="clarity:shopping-cart-line"
            color="#707070"
            width="33"
            height="33"
          />
        </div>
        <div className={styles.fruit_data_display}>
          <div className={styles.fruit_cards}>
            <FruitCards />
          </div>
          <div className={styles.fruit_bought_display}>
            <FruitBoughtDisplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default FruitCatalogue;
