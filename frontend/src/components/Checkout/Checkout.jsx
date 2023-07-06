import React, { useState } from 'react';
import styles from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
    if (address === '' || zipCode === null || country === '' || city === '') {
      toast.error('Molimo upišite vaše podatke!');
    } else if (cart.length === 0) {
      toast.error('Nema proizvoda u korpi!');
    } else {
      const shippingAddress = {
        address,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice: calculateTotalPrice(),
        subTotalPrice: calculateSubTotalPrice(),
        shipping: calculateShipping(),
        shippingAddress,
      };

      // Ažuriranje lokalnog skladišta sa ažuriranim nizom narudžbi
      localStorage.setItem('latestOrder', JSON.stringify(orderData));
      navigate('/payment');
    }
  };

  // Izračunavanje cene
  const calculateSubTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.qty * item.discount_price, 0);
  };

  const calculateShipping = () => {
    const uniqueProducts = new Set(cart.map((item) => item.id));
    const uniqueProductCount = uniqueProducts.size;
    const totalProductCount = cart.reduce((count, item) => count + item.qty, 0);

    if (uniqueProductCount === 1 && totalProductCount === 1) {
      return calculateSubTotalPrice() * 0.06;
    }

    return 0;
  };

  const calculateTotalPrice = () => {
    return calculateSubTotalPrice() + calculateShipping();
  };

  return (
    <div className="w-full  flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            address={address}
            setAddress={setAddress}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="w-full 800px:w-[40%] 800px:mt-0 mt-8">
          <CartData
            cart={cart}
            totalPrice={calculateTotalPrice}
            shipping={calculateShipping}
            subTotalPrice={calculateSubTotalPrice}
          />
          <div
            className={`${styles.button} text-[20px] w-full sm:w-full md:w-[200px] lg:w-[520px] mt-4 text-white font-medium hover:bg-red-600 transition-colors duration-300`}
            onClick={paymentSubmit}
          >
            <h5 className="text-white">Idite na plaćanje</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  country,
  setCountry,
  city,
  setCity,
  address,
  setAddress,
  zipCode,
  setZipCode,
}) => {
  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-7">
      <h5 className="text-[20px] font-[700]">Podaci za dostavu: </h5>
      <form>
        <div className="w-full flex pb-3"></div>
        <div className="w-full flex pb-3"></div>
        <div className="w-full flex pb-3">
          <div className="w-[100%] 800px:w-[50%]">
            <label className="block pb-2">Država</label>
            <input
              type="text"
              className="w-full 800px:w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ textTransform: 'capitalize' }}
            />
          </div>

          <div className="w-[100%] 800px:w-[50%]">
            <label className="block pb-2">Grad</label>
            <input
              type="text"
              className="w-full 800px:w-[95%] border h-[40px] rounded-[5px]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ textTransform: 'capitalize' }}
            />
          </div>
        </div>

        <div className="w-full flex pb-1">
          <div className="w-full">
            <label className="block pb-2">Adresa</label>
            <input
              type="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`${styles.input} !w-full 800px:!w-[97.5%]`}
              style={{ textTransform: 'capitalize' }}
            />
          </div>
          <div className="w-[100%] 800px:w-[40%]">
            <label className="block pb-2">Poštanski broj</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className={`${styles.input} !w-full 800px:!w-[95%]`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const CartData = ({ cart, totalPrice, shipping, subTotalPrice }) => {
  const formatter = new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: 'RSD',
    minimumFractionDigits: 0,
  });

  return (
    <div className="w-full  ml- 800px:mt-0 mt-8">
      <div className="w-full bg-white rounded-md p-5">
        <h5 className="text-[20px] font-[700]">Pregled porudžbine</h5>
        <br />
        <div className="flex flex-col">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between py-4">
                <p>{item.name}</p>
                <p>x{item.qty}</p>
              </div>
            ))
          ) : (
            <p className="text-[18px] font-[700]">Nema proizvoda</p>
          )}
        </div>
        <hr className="my-3" />
        <div className="flex justify-between">
          <p>Trenutna cena :</p>
          <p>{cart.length > 0 ? formatter.format(subTotalPrice()) : '0 RSD'}</p>
        </div>
        +
        <div className="flex justify-between">
          <p>Dostava :</p>
          <p className={`${shipping() === 0 ? 'text-xl font-bold' : ''}`}>
            {cart.length > 0
              ? shipping() !== 0
                ? formatter.format(shipping())
                : 'Besplatna dostava'
              : '0 RSD'}
          </p>
        </div>
        <div className="flex justify-between font-bold py-5 text-[20px] text-red-500">
          <p>Ukupno :</p>
          <p>{cart.length > 0 ? formatter.format(totalPrice()) : '0 RSD'}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
