import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  root: {
    flexWrap: "wrap",
    display: "inline-flex",
    textAlign: "right"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
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
  },
  typography: {
    padding: theme.spacing.unit * 2
  },
  inputProps: {
    minLength: 6,
    pattern: "(?=.*d)(?=.*[a-z]).{6,}"
  }
});
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      showPassword: false,
      showFormSuccess: false,
      isValidated: false,
      anchorEl: null,
      open: false,
      id: null
    };
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword;
  }
  validate = () => {
    //this.formEl is a reference in the component to the form DOM element.
    const formEl = this.formEl;
    const formLength = formEl.length;

    /*
         * The checkValidity() method on a form runs the
         * html5 form validation of its elements and returns the result as a boolean.
         * It returns 'false' if at least one of the form elements does not qualify,
         * and 'true', if all form elements are filled with valid values.
         */
    if (formEl.checkValidity() === false) {
      console.log("aaa");
      this.setState(state => ({id: "login_popper", open: true}));
      for (let i = 0; i < formLength; i++) {
        //the i-th child of the form corresponds to the forms i-th input element
        const elem = formEl[i];
        /*
                 * errorLabel placed next to an element is the container we want to use
                 * for validation error message for that element
                 */
        //const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
        const errorLabel = elem;
        console.log(formEl[i]);
        /*
                 * A form element contains also any buttuns contained in the form.
                 * There is no need to validate a button, so, we'll skip that nodes.
                 */
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          console.log("b");
          /*
                     * Each note in html5 form has a validity property.
                     * It contains the validation state of that element.
                     * The elem.validity.valid property indicates whether the element qualifies its validation rules or no.
                     * If it does not qualify, the elem.validationMessage property will contain the localized validation error message.
                     * We will show that message in our error container if the element is invalid, and clear the previous message, if it is valid.
                     */
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            console.log("eeorr");
            errorLabel.textContent = "";
          }
        }
      }

      //Return 'false', as the formEl.checkValidity() method said there are some invalid form inputs.
      return false;
    } else {
      this.setState(state => ({id: null, open: false}));
      //The form is valid, so we clear all the error messages
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          errorLabel.textContent = "";
        }
      }

      //Return 'true', as the form is valid for submission
      return true;
    }
  };

  /**
     * This method is the one that should handle your form submits.
     * Timpcally, it will send the form data with an ajax call to your server.
     * In react, you would usually use the axios lib for that.
     **/
  handleSubmit = event => {
    //Replace this code with a working request to your backend.
    //Now it just displays a success message.

    event.preventDefault();
    const {currentTarget} = event;
    this.setState({anchorEl: currentTarget});
    //If the call of the validate method was successful, we can proceed with form submission. Otherwise we do nothing.
    if (this.validate()) {
      console.log("success");
    }

    this.setState({isValidated: true});
    setTimeout(() => {
      this.setState({showFormSuccess: false});
    }, 5000);
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
    const props = this.props;
    return (<div className={classes.root}>
      <form {...props} noValidate="noValidate" ref={form => (this.formEl = form)} className={classes.container} onSubmit={this.handleSubmit}>
        <TextField id="outlined-email-input" label="Email" className={classNames(classes.margin, classes.textField)} required={true} type="email" value={this.state.email} name="email" autoComplete="email" variant="outlined" onChange={this.handleChange("email")}/>
        <TextField id="outlined-adornment-password" className={classNames(classes.margin, classes.textField)} required={true} value={this.state.password} name={"password"} variant="outlined" type={this.state.showPassword
            ? "text"
            : "password"} label="Password" onChange={this.handleChange("password")} InputProps={{
            endAdornment: (<InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                {
                  this.state.showPassword
                    ? (<VisibilityOff/>)
                    : (<Visibility/>)
                }
              </IconButton>
            </InputAdornment>)
            // eslint-disable-next-line react/jsx-no-duplicate-props
          }} inputProps={{
            minLength: 6
          }}>
          <div className="invalid-feedback">aaaaa</div>>
        </TextField>
        <Button variant="contained" aria-describedby={this.state.id} className={classNames(classes.margin, classes.button, classes.align)} color="primary" type="submit">
          Login
        </Button>
        <Popper id={this.state.id} open={this.state.open} anchorEl={this.state.anchorEl}>
          <Paper>
            <Typography className={classes.typography}>
              The content of the Popper.
            </Typography>
          </Paper>
        </Popper>
      </form>
    </div>);
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
