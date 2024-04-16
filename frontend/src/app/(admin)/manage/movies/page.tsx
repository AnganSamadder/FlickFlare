import EditMovies from "@/app/components/ui/EditMovies";
import AdminPage from "@/app/components/AdminPage";

export default async function Showtimes() {
  const res = await fetch("http://localhost:8080/movie/getAll", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies = await res.json();

  return (
    <AdminPage>
      <div className="w-screen h-[86vh] px-4 pb-4 justify-center">
        <div className="text-orange-500 text-4xl text-center font-bold font-['Maven Pro'] leading-normal">
          Manage Movies
        </div>
        <EditMovies movies={movies} />
      </div>
    </AdminPage>
  );
}
