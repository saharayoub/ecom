import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import SelectMenu from './SelectMenu'; 
import { CiUser } from "react-icons/ci";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [showSelectMenu, setShowSelectMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to='/'>
          <img className='w-[40px]' src={Logo} alt='' />
        </Link>
        <div className='flex items-center'>
          <div className="relative">
            <CiUser className='text-3xl mr-4 cursor-pointer' onClick={() => setShowSelectMenu(!showSelectMenu)} />
            {showSelectMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <SelectMenu />
              </div>
            )}
          </div>
          <div className='relative'>
            <BsBag className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            <div className='bg-red-500 absolute -right-2 -bottom-3 text-[10px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
