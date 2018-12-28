import React from "react";
import {connect} from "react-redux";
import {signOut} from "../signout/SignOutAction";
import getCookie from "../common/cookie";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right"
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: "none"
  }
});

class CHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleSignOut = () => {
    console.log("and");
    console.log(this.props.auth_token);
    const authToken = getCookie("auth_token");
    if (authToken) {
      this.props.signOut(authToken);
      window.location.reload();
    }
  };
  render() {
    console.log("baba");
    console.log(this.props.auth_token);
    const {first_name, classes} = this.props;
    return (<div className={classes.root}>
      <div>{first_name}</div>
      <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSignOut}>
        Log Out
      </Button>
    </div>);
  }
}
CHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: auth_token => dispatch(signOut(auth_token))
  };
};
const mapStateToProps = state => {
  return {first_name: state.AuthReducer.user.first_name};
};
const Header = connect(mapStateToProps, mapDispatchToProps)(CHeader);
export default withStyles(styles)(Header);
