import React from 'react'
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import cart from "../images/icon-cartw.svg"


function Describtion({product, setProduct, setProductAlias}) {
    /* so the operator ?. check if this prop exists, if it doesn't it assigns what is after || to the variable.
    ...props.product spreads the object in the variable and empty:2 overrides the prop empty inside product if it exists
    to make my cart I'll use object in a way so each product has an id which will be a prop, when a product is added to the cart 
    we add the object's id to the cart along with the number of items the person wants to get.
    */

  return (
    <div className='p-5 md:mr-2 md:max-w-[450px]'>
        <span className='uppercase text-orange font-bold'>sneaker company</span>
        <h1 className='text-3xl font-bold my-5'> Fall Limited Edition Sneakers</h1>
        <p className='text-dgblue leading-7'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll 
            withstand everything the weather can offer.
        </p>
        <div className='my-5 flex justify-between items-center md:flex-col md:items-start md:gap-3'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold'>$125.00</span>
                <span className='text-orange bg-porange font-bold px-1.5 ml-4 rounded'>50%</span>
            </div>
            <div className='line-through text-lg font-bold decoration-gblue text-gblue de'>$250.00</div>
        </div>
       <div className='md:flex md:items-center md:gap-4'>
        <div className='select-none w-[100%] flex items-center justify-between bg-lgblue p-4 px-6 rounded-lg font-bold text-xl md:h-[60px]'>
            <img src={minus} onClick={()=>setProduct(pre => {
                if(!product.sneakers || product?.sneakers == 0)
                    return {...pre}
                else
                    return {...pre, sneakers: product.sneakers-1}
                })} className='hover:cursor-pointer w-4'></img>
            {product?.sneakers || 0}
            <img src={plus} onClick={()=>setProduct(pre => { return {...pre, sneakers: (product?.sneakers ? product.sneakers +1: 1 ) }})} className='hover:cursor-pointer w-4'></img>
        </div>
        <button onClick={()=>setProductAlias({...product})} className='h-[60px]  bg-orange text-white rounded-lg w-[100%] font-bold text-xl my-5 flex items-center justify-center hover:opacity-60 shadow-[10px_10px_10px_5px] shadow-porange'>
            <img src={cart} className='mr-2 w-5'></img>
            Add to cart
        </button>
        </div>
    </div>
  )
}

export default Describtion