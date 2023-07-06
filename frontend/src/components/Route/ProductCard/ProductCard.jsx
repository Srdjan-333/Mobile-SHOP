import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../redux/actions/wishlist';
import { addToCart } from '../../../redux/actions/cart';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import { toast } from 'react-toastify';

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [count] = useState(1);
  const d = data.name;

  const product_name = d.replace(/\s+/g, '-');

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
      toast.error('Artikl je već u korpi!');
    } else {
      const cartItem = cart.find((item) => item.id === data.id);
      if (cartItem) {
        toast.error('Artikl je već u korpi!');
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
    <>
      <div className="w-full h-[420px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end">
          <AiOutlineHeart
            size={35}
            className={`${styles.productIcon} ${
              isProductInWishlist(data.id) ? styles.iconClicked : ''
            }`}
            onClick={addToWishlistHandler}
          />
        </div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[180px] object-contain"
          />
        </Link>

        <Link to={`/product/${product_name}`}>
          <h4 className="pb-5 font-medium text-lg">
            {data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name}
          </h4>
        </Link>

        <div className="py-2 flex items-center justify-between">
          <div className="flex flex-col">
            {data.discount_price !== 0 ? (
              <>
                <h5 className={`${styles.productDiscountPrice}`}>
                  {data.discount_price.toLocaleString('sr-RS')} RSD
                </h5>
                <h4 className={`${styles.price}`}>
                  <span className="text-red-600 ">
                    {data.price.toLocaleString('sr-RS')} RSD
                  </span>
                </h4>
              </>
            ) : (
              <h4 className={`${styles.price} ${styles.productPrice}`}>
                {data.price !== 0 && (
                  <span className="text-xl font-bold">
                    {data.price.toLocaleString('sr-RS')} RSD
                  </span>
                )}
              </h4>
            )}
          </div>

          <BsCartPlus
            size={35}
            className={`${styles.productIcon}`}
            onClick={addToCartHandler}
          />

          <span className="font-[400] text-base md:text-lg lg:text-xl text-justify text-[#5acf64] absolute bottom-3 right-5">
            {data.stock} Na stanju
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
