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
  emailConfirmation: {
    textAlign: "left",
    color: "blue"
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
  },
  fake: {
    display: "none"
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
      openPopperSubmit: false,
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
      popperContentSubmit: "",
      openPopperFirstName: false,
      openPopperSurname: false,
      openPopperEmail: false,
      openPopperPassword: false,
      openPopperPasswordConfirmation: false
    }));
    if (formEl.password_confirmation.value !== formEl.new_password.value) {
      formEl.password_confirmation.setCustomValidity("Passwords don't match");
    } else {
      formEl.password_confirmation.setCustomValidity("");
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
            }
          }
        }
      }
      return false;
    } else {
      return true;
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.handleAnchor(event);
    if (this.handleValidate()) {
      this.props.signUp({
        user: {
          first_name: this.state.first_name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
      });
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
      case "submit":
        this.setState(state => ({anchorElSubmit: currentTarget}));
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
    const {error, sign_up, first_name, surname, email} = this.props;
    if (sign_up) {
      return (<div>
        <Paper elevation={0}>
          <Typography variant="h6" component="h4" className={classes.emailConfirmation}>
            Hi {first_name}
            {surname}, please confirm your account at {email}
          </Typography>
        </Paper>
      </div>);
    }
    const openPopperSubmit = error
      ? true
      : this.state.openPopperSubmit;
    const idPopperSubmit = openPopperSubmit
      ? "submit_popper"
      : null;
    let errorArray = [];
    if (error) {
      for (var property in error) {
        errorArray.push(property.charAt(0).toUpperCase() + property.slice(1) + ": " + error[property]);
      }
    }
    const {
      anchorElFirstName,
      anchorElSurname,
      anchorElEmail,
      anchorElPassword,
      anchorElPasswordConfirmation,
      anchorElSubmit
    } = this.state;
    const {openPopperFirstName, openPopperSurname, openPopperEmail, openPopperPassword, openPopperPasswordConfirmation} = this.state;
    const {popperContentFirstName, popperContentSurname, popperContentEmail, popperContentPassword, popperContentPasswordConfirmation} = this.state;
    const idPopperFirstName = openPopperFirstName
      ? "first_name_popper"
      : null;
    const idPopperSurname = openPopperSurname
      ? "surname_popper"
      : null;
    const idPopperEmail = openPopperEmail
      ? "email_popper"
      : null;
    const idPopperPassword = openPopperPassword
      ? "passwword_popper"
      : null;
    const idPopperPasswordConfirmation = openPopperPasswordConfirmation
      ? "password_confirmation_popper"
      : null;
    return (<form ref={form => (this.formEl = form)} className={classes.container} noValidate={true} autoComplete="off" onSubmit={this.handleSubmit}>
      <TextField id="fakeemail" name="email" className={classes.fake} type="email"/>
      <TextField id="fakepassword" name="password" className={classes.fake} type="password"/>
      <Paper elevation={0}>
        <Typography component="pre">
          <TextField id="first_name" name="first_name" aria-describedby={idPopperFirstName} label="First Name" className={classes.textField} margin="normal" required={true} value={this.state.first_name} onChange={this.handleChange("first_name")}/>
          <Popper id={idPopperFirstName} open={openPopperFirstName} anchorEl={anchorElFirstName} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentFirstName}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="surname" name="surname" aria-describedby={idPopperSurname} label="Surname" className={classes.textField} margin="normal" required={true} value={this.state.surname} onChange={this.handleChange("surname")}/>
          <Popper id={idPopperSurname} open={openPopperSurname} anchorEl={anchorElSurname} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentSurname}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="new_email" name="email" aria-describedby={idPopperEmail} label="Email" className={classes.textField} type="email" margin="normal" required={true} value={this.state.email} autoComplete="nope" onChange={this.handleChange("email")}/>
          <Popper id={idPopperEmail} open={openPopperEmail} anchorEl={anchorElEmail} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentEmail}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="new_password" aria-describedby={idPopperPassword} className={classes.textField} required={true} name="password" margin="normal" autoComplete="new-password" value={this.state.password} type={this.state.showPassword
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
          <Popper id={idPopperPassword} open={openPopperPassword} anchorEl={anchorElPassword} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentPassword}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <TextField id="password_confirmation" aria-describedby={idPopperPasswordConfirmation} name="password_confirmation" label="Password Confirmation" className={classes.textField} autoComplete="off" type="password" margin="normal" required={true} value={this.state.password_confirmation} onChange={this.handleChange("password_confirmation")}/>
          <Popper id={idPopperPasswordConfirmation} open={openPopperPasswordConfirmation} anchorEl={anchorElPasswordConfirmation} placement="left">
            <Paper className={classes.popper}>
              <Typography className={classes.typography}>
                {popperContentPasswordConfirmation}
              </Typography>
            </Paper>
          </Popper>
        </Typography>
        <Typography component="pre">
          <Button variant="contained" aria-describedby={idPopperSubmit} color="primary" className={classes.button} type="submit" name="submit">
            Sign Up
          </Button>
          <Popper id={idPopperSubmit} open={openPopperSubmit} anchorEl={anchorElSubmit} placement="bottom">
            {
              errorArray.map((content, index) => (<Paper className={classes.popper} key={index}>
                <Typography className={classes.typography}>
                  {content}
                </Typography>
              </Paper>))
            }
          </Popper>
        </Typography>
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
  return {sign_up: state.SignUpReducer.sign_up, error: state.SignUpReducer.error, first_name: state.SignUpReducer.user.first_name, surname: state.SignUpReducer.user.surname, email: state.SignUpReducer.user.email};
};
const SignUp = connect(mapStateToProps, mapDispatchToProps)(CSignUp);
export default withStyles(styles)(SignUp);
