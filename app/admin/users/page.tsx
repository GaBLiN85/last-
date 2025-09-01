import { GetAllUsers } from "@/actions/user"
import DeleteUserBtn from "@/components/users/DeleteUserBtn"
import Link from "next/link"


async function UsersPage() {
    const users = await GetAllUsers()



    return (
        <div className="bg-neutral-200 rounded-xl shadow-lg max-w-[600px] mx-auto my-12 p-5">
            <div className="flex items-center justify-between">
                <h1 className="text-center pb-3 font-bold text-xl">users List</h1>
                <Link href={`/admin/users/add`} className="text-amber-50 hover:underline mb-6 bg-blue-800 px-3 rounded-lg font-bold text-lg transition hover:bg-blue-950">add</Link>
            </div>


            <table className="w-full text-center">

                <thead>

                    <tr className="border">
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>mobile</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="border">
                            <td>{user.ferstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link href={`/admin/users/${user.id}`} className="mr-1.5">edit</Link>
                                <DeleteUserBtn userId={user.id} />
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default UsersPage 