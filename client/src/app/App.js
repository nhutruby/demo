import React, {Suspense, lazy} from "react";
const Home = lazy(() => import ("../home/Home"));
const Login = lazy(() => import ("../login/Login"));
const App = ({userSignedIn}) => {
  return (<div>
    <Suspense fallback={<div />}>
      {
        userSignedIn
          ? <Home/>
          : <Login/>
      }
    </Suspense>
  </div>);
};
export default App;
