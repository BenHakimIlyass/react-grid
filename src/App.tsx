import * as React from "react";
import "./styles.css";
import styled from "@xstyled/styled-components";

import Grid from "./grid";
export default function App() {
  return (
    <div className="App">
      <Grid
        rows={{ 300: "100px 100px", 500: "50px" }}
        cols="100px 100px"
        xgap={200}
        ygap={180}
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
