import * as React from "react";
import "./styles.css";
import styled from "@xstyled/styled-components";

import Grid from "./grid";
export default function App() {
  return (
    <div className="App">
      <Grid
        rows="100px 100px"
        cols="100px 100px"
        xgap={{ 0: 20, 500: 50 }}
        ygap={180}
        rem
      >
        <Square />
        <Square />
        <Square />
        <Square />
      </Grid>
    </div>
  );
}
const Square = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: tomato;
`;
