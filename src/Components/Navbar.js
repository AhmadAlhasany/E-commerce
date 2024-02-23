import React from 'react'
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";



function Navbar({setMenuOpen, setCartOpen, cartOpen , productAlias}) {

  return (    
    <div className="h-1 w-[100%] flex justify-center md:w-auto">
        <nav className="flex justify-between items-center h-14 fixed w-[100%] z-20 bg-white border-b-2 border-gblue md:px-0 md:h-20">
        <div className="flex items-center ml-4 md:ml-8 ">
            <img
            src={menu}
            onClick={() => setMenuOpen(true)}
            className="h-5 mr-4 hover:cursor-pointer hover:scale-110 md:hidden"
            ></img>
            <img src={logo} className="rounded-full h-5 md:h-6 md:mr-10 lg:mr-16" />
            <div className='hidden md:block'>
                <ul className='flex h-[100%]'>
                    <li className='font-bold mr-6 lg:mr-8 text-gblue hover:text-dgblue hover:cursor-pointer h-[100%] border-b-4 border-transparent pt-[35px] pb-5 hover:border-orange'>Collections</li>
                    <li className='font-bold mr-6 lg:mr-8 text-gblue hover:text-dgblue hover:cursor-pointer h-[100%] border-b-4 border-transparent pt-[35px] pb-5 hover:border-orange'>Men</li>
                    <li className='font-bold mr-6 lg:mr-8 text-gblue hover:text-dgblue hover:cursor-pointer h-[100%] border-b-4 border-transparent pt-[35px] pb-5 hover:border-orange'>Women</li>
                    <li className='font-bold mr-6 lg:mr-8 text-gblue hover:text-dgblue hover:cursor-pointer h-[100%] border-b-4 border-transparent pt-[35px] pb-5 hover:border-orange'>About</li>
                    <li className='font-bold mr-6 lg:mr-8 text-gblue hover:text-dgblue hover:cursor-pointer h-[100%] border-b-4 border-transparent pt-[35px] pb-5 hover:border-orange'>Contact</li>
                </ul>
            </div>
            
        </div>
        <div className="flex items-center mr-4 md:mr-8 md:ml-16">
            <div className='relative'>
                {productAlias?.sneakers && productAlias.sneakers > 0?
                <div className='text-white absolute rounded-lg bg-orange px-1.5 text-sm -top-2.5  right-4'>{productAlias.sneakers}</div>
                : <></>
                }
                <img
                src={cart}
                onClick={()=> setCartOpen(!cartOpen)}
                className="h-5 mr-6 hover:cursor-pointer hover:scale-110 md:h-7"
                ></img>
            </div>
            <img
            src={avatar}
            className="h-7 hover:cursor-pointer hover:scale-110 hover:border-4 rounded-full hover:border-orange md:h-8 box-content"
            ></img>
        </div>
        </nav>
    </div>
  )
}

export default Navbar