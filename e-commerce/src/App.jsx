import { Switch, Route } from 'react-router-dom'
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyUser } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CreateOrderPage from './pages/CreateOrderPage';
import ProtectedRoute from './components/ProtectedRoute';
import OrderSuccessPage from './pages/OrderSuccessPage';
import PreviousOrdersPage from './pages/PreviousOrderPage';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(verifyUser());
  }, [])
  return (
    <PageContent>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId" exact>
          <ShopPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute path="/orders">
          <PreviousOrdersPage />
        </ProtectedRoute>
        <ProtectedRoute path="/create-order">
          <CreateOrderPage />
        </ProtectedRoute>
        <ProtectedRoute path="/order-success">
          <OrderSuccessPage />
        </ProtectedRoute>
      </Switch>
    </PageContent>
  );
}

export default App;