import React, { useState } from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const login = () => {

    const router = useRouter()

    const [remember, setRemember] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const login = () => {
        if (remember) {
            setCookie('remember', 'true');
        } else {
            setCookie('remember', 'false');
        }
        axios.post("https://assignment-api.piton.com.tr/api/v1/user/login", { password: password, email: email }).then(response => {
            console.log(response.data.token)
            setCookie('token', response.data.token);
            router.push('/products')
        })
    }
    return (
        <div className='flex flex-col gap-4'>

            <input className='py-3   w-[326px] px-8 border border-product-card-border rounded-full outline-none' placeholder='&#128231; Email Address' onChange={(e) => setEmail(e.target.value)} />
            <input className='py-3   w-[326px] px-8 border border-product-card-border rounded-full outline-none' placeholder='&#9730; Password' onChange={(e) => setPassword(e.target.value)} />
            <div className='flex justify-center items-center'>

                <input defaultChecked={remember} onChange={() => setRemember(!remember)} type="checkbox" id="vehicle1" name="vehicle1" />
                <label className='ml-2' htmlFor="vehicle1"> Beni Hatırla</label>
            </div>

            <button className=' text-white rounded-full py-4 bg-header-logo ' onClick={() => login()}>Login</button>
        </div>
    )
}

export default login

