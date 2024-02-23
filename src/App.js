import React from "react";
import CartList from "./Components/CartList";
import MenuList from "./Components/MenuList";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Describtion from "./Components/Describtion";
import shoe1th from "./images/image-product-1-thumbnail.jpg";
import shoe2th from "./images/image-product-2-thumbnail.jpg";
import shoe3th from "./images/image-product-3-thumbnail.jpg";
import shoe4th from "./images/image-product-4-thumbnail.jpg";
import shoe1 from "./images/image-product-1.jpg";
import shoe2 from "./images/image-product-2.jpg";
import shoe3 from "./images/image-product-3.jpg";
import shoe4 from "./images/image-product-4.jpg";

import next from "./images/icon-next.svg";
import previous from "./images/icon-previous.svg";
import close from "./images/icon-closeo.svg";




export default function App() {
  let a = [shoe1,shoe2,shoe3,shoe4]


  let [menuOpen, setMenuOpen] = React.useState(false);
  let [cartOpen, setCartOpen] = React.useState(false);
  let [number, setNumber] = React.useState(0);
  let [product, setProduct] = React.useState({});
  let [productAlias, setProductAlias] = React.useState({});
  let [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    const handleresize = ()=>{
      if(window.innerWidth < 768)
        setOpen(false)
    }
    window.addEventListener('resize', handleresize)
  }, [])

  console.log(open)

  return (
    <div>
      
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} cartOpen={cartOpen} productAlias={productAlias}/>
      <div className={`h-[100%] bg-black w-screen absolute top-0 z-30 opacity-70 ${menuOpen ? "" : open? "" : "hidden"}`}></div>
      <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <CartList cartOpen = {cartOpen} productAlias={productAlias} setProduct={setProduct} setProductAlias={setProductAlias}/>
      <div className="md:w-screen md:justify-center md:items-center md:flex">
        <div className="flex width-[100%] h-max mt-[50px] flex-col md:flex-row md:items-center md:mt-40 md:justify-between md:w-[1050px]">
          <Gallery number={number} setNumber={setNumber} open={open} setOpen={setOpen} a={a}/>
          <Describtion product={product} setProduct={setProduct} setProductAlias={setProductAlias}/>
        </div>
      </div>
      {open?
         <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-40">
            <div className="w-[400px] flex justify-end items-center h-10">
              <img src={close} className="w-5 text-orange hover:cursor-pointer" onClick={()=>setOpen(false)}></img>
            </div>
            <div className="w-[100%] h-[100%] md:max-w-[400px] md:max-h-[400px] relative">
                <img src={previous} onClick={()=>setNumber((number+3)%4)} className="absolute -left-[22px] top-[50%] translate-y-[-50%] bg-white p-4 py-[13.5px] rounded-full hover:cursor-pointer hover:opacity-90 hover:border-2 border-orange"></img>
                <img src = {a[number]} onClick={()=> setOpen(!open)} className="bg-contain w-[100%] h-[100%] md:h-[400px] md:w-[400px] md:rounded-lg md:hover:cursor-pointer"></img>
                <img src={next} onClick={()=>setNumber((number+1)%4)} className=" absolute -right-[22px] top-[50%] translate-y-[-50%] bg-white p-4 py-[13.5px] rounded-full hover:cursor-pointer hover:opacity-90 hover:border-2 border-orange "></img>
            </div>

            <div className="hidden md:w-[400px] md:block">
                <ul className="flex w-[100%] py-10 justify-center gap-4">
                    <li><img  onClick={()=>setNumber(0)} className={`w-20 rounded-xl hover:cursor-pointer hover:opacity-50 ${number==0 ? "border-4 border-orange  brightness-100" : "brightness-75"}`} src={shoe1th}></img></li>
                    <li><img  onClick={()=>setNumber(1)} className={`w-20 rounded-xl hover:cursor-pointer hover:opacity-50 ${number==1 ? "border-4 border-orange  brightness-100" : "brightness-75"}`} src={shoe2th}></img></li>
                    <li><img  onClick={()=>setNumber(2)} className={`w-20 rounded-xl hover:cursor-pointer hover:opacity-50 ${number==2 ? "border-4 border-orange  brightness-100" : "brightness-75"}`} src={shoe3th}></img></li>
                    <li><img  onClick={()=>setNumber(3)} className={`w-20 rounded-xl hover:cursor-pointer hover:opacity-50 ${number==3 ? "border-4 border-orange  brightness-100" : "brightness-75"}`} src={shoe4th}></img></li>
                </ul>
            </div>
        </div>
        : <></>}

    </div>
  );
}