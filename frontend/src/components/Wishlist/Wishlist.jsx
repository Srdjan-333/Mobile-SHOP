import React, { useState, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BsCartPlus } from 'react-icons/bs';
import styles from '../../styles/styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../redux/actions/wishlist';
import { addToCart } from '../../redux/actions/cart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist, cart } = useSelector((state) => ({
    wishlist: state.wishlist.wishlist,
    cart: state.cart.cart,
  }));

  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.some((item) => item.id === data.id);
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
          const cartData = { ...data, qty: 1 };
          dispatch(addToCart(cartData));
          toast.success('Artikl je dodat u korpu.');
        }
      }
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setOpenWishlist(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setOpenWishlist]);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[30%] bg-white flex flex-col justify-between shadow-sm">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Lista želja je prazna</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Dužina artikla */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={35} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {wishlist && wishlist.length} Broj artikala u listi želja
                </h5>
              </div>

              {/* Pojedinačni artik */}
              <br />
              <div className="w-full border-t">
                {wishlist &&
                  wishlist.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      removeFromWishlistHandler={removeFromWishlistHandler}
                      addToCartHandler={addToCartHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value] = useState(1);
  const totalPrice = (data?.discount_price * value).toLocaleString('sr-RS');

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1
          size={30}
          className="cursor-pointer ml-auto flex-shrink-0"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <Link
          to={`/product/${encodeURIComponent(data.name.replace(/\s+/g, '-'))}`}
          className="flex-shrink-0"
        >
          <img
            src={data?.image_Url?.[0]?.url}
            alt=""
            className="w-[140px] h-min ml-2 mr-2 rounded-[5px]"
          />
        </Link>

        <div className="pl-[4px] ">
          <Link
            to={`/product/${encodeURIComponent(
              data.name.replace(/\s+/g, '-')
            )}`}
            className="text-[#000000]"
          >
            <h1>{data.name}</h1>
          </Link>
          <h4 className="font-[600] pt-3 800px:pt-[3px] text-[20px] text-[#d02222] font-Roboto">
            {totalPrice} RSD
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={35}
            className="cursor-pointer"
            title="Dodaj u korpu"
            onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
