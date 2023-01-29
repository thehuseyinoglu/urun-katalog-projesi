import Image from 'next/image'
import React from 'react'

const productCard = ({ product }) => {
    return (
        <div className='flex flex-col pt-4 px-4 w-[298px] border border-product-card-border rounded-3xl'>
            <div className='flex justify-end'>
                <span className=' '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </span>
            </div>
            <div className='flex flex-col items-center gap-y-3'>
                <div className='flex flex-col items-center gap-y-10'>

                    <img className='h-[255px] w-[184px] shadow-slate-400 shadow-md' src={`https://assignment-api.piton.com.tr${product.image}`} alt="" />

                    <div className='h-[90px] px-5 text-center'>
                        <span className='font-semibold  '>{product.name}</span>
                    </div>
                </div>
                <div className='py-4 w-[220px]  text-center border-t-2 border-product-price-border'>
                    <span className='text-xl text-header-logo font-bold'>{product.price}.00 &#8378;</span>
                </div>
            </div>
        </div>
    )
}

export default productCard