"use client"

import { DeleteUserById } from "@/actions/user";

type DeleteUserBtnProps = {
    userId: string;
};

function DeleteUserBtn({ userId }: DeleteUserBtnProps) {

    async function handelDelete() {
        const response = await DeleteUserById(userId)

        if (!response) {

            alert("خطا در حذف کاربر")


            return;
        }

        location.reload();

    }

    return (
        <button
            onClick={handelDelete}
            className="px-2.5 text-white bg-red-500 my-1.5 rounded-lg cursor-pointer"
        >
            Delete
        </button>
    )

}

export default DeleteUserBtn