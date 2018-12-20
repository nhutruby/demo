import React, {lazy} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  root: {
    flexWrap: "wrap",
    display: "inline-flex",
    textAlign: "right"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  },
  align: {
    verticalAlign: "middle",
    display: "table-cell"
  }
});
class Login extends React.Component {
  state = {
    password: "",
    showPassword: false
  };
  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  };

  handleClickShowPassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };
  render() {
    const {classes} = this.props;
    return (<div className={classes.root}>
      <TextField id="outlined-email-input" label="Email" className={classNames(classes.margin, classes.textField)} type="email" name="email" autoComplete="email" variant="outlined"/>
      <TextField id="outlined-adornment-password" className={classNames(classes.margin, classes.textField)} variant="outlined" type={this.state.showPassword
          ? "text"
          : "password"} label="Password" value={this.state.password} onChange={this.handleChange("password")} InputProps={{
          endAdornment: (<InputAdornment position="end">
            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
              {
                this.state.showPassword
                  ? <VisibilityOff/>
                  : <Visibility/>
              }
            </IconButton>
          </InputAdornment>)
        }}/>
      <Button variant="contained" className={classNames(classes.margin, classes.button, classes.align)} color="primary">
        Login
      </Button>
    </div>);
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
