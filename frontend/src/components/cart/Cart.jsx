import React, { useState, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cart';
import { toast } from 'react-toastify';

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discount_price,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpenCart(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  });

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[90%] md:w-[30%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cart && cart.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Vaša korpa je prazna</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              {/* Dužina artikla*/}
              <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={40} />
                <h5 className="pl-2 text-[18px] font-[500]">
                  {cart && cart.length} Broj artikala u korpi
                </h5>
              </div>

              {/* Kolica sa jednim artiklom */}
              <br />
              <div className="w-full border-t">
                {cart &&
                  cart.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-3">
              {/* Dugme za plaćanje */}
              <Link to="/checkout">
                <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#000000] rounded-md hover:bg-red-600 transition-colors duration-300">
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Nastavite na plaćanje (
                    {totalPrice.toLocaleString('sr-RS').replace(',', '.')} RSD)
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = !isNaN(parseFloat(data.discount_price))
    ? parseFloat(data.discount_price) * value
    : 0;

  const increment = (data) => {
    if (data.stock <= value) {
      toast.error('Zalihe proizvoda su ograničene!');
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4 mb-2">
      <div className="w-full flex items-center">
        <div>
          <div>
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[30px] h-[30px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => increment(data)}
            >
              <HiPlus size={25} color="#000" />
            </div>
            <span className="pl-[10px] text-lg">{data.qty}</span>
            <div
              className="bg-[#828ead75] rounded-full w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
              onClick={() => decrement(data)}
            >
              <HiOutlineMinus size={25} color="#000" />
            </div>
          </div>
        </div>
        <Link
          to={`/product/${encodeURIComponent(data.name.replace(/\s+/g, '-'))}`}
          className="flex-shrink-0"
        >
          <img
            src={data?.image_Url?.[0]?.url}
            alt=""
            className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
          />
        </Link>
        <div className="pl-[5px]">
          <Link
            to={`/product/${encodeURIComponent(
              data.name.replace(/\s+/g, '-')
            )}`}
            className="text-[#000000]"
          >
            <h1 className="text-[18px]">{data.name}</h1>
          </Link>
          <h4 className="font-[400] text-[14px] text-[#00000082]">
            {parseFloat(data.discount_price)
              .toLocaleString('sr-RS')
              .replace(',', '.')}{' '}
            x {value}
          </h4>
          <h4 className="font-[600] text-[16px] pt-[3px] text-[#d02222] font-Roboto">
            {totalPrice.toLocaleString('sr-RS').replace(',', '.')} RSD
          </h4>
        </div>
        <RxCross1
          size={30}
          className="cursor-pointer ml-auto flex-shrink-0"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
