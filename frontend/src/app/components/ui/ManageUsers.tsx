import { User } from "@/app/interfaces/user";
import UserAccountCard from "@/app/components/containers/UserAccountCard";

const ManageUsers = (props: { users: User[] }) => {
  return (
    <div>
      <div className="my-5 text-orange-500 text-4xl font-bold text-center">
        Manage Users
      </div>
      <div className="rounded-lg bg-zinc-600 p-5 font-bold">
        <div className="flex flex-row justify-center gap-5">
          <p className="font-extrabold text-white">Status Color:</p>
          <p className="font-bold text-orange-500">Admin</p>
          <p className="font-bold text-green-500">User</p>
          <p className="font-bold text-rose-950">Unverified Admin</p>
          <p className="font-bold text-black">Unverified User</p>
          <p className="font-bold text-red-600">Suspended User</p>
        </div>
        <div className="max-h-96 overflow-y-scroll">
          {props.users.map((user) => (
            <UserAccountCard key={user.userId} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
