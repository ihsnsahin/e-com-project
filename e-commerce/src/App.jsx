import { Switch, Route } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <PageContent>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </PageContent>
  );
}

export default App;