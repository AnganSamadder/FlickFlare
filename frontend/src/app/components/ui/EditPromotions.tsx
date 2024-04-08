"use client";
import { Movie } from "@/app/interfaces/movie";
import InputField from "@/app/components/fields/InputField";
import React from "react";

const EditMoviesList = (props: {
  movies: Movie[];
  onClick: (movie: Movie) => void;
  selectedMovie: Movie | null;
}) => {
  return (
    <div className="w-full h-full bg-zinc-700 rounded-2xl overflow-y-scroll">
      {props.movies.map((movie, id) => {
        return (
          <div className="w-full h-16 p-1 flex justify-center">
            <button
              className={
                movie === props.selectedMovie
                  ? "w-full h-full rounded-lg flex bg-zinc-800"
                  : "w-full h-full rounded-lg flex hover:bg-zinc-800"
              }
              onClick={() => props.onClick(movie)}
            >
              <img
                className="h-full p-1 rounded-lg object-scale-down float-left"
                src={movie["poster"]}
                // alt={alt}
              />
              <div
                className="h-full pl-2 overflow-hidden text-white text-left text-ellipsis flex items-center justify-center font-bold float-left"
                key={id}
              >
                {movie["title"]}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const EditMovie = (props: { movie: Movie | null }) => {
  return (
    <div>
      {props.movie ? (
        <div className="flex h-[65vh]">
          <div className="w-3/5 h-full flex flex-col">
            <div className="flex p-2 pb-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Title
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="px-2 py-1 text-orange-500 text-2xl font-bold font-['Maven Pro']">
              Description
            </div>
            <div className="px-2 py-1">
              <textarea className="w-full p-2 rounded-md" rows={3}></textarea>
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                MPAA US Rating Code
              </div>
              <InputField />
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Poster
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Trailer
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="flex p-2">
              <div className="w-1/3">
                <div className="text-orange-500 text-2xl font-bold font-['Maven Pro']">
                  Poster Preview
                </div>
                <div className="px-8 object-scale-down">
                  <img src={props.movie["poster"]} className="rounded-lg" />
                </div>
              </div>
              <div className="w-2/3 h-full flex flex-col h-full">
                <div className="w-full text-orange-500 text-2xl font-bold font-['Maven Pro']">
                  Trailer Preview
                </div>
                <div className="w-auto h-full object-contain flex">
                  <iframe
                    src={props.movie["trailer"]}
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col">
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Director
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Producer
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Cast
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="flex px-2 py-1">
              <div className="pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                Genres
              </div>
              <InputField classname="w-full" />
            </div>
            <div className="px-2 py-1 text-orange-500 text-2xl font-bold font-['Maven Pro']">
              Review
            </div>
            <div className="px-2 py-1">
              <textarea className="w-full p-2 rounded-md" rows={3}></textarea>
            </div>
            <div className="px-2 py-1 flex justify-between">
              <div className="px-2 text-orange-500 text-2xl font-bold font-['Maven Pro'] float-left">
                Rating
              </div>
              <InputField classname="w-1/6 float-left" />
              <div className="w-20" />
              <button className="w-20 h-8 bg-orange-200 rounded-full text-black font-['Maven Pro'] float-right">
                Create
              </button>
              <button className="w-20 h-8 bg-orange-500 rounded-full text-white font-['Maven Pro'] float-right">
                Update
              </button>
            </div>
            <div className="px-2 pt-1 text-orange-500 text-2xl font-bold font-['Maven Pro']">
              Schedule
            </div>
            <div className="px-2 py-1 flex justify-evenly">
              <InputField classname="w-1/6" placeholder={"mon"} />
              <div className="text-white text-2xl font-bold font-['Maven Pro']">
                /
              </div>
              <InputField classname="w-1/6" placeholder={"day"} />
              <div className="text-white text-2xl font-bold font-['Maven Pro']">
                ,
              </div>
              <InputField classname="w-1/6" placeholder={"time"} />
              <button className="w-20 h-8 bg-orange-200 rounded-full text-black font-['Maven Pro'] float-right">
                Create
              </button>
              <button className="w-20 h-8 bg-orange-500 rounded-full text-white font-['Maven Pro'] float-right">
                Update
              </button>
            </div>
            <div className="w-full h-40 px-2 pb-4 flex flex-col justify-around">
              {props.movie.showtimes.map((schedule, id) => {
                return (
                  <div className="w-full h-8 flex justify-between" key={id}>
                    <div className="px-8 text-white text-2xl font-bold font-['Maven Pro']">
                      2/28 {schedule}
                    </div>
                    <button className="w-20 h-8 bg-red-500 rounded-full text-white font-['Maven Pro']">
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full justify-center items-center">
          <div className="text-white text-2xl font-bold pt-60">
            Select a movie to edit
          </div>
        </div>
      )}
    </div>
  );
};

const EditMovies = (props: { movies: Movie[] }) => {
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  const handleSelect = (movie: Movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  return (
    <div className="h-[75vh] p-4 flex bg-zinc-800 rounded-2xl">
      {/*<div className="w-1/4 h-full pr-2 flex flex-col items-center rounded-2xl">*/}
      {/*  <div className="text-white pb-2 text-2xl font-bold">Movies</div>*/}
      {/*  <EditMoviesList*/}
      {/*    movies={props.movies}*/}
      {/*    onClick={handleSelect}*/}
      {/*    selectedMovie={selectedMovie}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="w-3/4 h-full pl-2 flex flex-col items-center rounded-2xl">*/}
      {/*  <div className="text-white pb-2 text-2xl font-bold">Edit Movies</div>*/}
      {/*  <div className="w-full h-full bg-zinc-700 rounded-2xl">*/}
      {/*    <EditMovie movie={selectedMovie} />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default EditMovies;
