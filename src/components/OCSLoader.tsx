import { CircularProgress } from "@material-ui/core";
import React from "react";
import Colors from "styles/colors";

const OCSLoader = (props: any): any => (
  <CircularProgress
    color={Colors.backgroundColor}
    size={"5rem"}
    thickness={4}
    {...props}
  />
);

export default OCSLoader;
