import React from "react";
import data from "./data.json";
import { Grid, Box } from "@mui/material";
import SingleProduct from "../components/SingleProduct";
import { Container } from "@mui/system";
const Products = () => {
  const products = data;

  return (
    <>
      {/* <Container > */}

      {/* <Grid container spacing={2} padding={20} justifyContent="space-evenly"
  alignItems="center"> */}
   <Container>

      <Box marginLeft={8} marginRight={0}>
        <Grid container spacing={5}>
          {products.map((product) => {
            return (
              // <Grid item xs={3} sx={{margin:2}}>
              <Grid item xs={3} marginX={0}>
                <SingleProduct {...product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
          </Container>
      {/* </Container> */}
    </>
  );
};

export default Products;
