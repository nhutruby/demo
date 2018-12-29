import React, {lazy} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import LogInReducer from "../login/LogInReducer";
import SignUpReducer from "../signup/SignUpReducer";
import {StoreContext} from "../common/context/Store";
import sagaMiddleware from "../common/saga";
import LoginSaga from "../login/LogInSaga";
import SignUpSaga from "../signup/SignUpSaga";
const Grid = lazy(() => import ("@material-ui/core/Grid"));
const LogIn = lazy(() => import ("../login/LogIn"));
const SignUp = lazy(() => import ("../signup/SignUp"));
const styles = theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: "right",
    color: theme.palette.text.secondary
  }
});

class Welcome extends React.Component {
  componentWillMount() {
    this.context.injectReducer("LogInReducer", LogInReducer);
    this.context.injectReducer("SignUpReducer", SignUpReducer);
    sagaMiddleware.run(LoginSaga, this.context);
    sagaMiddleware.run(SignUpSaga, this.context);
  }
  render() {
    const {classes, store} = this.props;
    return (<div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <LogIn store={store}/>
          </Paper>
        </Grid>
        <Grid item={true} xs={8}>
          <Paper className={classes.paper} elevation={1}>
            xs=6
          </Paper>
        </Grid>
        <Grid item={true} xs={4}>
          <Paper className={classes.paper} elevation={1}>
            <SignUp/>
          </Paper>
        </Grid>
        <Grid item={true} xs={12}>
          <Paper className={classes.paper} elevation={1}>
            xs=12
          </Paper>
        </Grid>
      </Grid>
    </div>);
  }
}
Welcome.contextType = StoreContext;

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Welcome);
