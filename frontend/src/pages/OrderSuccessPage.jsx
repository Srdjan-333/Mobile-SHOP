import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Lottie from 'lottie-react';
import animationData from '../Assests/animations/success.json';
import { useNavigate } from 'react-router-dom';

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mb-9 -mt-16 pt-4">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
        }}
        width={400}
        height={400}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <h5 className="text-center my-4 text-2xl md:text-3xl text-gray-800">
        Vaša porudžbina je uspešno izvršena!
      </h5>
      <p className="text-center text-gray-500 mb-4">Hvala vam na kupovini.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={navigateToHome}
      >
        Vrati se na početnu stranicu
      </button>
    </div>
  );
};

export default OrderSuccessPage;
