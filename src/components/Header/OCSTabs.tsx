import { Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Colors from "styles/colors";

const OCSTabs = withStyles(() => ({
  root: {
    color: Colors.background,
    "font-size": "2rem"
  },
  indicator: {
    backgroundColor: Colors.background
  }
}))(Tabs);

export default OCSTabs;
