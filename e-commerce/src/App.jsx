import { Switch, Route } from 'react-router-dom'
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <PageContent>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route>
          <ProductDetailPage path="/shop/:id" />
        </Route>
      </Switch>
    </PageContent>
  );
}

export default App;