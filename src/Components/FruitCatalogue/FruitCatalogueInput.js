import { useState } from "react";
import styles from "./FruitCatalogue.module.css";
import { Flex, Box } from "@chakra-ui/react";

function FruitCatalogueInput() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Flex>
        <Box w="100%">
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
            <button
              onClick={incrementCounter}
              className={styles.add_button}
              onSubmit={handleSubmit}
            >
              <strong>+</strong>
            </button>
            <button
              onClick={decrementCounter}
              className={styles.remove_button}
              onSubmit={handleSubmit}
            >
              <strong>-</strong>
            </button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default FruitCatalogueInput;
