import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import ProductDetail from '../pages/ProductDetail';
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
