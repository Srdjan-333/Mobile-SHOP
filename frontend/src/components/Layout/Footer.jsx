import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from '../../static/data';
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaCcApplePay,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#99a3a7] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-10 sm:px-10 px-5 py-20 sm:text-center">
        <ul className="px- text-xl text-center sm:text-start flex sm:block flex-col items-center">
          <br />
          <p>
            Zapratite nas putem društvenih mreža i budite u toku sa svim
            najnovijim ponudama, novostima i akcijama!
          </p>
          <div className="flex items-center mt-[23px]">
            <AiFillFacebook size={50} className="cursor-pointer" />
            <AiOutlineTwitter
              size={50}
              style={{ marginLeft: '20px', cursor: 'pointer' }}
            />
            <AiFillInstagram
              size={50}
              style={{ marginLeft: '20px', cursor: 'pointer' }}
            />
            <AiFillYoutube
              size={50}
              style={{ marginLeft: '20px', cursor: 'pointer' }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Prodavnica</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-900 
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Mobile-SHOP kompanija</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-900 
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Korisnička podrška</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-900
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex md:justify-center md:items-center sm:px-10 px-4 bg-[#437ea0] py-55">
        <div className="flex flex-col items-center justify-center text-gray-100 text-sm pb-8">
          <div className="flex justify-center items-center mb-2">
            <FaCcVisa className="h-20 w-20 text-white mr-2" />
            <FaCcMastercard className="h-20 w-20 text-white mr-2" />
            <FaCcPaypal className="h-20 w-20 text-white m-2" />
            <FaCcApplePay className="h-20 w-20 text-white mr-2" />
          </div>
          <span className="block">© 2023 Mobile SHOP. Sva prava zadržana.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
