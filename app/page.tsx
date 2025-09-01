import { GetAllUsers } from "@/actions/user"
import Link from "next/link";

async function HomePage() {
  const users = await GetAllUsers();


  return (

    <div className="text-center">
      <h1 className="text-center text-4xl font-bold mt-1.5">
        hi homepage
      </h1>

      <Link href={`/admin/users`} className="mt-50 text-2xl font-bold bg-green-500 py-1.5 px-4 rounded-lg cursor-pointer hover:bg-green-600 transition inline-block">Users List</Link>

    </div>

  )
}

export default HomePage