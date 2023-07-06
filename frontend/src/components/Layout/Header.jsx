import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { categoriesData, productData } from '../../static/data';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import DropDown from './DropDown';
import Navbar from './Navbar';
import Cart from '../cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const searchRef = useRef();
  const categoryRef = useRef();
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm('');
      setSearchData(null);
    }
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  const handleProductClick = (product) => {
    navigate(
      `/product/${encodeURIComponent(product.name.replace(/\s+/g, '-'))}`
    );
    setSearchTerm('');
    setSearchData(null);
  };

  return (
    <>
      {/* Zaglavlje */}
      <div className={`${styles.section} hidden md:block`}>
        <div className="flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-auto">
            <Link to="/">
              <img
                src="https://www.nicepng.com/png/detail/215-2151510_shop-mobile-online-mobile-shop-mobile-shop-image.png"
                alt="Logo Mobile Shop"
                className="h-10 md:h-12 lg:h-24 max-w-full"
              />
            </Link>
          </div>
          {/* Pretraga */}
          <div className="w-[50%] relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Pretraga proizvoda..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#4d4949] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-100 shadow-sm-2 z-[9] p-3">
                {searchData.map((product) => (
                  <Link
                    to={`/product/${encodeURIComponent(
                      product.name.replace(/\s+/g, '-')
                    )}`}
                    onClick={() => handleProductClick(product)}
                    key={product.id}
                    className="block mb-3"
                  >
                    <div className="flex items-start-py-3">
                      <img
                        src={product.image_Url[0].url}
                        alt=""
                        className="w-[50px] h-[50px] mr-[2px]"
                      />
                      <h1>{product.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Desktop navigacija */}
      <div
        className={`${
          active === true ? 'shadow-sm fixed top-0 left-0 z-10' : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#7da9c7e0] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* Kategorije */}
          <div ref={categoryRef}>
            <div onClick={() => setDropDown(!dropDown)}>
              <div className="relative h-[60px] mt-[10px] w-[270px]  hidden 1000px:block">
                <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                <button
                  className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                >
                  Svi proizvodi
                </button>
                <IoIosArrowDown
                  size={30}
                  className="absolute right-10 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {/* Navigacione ikonice */}
          <div className={`${styles.noramlFlex} flex items-center`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex items-center">
            <div className={`${styles.noramlFlex} flex items-center mr-10`}>
              <div
                className="relative cursor-pointer"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={35} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
                <span className="block text-white text-sm font-semibold mt-1 text-center">
                  Želje
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex} flex items-center mr-10`}>
              <div
                className="relative cursor-pointer"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={35}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
                <span className="block text-white text-sm font-semibold mt-1 text-center">
                  Korpa
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex} flex items-center mr-10`}>
              <div className="relative cursor-pointer">
                <Link to="/login">
                  <CgProfile size={35} color="rgb(255 255 255 / 83%)" />
                  <span className="block text-white text-sm font-semibold mt-1 text-center">
                    Prijava
                  </span>
                </Link>
              </div>
            </div>

            {/* Prozor korpe */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* Prozor lise želja */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* Zaglavlje za mobilne uređaje */}
      <div
        className={`${
          active === true ? 'shadow-sm fixed top-0 left-0 z-30' : null
        }
w-full h-[60px] bg-[#f6f6f6] z-50 top-0 left-0 shadow-sm 800px:hidden flex items-center justify-between`}
      >
        <div>
          <BiMenuAltLeft
            size={40}
            className="ml-4"
            onClick={() => setOpen(true)}
          />
        </div>
        <div>
          <Link to="/">
            <img
              src="https://www.nicepng.com/png/detail/215-2151510_shop-mobile-online-mobile-shop-mobile-shop-image.png"
              alt=""
              className="mb-1 ml-12 cursor-pointer h-16"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div
            className="relative mr-[15px]"
            onClick={() => setOpenWishlist(true)}
          >
            <AiOutlineHeart size={40} />
            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
              {wishlist && wishlist.length}
            </span>
          </div>
          <div className="relative mr-[10px]" onClick={() => setOpenCart(true)}>
            <AiOutlineShoppingCart size={40} />
            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>
        </div>

        {/* Prozor korpe */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

        {/* rozor lise želja */}
        {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
      </div>

      {/* Bočna traka zaglavlja */}
      {open && (
        <div className={`fixed w-full bg-[#0000005f] z-50 h-full top-0 left-0`}>
          <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
            <div className="w-full justify-between flex pr-3">
              <div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div
                className={`${styles.noramlFlex} flex items-center mt-3 mr-1`}
              >
                <div className="relative cursor-pointer">
                  <Link to="/login">
                    <CgProfile size={35} />
                    <span className="block text-bleck text-sm font-semibold mt-1 text-center">
                      Prijava
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className={`${styles.noramlFlex} flex items-center`}>
              <Navbar active={activeHeading} />
            </div>

            {/* Pretraga */}
            <div className="w-full relative" ref={searchRef}>
              <input
                type="text"
                placeholder="Pretraga proizvoda..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[40px] w-full px-2 border-[#4d4949] border-[2px] rounded-md"
              />
              <AiOutlineSearch
                size={30}
                className="absolute right-2 top-1.5 cursor-pointer"
              />
              {searchData && searchData.length !== 0 ? (
                <div className="absolute min-h-[30vh] bg-slate-100 shadow-sm-2 z-[9] p-3">
                  {searchData.map((product) => (
                    <Link
                      to={`/product/${encodeURIComponent(
                        product.name.replace(/\s+/g, '-')
                      )}`}
                      onClick={() => handleProductClick(product)}
                      key={product.id}
                      className="block mb-3"
                    >
                      <div className="flex items-start-py-3">
                        <img
                          src={product.image_Url[0].url}
                          alt=""
                          className="w-[50px] h-[50px] mr-[2px]"
                        />
                        <h1>{product.name}</h1>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
