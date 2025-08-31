"use client"

import { UpdateUserById } from "@/actions/user";
import { useState } from "react"

interface IUserEditorPage {
    currentUser: {
        id: string;
        ferstname: string | null;
        lastname: string | null;
        mobile: string
    } | null;
}


function UserEditFormPage({ currentUser }: IUserEditorPage) {
    const [firsName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")

    async function handelUpdate() {
        const data = { firsName, lastName, mobile }
        const response = await UpdateUserById(currentUser?.id as string, data);
        if (!response) {
            alert("با خطا مواجه شد!")
            return;
        }
        alert("کاربر با موفقیت ویرایش شد!")
        location.href = "/users"
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
                <label htmlFor="firsName">first name</label>
                <input className="w-full border rounded-lg py-1.5 px-3" type="text" id="firstName"
                    onChange={(txet) => setFirstName(txet.target.value)}
                    value={firsName}
                />
            </div>

            <div>
                <label htmlFor="lastName">last name</label>
                <input className="w-full border rounded-lg py-1.5 px-3" type="text" id="lastName"
                    onChange={(text) => setLastName(text.target.value)}
                    value={lastName}
                />

            </div>

            <div>
                <label htmlFor="Mobile">mobile</label>
                <input className="w-full border rounded-lg py-1.5 px-3" type="number" id="mobile"
                    onChange={(text) => setMobile(text.target.value)}
                    value={mobile}
                />
            </div>

            <div className="col-start-1 col-end-3">
                <button className="bg-green-500 text-white rounded-lg py-1.5 px-3 cursor-pointer"
                    onClick={handelUpdate}
                >save</button>
            </div>
        </div>
    )
}

export default UserEditFormPage