import Image from 'next/image'
import React from 'react'

const productCard = () => {
    return (
        <div className='flex flex-col pt-4 px-4 w-[298px] border border-product-card-border rounded-3xl'>
            <div className='flex justify-end'>
                <span className=' text-red-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </span>
            </div>
            <div className='flex flex-col items-center gap-y-3'>
                <div className='flex flex-col items-center gap-y-6'>
                    <div className='h-[255px] w-[184px] bg-black' >
                        <img src="" alt="" />
                    </div>
                    <div className='h-[90px] px-5 text-center'>
                        <span className='font-semibold '>Clean Architecture: A Craftsman's Guide to Software Struccture and Design</span>
                    </div>
                </div>
                <div className='py-6 w-[220px]  text-center border-t-2 border-product-price-border'>
                    <span className='text-xl text-header-logo font-bold'>22.00 T</span>
                </div>
            </div>
        </div>
    )
}

export default productCard