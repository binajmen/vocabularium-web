import { lazy, type Component } from "solid-js";
import { Route, Router } from "@solidjs/router";

const Home = lazy(() => import("~/pages/home"));
const DesignSystem = lazy(() => import("~/pages/design-system"));
const NotFound = lazy(() => import("~/pages/not-found"));

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/design-system" component={DesignSystem} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
};

export default App;
