import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  ProductDetailsPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  AboutUsPage,
} from './routes/Routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import './App.css';
import axios from 'axios';
import { server } from './server.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState('');

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    getStripeApikey();
  }, []);

  console.log(setStripeApiKey);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/success" element={<OrderSuccessPage />} />
      </Routes>
      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </Elements>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
