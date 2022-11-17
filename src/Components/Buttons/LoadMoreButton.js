import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./Buttons.module.css";
import { useState } from "react";

function LoadMoreButton(props) {
  const { onClick } = props;

  return (
    <Flex alignItems="center" justifyContent="center" m="1rem" w="100%">
      <button className={styles.load_more_button} onClick={onClick}>
        <div className={styles.stage}>
          <h3>Load More</h3>
          <div className={styles.dot_flashing}></div>
        </div>
      </button>
    </Flex>
  );
}

export default LoadMoreButton;
