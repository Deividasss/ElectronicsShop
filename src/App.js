import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import productsData from "./data.json"
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import ShippingForm from './components/ShippingForm/ShippingForm';

function App() {
  const { products } = productsData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (

    <Router>
      <Header
        countCartItems={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='mainShop' element={<Main products={products} onAdd={onAdd} />} />
        <Route exact path='shippingForm' element={<ShippingForm
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
          cartItems={cartItems} />} />
      </Routes>
      <Footer />
      <NotificationContainer />
    </Router>
  );
}

export default App;
