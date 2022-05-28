// {
//     type: 'ADD_MOVIES'
//     movies: [m1,m2]
// }

// actions types
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';

// actions creaters
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies // shorthand movies : movies
    }
} 

export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie // shorthand movies : movies
    }
} 