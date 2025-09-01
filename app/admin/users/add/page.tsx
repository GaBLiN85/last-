"use client"

import { CreateNewUser } from "@/actions/user"
import { useState } from "react"

function AddUserPage() {
    const [ferstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setpassword] = useState("")



    async function handelCreate() {
        const data = {
            ferstname: ferstname,
            lastname: lastname,
            mobile: mobile,
            password : password,
        };
        
        const response = await CreateNewUser(data);


        if (!response) {
            alert("خطا در افزودن کاربر!");
            return;
        }

        alert("کاربر اضافه شد!");
        location.href = "/admin/users";
    }



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-200 rounded-xl shadow-lg max-w-[600px] mx-auto my-12 p-5">
            <div>
                <label htmlFor="fertsname">first name</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="text"
                    id="ferstname"
                    onChange={(txet) => setFirstName(txet.target.value)}

                />
            </div>

            <div>
                <label htmlFor="lastname">last name</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="text"
                    id="lastname"
                    onChange={(text) => setLastName(text.target.value)}

                />

            </div>

            <div>
                <label htmlFor="Mobile">mobile</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="number"
                    id="mobile"
                    onChange={(text) => setMobile(text.target.value)}

                />
            </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="text"
                    id="password"
                    onChange={(text) => setpassword(text.target.value)}

                />
            </div>

            <div className="col-start-1 col-end-3">
                <button
                    className="bg-green-500 text-white rounded-lg py-1.5 px-3 cursor-pointer"
                    onClick={handelCreate}
                >Save</button>
            </div>
        </div>
    )

}

export default AddUserPage