import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./Buttons.module.css";

function LoadMoreButton(props) {

  const { onClick } = props;

  return (
    <Flex alignItems="center" justifyContent="center" mb="2rem">
      <button className={styles.load_more_button} onClick={onClick}>Load More</button>
    </Flex>
  );
}

export default LoadMoreButton;
