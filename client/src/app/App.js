import React, {Suspense, lazy} from "react";
import {connect} from "react-redux";
import {StoreContext} from "../common/context/Store";
const Home = lazy(() => import ("../home/Home"));
const Welcome = lazy(() => import ("../welcome/Welcome"));
class CApp extends React.Component {
  render() {
    const {userSignedIn} = this.props;
    return (<div>
      <Suspense fallback={<div />}>
        {
          userSignedIn
            ? <Home/>
            : <Welcome/>
        }
      </Suspense>
    </div>);
  }
}

const mapStateToProps = state => {
  return {userSignedIn: false};
};
CApp.contextType = StoreContext;

const App = connect(mapStateToProps, {})(CApp);

export default App;
