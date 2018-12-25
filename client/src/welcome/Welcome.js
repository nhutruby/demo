import React, {lazy} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
const Grid = lazy(() => import ("@material-ui/core/Grid"));
const Login = lazy(() => import ("../login/LogIn"));
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

const Welcome = props => {
  const {classes} = props;

  return (<div className={classes.root}>
    <Grid container={true} spacing={24}>
      <Grid item={true} xs={12}>
        <Paper className={classes.paper}>
          <Login/>
        </Paper>
      </Grid>
      <Grid item={true} xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item={true} xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item={true} xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    </Grid>
  </div>);
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Welcome);
