"use server"

import db from "@/lib/db"
import { onCreateJWT } from "./JWT"



export async function LoginAction(mobile: string, password: string) {
    const findUser = await db.users.findUnique({
        where: {
            mobile
        }
    })

    if (!findUser) {
        return {
            succsess: false,
            message: " شماره یا رمز اشتباه است !"
        }


    }

    if (password !== findUser.password) {
        return {
            succsess: false,
            message: " شماره یا رمز اشتباه است !"
        }
    }

    const jwt = await onCreateJWT({
        mobile: findUser.mobile,
        userId: findUser.id,
    })

    return {
        succsess: true,
       code :jwt
    }
}