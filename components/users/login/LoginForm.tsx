"use client"

import { CreateCookie } from "@/actions/cookie"
import { LoginAction } from "@/actions/login"
import { useState } from "react"

function LoginForm() {

    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")


    async function handelLogin() {
        const response = await LoginAction(mobile, password)


        if (!response) {
            alert("خطایی رخ داد ! بعدا تلاش کنید.")
            return;
        }

        if (response.succsess === false) {

            alert(response.message)

            return;
        }

        if (!response.code) {
            alert(response.message)
            return;
        }


       await CreateCookie(response.code);

       location.href = "/admin/users"
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col">

                <label htmlFor="">Mobile</label>
                <input type="text" id="mobile" onChange={(txet) => setmobile(txet.target.value)} className="border py-1.5 px px-3 rounded-lg" />

            </div>
            <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input type="password" id="password" onChange={(txet) => setpassword(txet.target.value)} className="border py-1.5 px px-3 rounded-lg" />
            </div>

            <button onClick={handelLogin} className="bg-green-600 py-2 px-4 rounded-lg text-center cursor-pointer w-full transition hover:bg-green-800">

                login
            </button>
        </div>
    )
}

export default LoginForm