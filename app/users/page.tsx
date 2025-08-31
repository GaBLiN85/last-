import { GetAllUsers } from "@/actions/user"
import Link from "next/link"


async function UsersPage() {
    const users = await GetAllUsers()

   

    return (
        <div className="bg-neutral-200 rounded-xl shadow-lg max-w-[600px] mx-auto my-12 p-5">
            <h1 className="text-center pb-3 font-bold text-xl">users List</h1>
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
                           <td><Link href={`/users/${user.id}`}>edit</Link></td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default UsersPage 