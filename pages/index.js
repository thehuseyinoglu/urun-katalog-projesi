import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { deleteCookie, getCookie, getCookies, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useState } from 'react';
import Login from '../components/login'
import Register from '../components/register'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  // const localtoken = () => {
  //   console.log('berkay')
  //   setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RiQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAxNTEzOSwiZXhwIjoxNzAwOTM1MTM5fQ.oTBUw7T7qmQLqh7Mavm3sKuxh0hEuex3sC0WnRPdfmY',);
  // }

  const [isUser, setIsUser] = useState(true)



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className=' h-screen w-screen flex'>
        <div className=' bg-header-logo w-2/3 h-screen justify-center items-center flex flex-col'>
          <div className='flex flex-col  text-white gap-3'>
            <span className='font-bold text-6xl'>PitonShop</span>
            <span className='text-2xl'>The most popular book shop for IT</span>
          </div>
        </div>

        <div className='w-1/3 h-screen flex justify-center items-center'>

          <div className='flex flex-col '>

            {
              isUser
                ? <div className='flex flex-col mb-6'>
                  <span className='font-bold text-2xl'>Hello</span>
                  <span className='text-lg'>Sign Up to Get Started</span>
                </div>
                : <div className='flex flex-col mb-6'>
                  <span className='font-bold text-2xl'>Hello Again!</span>
                  <span className='text-lg'>Welcome Back</span>
                </div>

            }
            {isUser ? <Login/> : <Register/>}

            {
              isUser ?
              <div onClick={() => setIsUser(false)} className='mt-2 text-center cursor-pointer text-gray-400'>
                <span>Hesap Olusturun</span>
              </div>
              : <div onClick={() => setIsUser(true)} className='mt-2 text-center cursor-pointer text-gray-400'>
              <span>Hesabım var</span>
            </div>
            }

          </div>


        </div>
      </div>
    </>
  )
}
export const getServerSideProps = async (context) => {

  const cookies = context.req.cookies

  if (cookies.token) {
      return {
          redirect: {
              destination: '/products',
              permanent: false,
          },
      }

  } else {
      return{
        props:{}
      }

  }


}