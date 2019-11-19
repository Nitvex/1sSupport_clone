import React from "react";
import Comp from "components/Comp";
import { Button } from "@material-ui/core";

export default function App() {
  const a: Number = 5;
  return (
    <>
      Hello world! {a} <Comp />
      <Button variant="contained" color="primary">
        Hello
      </Button>
    </>
  );
}
