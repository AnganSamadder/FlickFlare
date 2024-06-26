import { User } from "@/app/interfaces/user";
import ManageUsers from "@/app/components/ui/pagewide/ManageUsers";

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
    <div className="w-max h-[86vh]">
      <div>
        <ManageUsers users={users} />
      </div>
    </div>
  );
}
