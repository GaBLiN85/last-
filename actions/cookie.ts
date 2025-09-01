"use server"

import { cookies } from "next/headers"

export async function CreateCookie (code : string) {

    const cookieStore = await cookies()
    cookieStore.set({
        name: "token",
        value: code
    })

}