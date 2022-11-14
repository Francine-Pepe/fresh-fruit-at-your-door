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
import CartButton from "../Buttons/CartButton";
import React, { useState } from "react";

function FruitBoughtDisplay(props) {
  const products = [
    {
      fruit: "Banana",
      price: "€2.00 / kg",
      quantity: "2 kg",
      total: "€4",
    },
    {
      fruit: "Ananas",
      price: "€2.00 / Unit",
      quantity: "1",
      total: "€2",
    },
    {
      fruit: "Strawberry",
      price: "€3.00 / Kg",
      quantity: "2",
      total: "€6",
    },
  ];

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

          <TableContainer id="mySelect">
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
                {products.map((data, index) => (
                  <Tr>
                    <Checkbox>
                      <Td padding="2" w="10rem">
                        {data.fruit}
                      </Td>
                    </Checkbox>
                    <Td>{data.price}</Td>
                    <Td>{data.quantity}</Td>
                    <Th isNumeric>{data.total}</Th>
                  </Tr>
                ))}
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
        </Box>
        <CartButton />
      </Container>
    </>
  );
}

export default FruitBoughtDisplay;
