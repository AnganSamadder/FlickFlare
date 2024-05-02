"use client";
import { useRouter } from "next/navigation";
import AdminPage from "@/app/components/checks/AdminPage";
import EditUser from "@/app/components/ui/EditUser";

export default function EditUsers({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.push(`/manage/users`);
  };

  return (
    <AdminPage>
      <div className="h-[86vh]">
        <button
          onClick={handleBackButtonClick}
          className="absolute mx-12 h-fit px-8 py-2 rounded-bl-3xl rounded-tr-3xl bg-orange-500 text-white font-bold font-['Maven Pro'] leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent"
        >
          Back
        </button>
        <div className="my-5">
          <EditUser id={id} />
        </div>
      </div>
    </AdminPage>
  );
}
