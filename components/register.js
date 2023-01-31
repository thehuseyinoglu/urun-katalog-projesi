import React, { useState } from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const register = () => {
    const router = useRouter()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPasword] = useState(false)
    const [errorMailName, setErrorMailName] = useState(false)

    const register = () => {

        if (password.length >= 6 && password.length <= 20 && password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/)) {
            if (fullName != '' && email != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                axios.post("https://assignment-api.piton.com.tr/api/v1/user/register", { name: fullName, password: password, email: email }).then(response => {

                    setCookie('token', response.data.token);
                    setCookie('remember', 'false');
                    router.push('/products')
                })
            }
            else {
                setErrorMailName(true)
            }
        } else {
            setErrorPasword(true)
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <input onChange={(e) => setFullName(e.target.value)}
                className={errorMailName ? 'py-3 px-8 w-[326px] border  border-red-600 rounded-full outline-none' : 'py-3 px-8 w-[326px] border border-product-card-border rounded-full outline-none'} type="text" placeholder='&#9823; FullName' />
            <input onChange={(e) => setEmail(e.target.value)} id='email' className={errorMailName ? 'py-3   w-[326px] px-8 border border-red-600 rounded-full outline-none' : 'py-3   w-[326px] px-8 border border-product-card-border rounded-full outline-none'} type="email" placeholder='&#128231; Email Address' required />
            <input onChange={(e) => setPassword(e.target.value)} className={errorPassword ? 'py-3   w-[326px] px-8 border border-red-600 rounded-full outline-none' : 'py-3   w-[326px] px-8 border border-product-card-border rounded-full outline-none'} type="password" placeholder='&#9730; Password' />
            <span className=''>Şifre sayı ve harflerden oluşmalıdır</span>
            <button className=' text-white rounded-full py-4 bg-header-logo ' onClick={() => register()}>Register</button>
        </div>
    )
}

export default register