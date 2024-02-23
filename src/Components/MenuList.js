import React from 'react'
import close from "../images/icon-close.svg";

function MenuList({menuOpen, setMenuOpen}) {

  return (
    <div
    className={`ease-in-out duration-500 h-screen bg-white fixed w-[65%] p-6 z-40 ${menuOpen ? "top-0 left-0" : "left-[-100%]"}`}
     >
        <img
        src={close}
        onClick={() => setMenuOpen(false)}
        className="h-4 mb-8 hover:cursor-pointer hover:scale-110"
        ></img>
        <ul className='select-none'>
        <li className="font-bold  text-[16px] mb-3 hover:cursor-pointer">
            Collections
        </li>
        <li className="font-bold  text-[16px] mb-3 hover:cursor-pointer">
            Men
        </li>
        <li className="font-bold  text-[16px] mb-3 hover:cursor-pointer">
            Women
        </li>
        <li className="font-bold  text-[16px] mb-3 hover:cursor-pointer">
            About
        </li>
        <li className="font-bold  text-[16px] mb-3 hover:cursor-pointer">
            Contact
        </li>
        </ul>
    </div>
  )
}

export default MenuList