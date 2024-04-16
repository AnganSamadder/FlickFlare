"use client";
import React from "react";
import { Movie } from "@/app/interfaces/movie";

const SearchResults = (props: { results: Movie[] }) => {
  return (
    <div className="w-2/5 absolute pt-12 z-10">
      <div className="bg-zinc-700 drop-shadow-xl flex flex-col max-h-80 overflow-y-scroll rounded-b-lg">
        {props.results &&
          props.results.map(
            (result, id) => (
              <div className="h-16 border-t-2 border-gray-500 align-middle justify-around">
                <img
                  className="h-full p-1 rounded-lg object-scale-down float-left"
                  src={result["poster"]}
                  // alt={alt}
                />
                <div
                  className="y-full overflow-hidden text-white hover:text-orange-400 flex align-middle font-bold float-left"
                  key={id}
                >
                  {result["title"]}
                </div>
              </div>
            ),
            [],
          )}
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<Movie[]>([]);

  const fetchMovies = (value: string) => {
    fetch(`http://localhost:8080/movie/search?input=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(value ? data : []);
      });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    fetchMovies(event.target.value);
  };

  return (
    <div className="w-3/5 h-[32px] bg-orange-50 rounded-[29px] flex">
      <input
        className="w-full px-4 bg-transparent outline-none z-20"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      ></input>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchBar;
