import MovieGrid from "@/app/components/MovieGrid";
import ManageButton from "@/app/components/ManageButton";
import { useRouter } from "next/navigation";

export default async function Home() {
  const res = await fetch("http://localhost:8080/movie/getAll");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies = await res.json();

  return (
    <div className="flex-col">
      <div className="w-full h-20">
        <div className="text-orange-500 text-4xl font-bold font-['Maven Pro'] leading-normal pt-5 overflow-hidden float-left">
          Currently Running
        </div>
        <div className="pt-5 pr-8">
          <ManageButton />
        </div>
      </div>
      <MovieGrid items={movies} />
    </div>
  );
}
