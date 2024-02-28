"use client";
import { useRouter } from "next/navigation";

const ManageButton = () => {
  const router = useRouter();

  return (
    <button
      className="p-[3px] relative float-right"
      onClick={() => router.replace("/manage/movies")}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-full" />
      <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
        Manage
      </div>
    </button>
  );
};

export default ManageButton;
