import Layout from '@/components/Layout';
import React, { useState } from 'react'


const Detail = ({ data }) => {

  

    return (
        <Layout>
            <div className=' flex  justify-center p-20'>

                <div className='container flex justify-center  '>

                    <div className='w-[810px] flex flex-col border border-product-card-border py-6 relative rounded-xl'>
                        <div className='px-6'>
                            <div  className='flex  justify-end'><span className='flex flex-row items-center justify-center'>
                                {data.product.likes.length} likes
                                <span className=' text-red-600 ml-2 flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </span>
                            </span>
                            </div>
                            <div className='grid  lg:grid-cols-2   justify-items-center items-center'>
                                <div className='w-[205px] h-[286px] ' >
                                    <img src={`https://assignment-api.piton.com.tr${data.product.image}`} alt="" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <span className='font-semibold text-3xl'>{data.product.name}</span> <br />
                                    <span>{data.product.description}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end   '>
                            <span className='px-6 py-2  rounded-l-3xl font-semibold text-2xl text-white bg-header-logo'>{data.product.price}.00 &#8378;</span>
                        </div>
                    </div>

                </div>
            </div></Layout>
    )
}

export default Detail


export const getServerSideProps = async (context) => {

    const cookies = context.req.cookies

    const data = await fetch(`https://assignment-api.piton.com.tr/api/v1/product/get/${context.params.id}`, {
        headers: {
            Authorization: 'Bearer ' + cookies.token,
            'access-token': cookies.token
        }
    }).then(res => res.json())

    if (!cookies.token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {
        return {
            props: {
                data
            }
        }

    }











}
