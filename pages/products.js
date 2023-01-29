import { getCookie, getCookies, setCookie } from 'cookies-next';
import React, { useState } from 'react'
import Header from '../components/header'
import ProductCard from '../components/productCard'
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Products = ({ data }) => {



  return (
    <div>
      <Layout>


      <div className='flex justify-center'>
        <div className=' container py-10 px-16 grid lg:grid-cols-2 justify-items-center xl:grid-cols-4 gap-y-4'>
          {data &&
            data.products?.map((product, i) => (
              <Link key={i} href={`detail/${product.id}`}>
              <ProductCard  product={product} />
              </Link>
            ))
          }
        </div>
      </div>
      </Layout>

    </div>
  )
}
export default Products

export const getServerSideProps = async (context) => {

  const cookies = context.req.cookies

  const data = await fetch('https://assignment-api.piton.com.tr/api/v1/product/all', {
    headers: {
      Authorization: 'Bearer ' + cookies.token,
      'access-token': cookies.token
    }
  }).then(res => res.json())
  return {
    props: {
      data
    }
  }
}
