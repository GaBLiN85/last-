import { GetAllUsers } from "@/actions/user"

async function HomePage() {
  const users = await GetAllUsers();

  console.log(users);
  return (

    <div>
      hi homepage
    </div>

  )
}

export default HomePage