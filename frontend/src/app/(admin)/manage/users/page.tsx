import { User } from "@/app/interfaces/user";
import ManageUsers from "@/app/components/ui/ManageUsers";

export default async function Users() {
  const res = await fetch("http://localhost:8080/user/getAll", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const users = await res.json();

  return (
    <div className="m-10 w-max flex-col justify-center">
      <label className="text-orange-500 text-4xl font-bold">Manage Users</label>
      <ManageUsers users={users} />
    </div>
  );
}
