"use client";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Movie } from "@/app/interfaces/movie";
import Link from "next/link";

const SearchResults = (props: { results: Movie[]; onClose: () => void }) => {
  const handleResultClick = () => {
    props.onClose();
  };

  return (
    <div className="w-2/5 absolute pt-12 z-10" onClick={handleResultClick}>
      <div className="bg-zinc-700 drop-shadow-xl flex flex-col max-h-80 overflow-y-scroll rounded-b-lg">
        {props.results &&
          props.results.map(
            (result, id) => (
              <Link
                className="h-16 border-t-2 border-gray-500 align-middle justify-around"
                key={id}
                href={"/" + result.id}
              >
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
              </Link>
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
  const searchRef = useRef(null);

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

  const handleCloseResults = () => {
    setResults([]);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !(searchRef.current as any).contains(event.target)
    ) {
      setResults([]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-3/5 h-[32px] bg-orange-50 rounded-[29px] flex"
      ref={searchRef}
    >
      <input
        className="w-full px-4 bg-transparent outline-none z-20"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      ></input>
      <SearchResults results={results} onClose={handleCloseResults} />
    </div>
  );
};

export default SearchBar;
