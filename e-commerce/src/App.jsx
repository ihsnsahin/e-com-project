import { Switch, Route } from 'react-router-dom'
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

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
        <Route path="/shop/:id">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </PageContent>
  );
}

export default App;