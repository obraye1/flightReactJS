import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState('transparent');
  // const [textColor, setTextColor] = useState('white');

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 right-0 top-0  w-screen z-10 ease-in duration-300">
      <div className="md:max-w-[1240px] mx-auto flex justify-between items-center p-4">
        <a href="/">
          <h1 className="text-2xl font-bold sm:text-2xl ">briFlight</h1>
        </a>
        <div>
          <ul className="hidden sm:flex ">
            <li className="p-4 border-b">
              <a href="/">Home</a>
            </li>

            <li className="p-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* z-10 to display on top of the overlay */}
        <div
          onClick={handleClick}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenuFold size={20} />}
        </div>
        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? 'sm:hidden bg-dark absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
              : 'sm:hidden bg-dark absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul className="pt-[260px] h-screen">
            <li
              onClick={handleClick}
              className="p-4 border-b text-4xl hover:text-gold"
            >
              <a href="/">Home</a>
            </li>
            <li onClick={handleClick} className="p-4 text-4xl hover:text-gold">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
