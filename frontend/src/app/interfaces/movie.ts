export interface Movie {
    id: string;
    title: string;
    description: string;
    showtimes: string[];
    releaseDate: string;
    poster: string;
    trailer: string;
    genres: string[];
    director: string;
    producer: string;
    cast: string[];
    synopsis: string;
    mpaa: string;
    reviews: string[];
    upcoming: boolean;
    showing: boolean;
}
