import {
  Box,
  Container,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import CartButton from "../Buttons/CartButton";

function FruitBoughtDisplay() {
  return (
    <>
      <Container
        maxW="container.md"
        // w="100vw"
        bg="#ffff"
        centerContent
        boxShadow="0 0 2px 2px #cccc"
        borderRadius="5px"
        margin="1rem"
      >
        <Box padding="4" color="black" w="100%" textAlign="center">
          <h1>Your cart</h1>
          <TableContainer>
            <Table size="sm" padding="4">
              <Thead>
                <Tr>
                  <Th padding="2">Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th isNumeric>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Checkbox>
                    <Td padding="2" w="10rem">
                      Banana
                    </Td>
                  </Checkbox>
                  <Td>€2.00 / kg</Td>
                  <Td>2 kg</Td>
                  <Th isNumeric>€4.00</Th>
                </Tr>
                <Tr>
                  <Checkbox>
                    <Td padding="2" w="10rem">
                      Ananas
                    </Td>
                  </Checkbox>
                  <Td>€2.00 / Unit</Td>
                  <Td>1</Td>
                  <Th isNumeric>€2.00</Th>
                </Tr>
                <Tr>
                  <Checkbox>
                    <Td padding="2" w="10rem">
                      Strawberry
                    </Td>
                  </Checkbox>
                  <Td>€3.00 / Kg</Td>
                  <Td>2</Td>
                  <Th isNumeric>€6.00</Th>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th padding="4">TOTAL</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th isNumeric>€12.00</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <CartButton />
        </Box>
      </Container>
    </>
  );
}

export default FruitBoughtDisplay;
