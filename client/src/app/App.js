import React, {Suspense, lazy} from "react";
import {connect} from "react-redux";
const Home = lazy(() => import ("../home/Home"));
const Welcome = lazy(() => import ("../welcome/Welcome"));
const App = ({store, userSignedIn}) => {
  console.log("a");
  console.log(store);
  return (<div>
    <Suspense fallback={<div />}>
      {
        userSignedIn
          ? <Home/>
          : <Welcome store={store}/>
      }
    </Suspense>
  </div>);
};
const mapStateToProps = state => {
  return {userSignedIn: state.LogInReducer.user_logged_in};
};

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;
