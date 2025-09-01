"use server"

import db from "@/lib/db"



export async function GetAllUsers() {
  const users = await db.users.findMany({

  })

  return users
}


export async function GetUsersById(id: string) {
  const user = await db.users.findUnique({
    where: { id }
  })

  return user
}

type TUserUpdate = {
  ferstname?: string | null
  lastname?: string | null
  mobile?: string
}


export async function UpdateUserById(id: string, data: TUserUpdate) {
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

type TUserCreate = {
  ferstname: string | null;
  lastname: string | null;
  mobile: string;
};


export async function CreateNewUser(data: TUserCreate) {

  const user = await db.users.create({ data })

  if (!CreateNewUser) return {
    success: false,
    massage: "عملیات افزودن با خطا مواجه شد!"
  }
  return {
    success: true,
    massage: "کاربر با موفقیت اضافه شد!"
  }
}

export async function DeleteUserById(id : string) {
  const deleteUser = await db.users.delete({
    where: { id }


  })

  if (!deleteUser) return {
    success: false,
    massage: "عملیات حذف با خطا مواجه شد!"
  }
  return {
    success: true,
    massage: "کاربر با موفقیت حذف شد!"
  }

}

