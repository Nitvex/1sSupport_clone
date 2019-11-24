import { CircularProgress } from "@material-ui/core";
import React from "react";
import Colors from "styles/colors";

const OCSLoader = (): any => (
  <CircularProgress
    color={Colors.backgroundColor}
    size={"5rem"}
    thickness={4}
  />
);

export default OCSLoader;
