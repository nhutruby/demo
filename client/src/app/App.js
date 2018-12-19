import React, {Suspense, lazy} from "react";
const Home = lazy(() => import ("../home/Home"));
const Welcome = lazy(() => import ("../welcome/Welcome"));
const App = ({userSignedIn}) => {
  return (<div>
    <Suspense fallback={<div />}>
      {
        userSignedIn
          ? <Home/>
          : <Welcome/>
      }
    </Suspense>
  </div>);
};
export default App;
