import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {signUp} from "../signup/SignUpAction";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Popper from "@material-ui/core/Popper";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: "none"
  },
  typography: {
    padding: theme.spacing.unit * 2,
    color: "white"
  },
  popper: {
    backgroundColor: "red"
  }
});
class CSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      surname: "",
      email: "",
      password: "",
      password_confirmation: "",
      showPassword: false,
      anchorElFirstName: null,
      anchorElSurname: null,
      anchorElEmail: null,
      anchorPassword: null,
      anchorPasswordConfirmation: null,
      openPopperFirstName: false,
      openPopperSurname: false,
      openPopperEmail: false,
      openPopperPassword: false,
      openPopperPasswordConfirmation: false,
      popperContentFirstName: "",
      popperContentSurname: "",
      popperContentEmail: "",
      popperContentPassword: "",
      popperContentPasswordConfirmation: ""
    };
    this.handleValidate = this.handleValidate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword;
  }
  handleValidate = () => {
    const formEl = this.formEl;
    const formLength = formEl.length;
    this.setState(state => ({
      popperContentFirstName: "",
      popperContentSurname: "",
      popperContentEmail: "",
      popperContentPassword: "",
      popperContentPasswordConfirmation: "",
      openPopperFirstName: false,
      openPopperSurname: false,
      openPopperEmail: false,
      openPopperPassword: false,
      openPopperPasswordConfirmation: false
    }));
    if (formEl.password_confirmation.value !== formEl.password.value) {
      formEl.password_confirmation.setCustomValidity("Passwords don't match");
    } else{
      formEl.password_confirmation.setCustomValidity ("");
    }
    if (formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        if (elem.nodeName.toLowerCase() !== "button") {
          if (!elem.validity.valid) {
            switch (elem.name) {
              case "first_name":
                this.setState(state => ({
                  popperContentFirstName: "First Name :" + elem.validationMessage,
                  openPopperFirstName: true
                }));
                break;
              case "surname":
                this.setState(state => ({
                  popperContentSurname: "Surname :" + elem.validationMessage,
                  openPopperSurname: true
                }));
                break;
              case "email":
                this.setState(state => ({
                  popperContentEmail: "Email :" + elem.validationMessage,
                  openPopperEmail: true
                }));
                break;
              case "password":
                this.setState(state => ({popperContentPassword: "Password: Must be at least 6 characters long, contain letters and numbers", openPopperPassword: true}));
                break;
              case "password_confirmation":

                  this.setState(state => ({
                    popperContentPasswordConfirmation: "Password Confirmation :" + elem.validationMessage,
                    openPopperPasswordConfirmation: true
                  }));
                
                break;
              default:
                console.log(elem.validationMessage)
            }
          }
        }
      }
      console.log("false");
      return false;
    } else {
      console.log("true");
      return true;
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("abb");
    this.handleAnchor(event);
    if (this.handleValidate()) {
      console.log("signup");
      this.props.signUp({user: {first_name: this.state.first_name, surname: this.state.surname, email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation}});
    }
  };
  handleAnchor = event => {
    const {currentTarget} = event;
    switch (event.target.name) {
      case "first_name":
        this.setState(state => ({anchorElFirstName: currentTarget}));
        break;
      case "surname":
        this.setState(state => ({anchorElSurname: currentTarget}));
        break;
      case "email":
        this.setState(state => ({anchorElEmail: currentTarget}));
        break;
      case "password":
        this.setState(state => ({anchorElPassword: currentTarget}));
        break;
      case "password_confirmation":
        this.setState(state => ({anchorElPasswordConfirmation: currentTarget}));
        break;
      default:
    }
  };
  handleChange = prop => event => {
    event.preventDefault();
    this.setState({[prop]: event.target.value});
    this.handleAnchor(event);
    this.handleValidate();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };

  render() {
    const {classes} = this.props;
    const {anchorElFirstName, anchorElSurname, anchorElEmail, anchorElPassword, anchorElPasswordConfirmation} = this.state;
    const {openPopperFirstName, openPopperSurname, openPopperEmail, openPopperPassword, openPopperPasswordConfirmation} = this.state;
    const {popperContentFirstName, popperContentSurname, popperContentEmail, popperContentPassword, popperContentPasswordConfirmation} = this.state;
    return (<form ref={form => (this.formEl = form)} className={classes.container} noValidate={true} autoComplete="off" onSubmit={this.handleSubmit}>
      <Paper elevation={0}>
        <Typography component="pre">
          <TextField id="first_name" name="first_name" aria-describedby="first_name_popper" label="First Name" className={classes.textField} margin="normal" required={true} value={this.state.first_name} onChange={this.handleChange("first_name")}/>
          <Popper id="first_name_popper" open={openPopperFirstName} anchorEl={anchorElFirstName} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentFirstName}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="surname" name="surname" aria-describedby="surname_popper" label="Surname" className={classes.textField} margin="normal" required={true} value={this.state.surname} onChange={this.handleChange("surname")}/>
          <Popper id="surname_popper" open={openPopperSurname} anchorEl={anchorElSurname} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentSurname}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="email" name="email" aria-describedby="email_popper" label="Email" className={classes.textField} type="email" margin="normal" autoComplete="email" required={true} value={this.state.email} onChange={this.handleChange("email")}/>
          <Popper id="email_popper" open={openPopperEmail} anchorEl={anchorElEmail} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentEmail}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="password" aria-describedby="password_popper" className={classes.textField} required={true} name="password" margin="normal" value={this.state.password} type={this.state.showPassword
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
              pattern: "(?=.*[0-9])(?=.*[a-z]).{6,}"
            }}/>
          <Popper id="password_popper" open={openPopperPassword} anchorEl={anchorElPassword} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentPassword}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="password_confirmation" aria-describedby="password_confirmation_popper" name="password_confirmation" label="Password Confirmation" className={classes.textField} type="password" margin="normal" required={true} value={this.state.password_confirmation} onChange={this.handleChange("password_confirmation")}/>
          <Popper id="password_confirmation_popper" open={openPopperPasswordConfirmation} anchorEl={anchorElPasswordConfirmation} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentPasswordConfirmation}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          Sign Up
        </Button>
      </Paper>
    </form>);
  }
}
CSignUp.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: (firstname, surname, email, password, password_confirmation) => dispatch(signUp(firstname, surname, email, password, password_confirmation))
  };
};
const mapStateToProps = state => {
  return {sign_up: state.SignUpReducer.sign_up, error: state.SignUpReducer.error};
};
const SignUp = connect(mapStateToProps, mapDispatchToProps)(CSignUp);
export default withStyles(styles)(SignUp);
