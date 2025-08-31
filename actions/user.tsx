"use server"

import db from "@/lib/db"

export async function GetAllUsers() {
    const users = await db.users.findMany({
        select: {
            id:true,
            ferstname: true,
            lastname: true,
            mobile: true,
        }
    })

    return users
}


export async function GetUsersById(id: string) {
    const user = await db.users.findUnique({
        where: { id }
    })
    
    return user
}

type UpdateUserData = {
  firstname?: string | null;
  lastname?: string | null;
  mobile?: string
  password?: string | null;
};

export async function UpdateUserById(id: string, data: UpdateUserData) {
  const updatedUser = await db.users.update({
    where: { id },
    data,
  });

if (!updatedUser) return {
    success: false,
    massage: "عملیات ویرایش با خطا مواجه شد!"
}


  return {
    success: true,
    massage: "کاربر با موفقیت ویرایش شد!"
  }

}