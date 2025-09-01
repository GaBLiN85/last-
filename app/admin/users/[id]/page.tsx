import { GetUsersById } from "@/actions/user";
import UserEditForm from "@/components/users/UserEditForm";

interface IParams {
    params: Promise<{ id: string }>
}

async function EditUsersPage({ params }: IParams) {

    const { id } = await params;
    const user = await GetUsersById(id);



    return (
        <div className="bg-neutral-200 rounded-xl shadow-lg max-w-[600px] mx-auto my-12 p-5">
            <h1 className="font-bold text-xl text-center">update this user </h1>
           <UserEditForm currentUser={user} />
        </div>

    )
}
export default EditUsersPage

