import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Cats = lazy(() => import("../../containers/Cats"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cats" component={Cats} />
    </Switch>
  </Suspense>
);

export default App;
