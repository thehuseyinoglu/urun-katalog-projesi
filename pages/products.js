import React from 'react'
import ProductCard from '../components/productCard'
import Layout from '@/components/Layout';


const Products = ({ data }) => {

  return (
    <div>
      <Layout>
        <div className='flex justify-center'>
          <div className=' container py-10 px-16 grid lg:grid-cols-2 justify-items-center xl:grid-cols-3 2xl:grid-cols-4 gap-y-4'>
            {data &&
              data.products?.map((product, i) => (
                <div key={i} href={`detail/${product.id}`}>
                  <ProductCard product={product} />
                </div>
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

