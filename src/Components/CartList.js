import React from 'react'
import delet from "../images/icon-delete.svg"
import shoe1th from "../images/image-product-1-thumbnail.jpg"


function CartList({cartOpen, productAlias, setProduct, setProductAlias}) {
  
  /* If there were many product you would have taken there ids from productAlias and made an array of them by filtering all the items
  then you would show the items that have been added to the cart*/

  return (
    <div className={`ease-in-out duration-500 shadow-lg w-[calc(100%-64px)] md:w-[320px] h-[210px] mx-auto mt-[70px] pt-4 rounded-xl  right-8 fixed z-10 bg-white  ${ cartOpen ? "top-[0px] md:top-[30px]" : "-top-96"}`}>
        <h3 className="text-lg font-bold border-b pb-4 border-gblue px-4"> Cart </h3>
        {
          (!productAlias?.sneakers || productAlias.sneakers == 0)?
        <div className="font-bold flex items-center justify-center flex-col h-[100%]">
            <p className="text-dgblue pb-10">Your cart is empty.</p>
        </div>
        :
        <div className='p-4'>
          <div className='flex items-center w-[100%] justify-between'>
            <img src={shoe1th} className='h-12 rounded'></img>
            <div className='flex flex-col justify-between'>
              <p className='text-sm ml-3'>Fall Limited Edition Sneakers</p>
              <p className='ml-3 text-sm'>$125.00 x {productAlias.sneakers} <span className='text-black font-bold text-sm ml-3'>${(125 * productAlias.sneakers).toFixed(2)}</span></p>
            </div>
            <img className='hover:brightness-105 hover:cursor-pointer' onClick={()=>{
              setProduct(prev => {return {...prev, sneakers:0}})
              setProductAlias(prev => {return {...prev, sneakers:0}})
              }} src={delet}></img>
          </div>
          <button onClick={()=>{alert("If this were real you would've got your sneakers")
          setProduct(prev => {return {...prev, sneakers:0}})
          setProductAlias(prev => {return {...prev, sneakers:0}})
          
        }} className='h-12 bg-orange text-white rounded-lg w-[100%] font-bold my-5 hover:opacity-60 shadow-[5px_5px_5px_0px] shadow-porange'>
             Checkout
          </button>
        </div>
        }
     </div>
    )
}

export default CartList