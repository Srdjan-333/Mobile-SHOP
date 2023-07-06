import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/styles';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../redux/actions/wishlist';
import { addToCart } from '../../redux/actions/cart';
import { toast } from 'react-toastify';

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  const incrementCount = () => {
    if (data.stock <= count) {
      toast.error('Zalihe proizvoda su ograničene!');
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const addToWishlistHandler = () => {
    if (!isProductInWishlist(data.id)) {
      dispatch(addToWishlist(data));
    } else {
      dispatch(removeFromWishlist(data));
    }
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.some((item) => item.id === id);
    if (isItemExists) {
      toast.error('Artikl je već u korpi !');
    } else {
      const cartItem = cart.find((item) => item.id === data.id);
      if (cartItem) {
        toast.error('Artikl je već u korpi !');
      } else {
        if (data.stock < 1) {
          toast.error('Proizvoda nema na stanju.');
        } else {
          const cartData = { ...data, qty: count };
          dispatch(addToCart(cartData));
          toast.success('Artikl je dodat u korpu.');
        }
      }
    }
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[60%]">
                <div className="relative">
                  <img
                    src={data.image_Url[select].url}
                    alt=""
                    className="w-[100%]"
                  />
                </div>
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? 'border' : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? 'border' : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 2 ? 'border' : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[2].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(2)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 700px:w-[60%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <div className="mt-5">
                  <p className="text-xl">{data.description}</p>
                </div>
                <div className="flex pt-6">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price.toLocaleString('sr-RS')} RSD
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price
                      ? data.price.toLocaleString('sr-RS') + ' RSD'
                      : null}
                  </h3>
                </div>

                <div
                  className={`${styles.noramlFlex} mt-12 justify-between pr-3`}
                >
                  <div>
                    <button
                      className={`bg-[#000000] py-3 px-4 text-white font-medium hover:bg-red-600 transition-colors duration-300`}
                      onClick={decrementCount}
                      style={{ fontSize: '18px' }}
                    >
                      -
                    </button>
                    <span className="bg-gray-300 text-gray-900 font-medium px-5 py-[15px]">
                      {count}
                    </span>
                    <button
                      className={`bg-[#000000] py-3 px-4 text-white font-medium hover:bg-red-600 transition-colors duration-300`}
                      onClick={incrementCount}
                      style={{ fontSize: '18px' }}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-2xl ${
                          index < data.rating
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        }`}
                        style={{ marginRight: '7px' }}
                      >
                        ★
                      </span>
                    ))}
                    <AiOutlineHeart
                      size={40}
                      className={`${styles.productIcon} ${
                        isProductInWishlist(data.id)
                          ? styles.iconClicked
                          : 'h-1/2'
                      }`}
                      onClick={addToWishlistHandler}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center mt-6">
                    <div
                      className={`${styles.button} flex items-center justify-center w-full bg-[#000000] px-4 py-2 text-white font-medium text-lg hover:bg-red-600 transition-colors duration-300 ml-auto`}
                      onClick={() => addToCartHandler(data._id)}
                    >
                      <span className="flex items-center">
                        <AiOutlineShoppingCart className="mr-4 text-4xl" />
                        Dodaj u korpu
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    <span className="text-[#5acf64] text-3xl">
                      Na stanju: {data.stock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
