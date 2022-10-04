import React from "react";
import styles from "./FruitCatalogue.module.css";
import { Flex } from "@chakra-ui/react";

function FruitCatalogueInput() {
  function inc() {
    const number = document.querySelector('[name="number"]');
    number.value = parseInt(number.value) + 1;
  }

  function dec() {
    const number = document.querySelector('[name="number"]');
    if (parseInt(number.value) > 0) {
      number.value = parseInt(number.value) - 1;
    }
  }

  return (
    <>
      <Flex>
        <form>
          <input
            id="ticketNum"
            type="number"
            name="ticketNum"
            min="0"
            placeholder="Quantity"
            step="0.1"
            required
          />
          <button onclick="inc()" className={styles.add_button}>
            <strong>+</strong>
          </button>
          <button onclick="dec()" className={styles.remove_button}>
            <strong>-</strong>
          </button>
        </form>
      </Flex>
    </>
  );
}

export default FruitCatalogueInput;
