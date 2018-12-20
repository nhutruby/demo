import React, {lazy} from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
const TextField = lazy(() => import ('@material-ui/core/TextField'));
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});
class Login extends React.Component {
  state = {
    password: '',
    showPassword: false,
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;
    return (
     <div className={classes.root}>
     <TextField
          id="outlined-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
     </div>
    )
  }
};
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
