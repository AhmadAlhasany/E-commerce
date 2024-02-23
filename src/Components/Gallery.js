import React from "react";
import shoe1th from "../images/image-product-1-thumbnail.jpg";
import shoe1 from "../images/image-product-1.jpg";
import shoe2th from "../images/image-product-2-thumbnail.jpg";
import shoe2 from "../images/image-product-2.jpg";
import shoe3th from "../images/image-product-3-thumbnail.jpg";
import shoe3 from "../images/image-product-3.jpg";
import shoe4th from "../images/image-product-4-thumbnail.jpg";
import shoe4 from "../images/image-product-4.jpg";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";

function Gallery({number, setNumber, open, setOpen,a}) {

  return (
    <div className=" h-fit md:w-max z-0 md:ml-2">
        <div className="w-[100%] h-[100%] md:max-w-[400px] md:max-h-[400px] relative">
            <img src={previous} onClick={()=>setNumber((number+3)%4)} className="absolute left-1 top-[50%] translate-y-[-50%] bg-white p-4 py-[13.5px] rounded-full hover:cursor-pointer hover:opacity-90 hover:border-2 border-orange sm:left-4 md:hidden"></img>
            <img src = {a[number]} onClick={()=> setOpen(true)} className="bg-contain w-[100%] h-[100%] md:h-[400px] md:w-[400px] md:rounded-lg md:hover:cursor-pointer"></img>
            <img src={next} onClick={()=>setNumber((number+1)%4)} className="absolute right-1 top-[50%] translate-y-[-50%] bg-white p-4 py-[13.5px] rounded-full hover:cursor-pointer hover:opacity-90 hover:border-2 border-orange sm:right-4 md:hidden"></img>
        </div>

        <div className="hidden md:w-[400px] md:block">
            <ul className="flex w-[100%] py-10 justify-between gap-8">
                <li><img  onClick={()=>setNumber(0)} className={`rounded-xl hover:cursor-pointer hover:opacity-50 ${number==0 ? "border-4 border-orange opacity-50" : ""}`} src={shoe1th}></img></li>
                <li><img  onClick={()=>setNumber(1)} className={`rounded-xl hover:cursor-pointer hover:opacity-50 ${number==1 ? "border-4 border-orange opacity-50" : ""}`} src={shoe2th}></img></li>
                <li><img  onClick={()=>setNumber(2)} className={`rounded-xl hover:cursor-pointer hover:opacity-50 ${number==2 ? "border-4 border-orange opacity-50" : ""}`} src={shoe3th}></img></li>
                <li><img  onClick={()=>setNumber(3)} className={`rounded-xl hover:cursor-pointer hover:opacity-50 ${number==3 ? "border-4 border-orange opacity-50" : ""}`} src={shoe4th}></img></li>
            </ul>
        </div>

    </div>   
  )
}

export default Gallery