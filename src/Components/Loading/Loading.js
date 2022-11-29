import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <Flex alignItems="center" justifyContent="center" >
      <div id={styles.container} className={styles.loading}>
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id={styles.shadow}>
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                floodColor="#fc6767"
              />
            </filter>
          </defs>
          <circle
            id={styles.spinner}
            cx="50"
            cy="50"
            r="45"
            className={styles.circle_loading}
          />
        </svg>
      </div>
    </Flex>
  );
}

export default Loading;
