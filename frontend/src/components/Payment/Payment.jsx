import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { useEffect } from 'react';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { server } from '../../server';

import { RxCross1 } from 'react-icons/rx';

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem('latestOrder'));
    setOrderData(orderData);
  }, []);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Plaćanje',
            amount: {
              currency_code: 'USD',
              value: orderData?.totalPrice,
            },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    totalPrice: orderData?.totalPrice,
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;

      let paymentInfo = payer;

      if (paymentInfo !== undefined) {
        paypalPaymentHandler(paymentInfo);
      }
    });
  };

  const paypalPaymentHandler = async (paymentInfo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    order.paymentInfo = {
      id: paymentInfo.payer_id,
      status: 'succeeded',
      type: 'Paypal',
    };

    await axios
      .post(`${server}/orders/create-order`, order, config)
      .then((res) => {
        setOpen(false);
        navigate('/order/success');
        localStorage.setItem('cartItems', JSON.stringify([]));
        localStorage.setItem('latestOrder', JSON.stringify([]));
        window.location.reload();
      });
  };

  const paymentData = {
    amount: Math.round(orderData?.totalPrice),
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${server}/payment/process`,
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
            type: 'Kreditna kartica',
          };

          await axios
            .post(`${server}/orders/create-order`, order, config)
            .then((res) => {
              setOpen(false);
              navigate('/order/success');
              localStorage.setItem('cartItems', JSON.stringify([]));
              localStorage.setItem('latestOrder', JSON.stringify([]));
              window.location.reload();
            });
        }
      }
    } catch (error) {}
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    order.paymentInfo = {
      type: 'Plaćanje pouzećem',
    };

    await axios
      .post(`${server}/orders/create-order`, order, config)
      .then((res) => {
        setOpen(false);
        navigate('/order/success');
        localStorage.setItem('cartItems', JSON.stringify([]));
        localStorage.setItem('latestOrder', JSON.stringify([]));
        window.location.reload();
      });
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo
            open={open}
            setOpen={setOpen}
            onApprove={onApprove}
            createOrder={createOrder}
            paymentHandler={paymentHandler}
            cashOnDeliveryHandler={cashOnDeliveryHandler}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({
  open,
  setOpen,
  onApprove,
  createOrder,
  paymentHandler,
  cashOnDeliveryHandler,
}) => {
  const [select, setSelect] = useState(1);

  return (
    <div className="w-full  800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      {/* Odabir načina plaćanja */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(1)}
          >
            {select === 1 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Plati karticom
          </h4>
        </div>

        {/* Plaćanje karticom */}
        {select === 1 ? (
          <div className="w-full flex border-b">
            <form className="w-full" onSubmit={paymentHandler}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Ime na kartici</label>
                  <input
                    required
                    className={`${styles.input} !w-[95%] text-[#444]`}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Datum isteka</label>
                  <CardExpiryElement
                    className={`${styles.input}`}
                    options={{
                      style: {
                        base: {
                          fontSize: '19px',
                          color: '#444',
                        },
                        empty: {
                          color: '#3a120a',
                          backgroundColor: 'transparent',
                          '::placeholder': {
                            color: '#444',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Broj kartice</label>
                  <CardNumberElement
                    className={`${styles.input} !h-[35px] !w-[95%]`}
                    options={{
                      style: {
                        base: {
                          fontSize: '19px',
                          color: '#444',
                        },
                        empty: {
                          color: '#3a120a',
                          backgroundColor: 'transparent',
                          '::placeholder': {
                            color: '#444',
                          },
                        },
                      },
                    }}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">CVV</label>
                  <CardCvcElement
                    className={`${styles.input} !h-[35px]`}
                    options={{
                      style: {
                        base: {
                          fontSize: '19px',
                          color: '#444',
                        },
                        empty: {
                          color: '#3a120a',
                          backgroundColor: 'transparent',
                          '::placeholder': {
                            color: '#444',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Potvrdi"
                className={`${styles.button} !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </div>
        ) : null}
      </div>

      <br />
      {/* Paypal plaćanje */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(2)}
          >
            {select === 2 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Plati putem PayPala
          </h4>
        </div>

        {/* Plaćanje putem PayPala */}
        {select === 2 ? (
          <div className="w-full flex border-b">
            <div
              className={`${styles.button} !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              onClick={() => setOpen(true)}
            >
              Potvrdi
            </div>
            {open && (
              <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                  <div className="w-full flex justify-end p-3">
                    <RxCross1
                      size={30}
                      className="cursor-pointer absolute top-3 right-3"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <PayPalScriptProvider
                    options={{
                      'client-id':
                        '',
                    }}
                  >
                    <PayPalButtons
                      style={{ layout: 'vertical' }}
                      onApprove={onApprove}
                      createOrder={createOrder}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <br />
      {/* Plaćanje pouzećem */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}
          >
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Plaćanje pouzećem
          </h4>
        </div>

        {/* Plaćanje pouzećem */}
        {select === 3 ? (
          <div className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input
                type="submit"
                value="Potvrdi"
                className={`${styles.button} !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CartData = ({ orderData }) => {
  const formatter = new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: 'RSD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const shipping = orderData?.shipping?.toFixed(0);

  return (
    <div className="w-full ml-800px:mt-0 ">
      <div className="w-full bg-white rounded-md p-5">
        <h5 className="text-[20px] font-[700]">Pregled porudžbine</h5>
        <br />
        <div className="flex flex-col">
          {orderData?.cart?.length > 0 ? (
            orderData.cart.map((item) => (
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
          <p>Trenutna cena:</p>
          <p>
            {orderData?.cart?.length > 0
              ? formatter.format(orderData.subTotalPrice)
              : '0 RSD'}
          </p>
        </div>
        +
        <div className="flex justify-between">
          <p>Dostava:</p>
          <p className={`${shipping === '0' ? 'text-xl font-bold' : ''}`}>
            {orderData?.cart?.length > 0
              ? shipping !== '0'
                ? formatter.format(shipping)
                : 'Besplatna dostava'
              : '0 RSD'}
          </p>
        </div>
        <div className="flex justify-between font-bold py-5 text-[20px] text-red-500">
          <p>Ukupno:</p>
          <p>
            {orderData?.cart?.length > 0
              ? formatter.format(orderData.totalPrice)
              : '0 RSD'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
