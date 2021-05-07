import Button from "@material-ui/core/Button";
import { indigo, blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo[900],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  },
}))(Button);


export { ColorButton };
