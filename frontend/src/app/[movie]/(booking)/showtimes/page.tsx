import ShowtimeCard from "@/app/components/ShowtimeCard";
import Link from "next/link";

export default function Showtimes() {
  return (
    <div className="w-fit h-fit my-10 relative bg-black">
      <button className="mx-10 px-8 py-2 rounded-bl-3xl rounded-tr-3xl bg-orange-500 text-white font-bold leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent ">
        <Link href="/"> Back </Link>
      </button>
      <div className="flex flex-row space-x-5 m-5">
        <div className="space-y-5 mx-5 flex flex-col">
          <div className="text-orange-500 text-5xl font-bold text-center leading-normal">
            Iron man
          </div>
          <img
            className="w-[323px] h-[404px]"
            src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg"
          />
        </div>
        <div className="flex flex-col mx-5 justify-center">
          <label className="text-orange-500 text-5xl font-bold leading-normal text-center">
            Select Showtime
          </label>
          <div className="w-fit h-fit p-10 bg-zinc-700 bg-opacity-50 rounded-[17px]">
            <div className="flex flex-col">
              <ShowtimeCard
                date={"9/25"}
                time={"11:00 AM"}
                availableSeats={12}
                totalSeats={40}
              />
              <ShowtimeCard
                date={"10/5"}
                time={"1:00 PM"}
                availableSeats={26}
                totalSeats={40}
              />
              <ShowtimeCard
                date={"10/10"}
                time={"12:00 PM"}
                availableSeats={6}
                totalSeats={40}
              />
              <ShowtimeCard
                date={"10/25"}
                time={"10:00 AM"}
                availableSeats={1}
                totalSeats={40}
              />
              <ShowtimeCard
                date={"1/15"}
                time={"1:00 PM"}
                availableSeats={33}
                totalSeats={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
