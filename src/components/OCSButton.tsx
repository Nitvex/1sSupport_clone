import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Colors from "styles/colors";

const OCSButton = withStyles(() => ({
  root: {
    color: Colors.button,
    backgroundColor: Colors.background,
    "&:hover": {
      backgroundColor: Colors.background
    }
  }
}))(Button);

export default OCSButton;
